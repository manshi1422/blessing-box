import React from "react";
import App from "./App";
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Grid2,
  CircularProgress,
  Fade,
} from "@mui/material";
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading,setLoading]=useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
    const serviceID = process.env.REACT_APP_SERVICEID || "";
    const templateID = process.env.REACT_APP_TEMPLATEID || "";

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData,{
        publicKey:  process.env.REACT_APP_PUBLICKEY  || '',
      })
      .then((response) => {
        // console.log('Email sent successfully!', response);
        // setSnackbarMessage('Message sent successfully!');
        // setSnackbarSeverity('success');
        // setSnackbarOpen(true);
        setLoading(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // setSnackbarMessage('Failed to send message. Please try again.');
        // setSnackbarSeverity('error');
        // setSnackbarOpen(true);
        setLoading(false);
      });
  };
  return (
    <App>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            sx={{ mb: 4 }}
          >
            We'd love to hear from you! Please fill out the form below.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <Box display="flex" justifyContent="center">
                  <Button
                    type="submit"
                    variant="contained"
                    className="button"
                    size="large"
                    disabled={loading}
                  >
                    Submit
                    
                  {loading && <Fade in={loading}><CircularProgress size={14} color="inherit"/></Fade>}
                  </Button>
                </Box>
              </Grid2>
            </Grid2>
          </form>
        </Paper>
      </Container>
    </App>
  );
};
