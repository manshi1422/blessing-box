import React from "react";
import App from "./App";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Avatar,
  Grid2,
} from '@mui/material';

export const About = () => {
  return (
    <App>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          p: 4,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          About Blessing Box
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Spreading Kindness, One Box at a Time
        </Typography>
        <Button
          variant="contained"
          className="button"
          size="large"
          sx={{ mt: 3 }}
          href="/"
        >
          Get Involved
        </Button>
      </Box>

      {/* Mission Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" >
          Blessing Box is a community-driven initiative aimed at helping those in
          need by providing essential items such as food, toiletries, and
          clothing. Our mission is to create a network of kindness where
          everyone can contribute and receive support.
        </Typography>
        <Typography variant="body1" >
          We believe that small acts of kindness can make a big difference in
          someone's life. By placing Blessing Boxes in neighborhoods, we make it
          easy for people to give and receive help anonymously and with dignity.
        </Typography>
      </Paper>

      {/* How It Works Section */}
      <Grid2 container spacing={4} sx={{ mb: 12 }}>
        <Grid2 size={{xs:12, md:6}}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              How It Works
            </Typography>
            <Typography variant="body1" >
              <strong>1. Find a Blessing Box:</strong> Locate a Blessing Box in
              your community. These boxes are usually placed in easily accessible
              areas.
            </Typography>
            <Typography variant="body1" >
              <strong>2. Give or Take:</strong> If you have items to donate,
              place them in the box. If you're in need, take what you require.
            </Typography>
            <Typography variant="body1" >
              <strong>3. Spread the Word:</strong> Share the location of the
              Blessing Box with others and encourage them to participate.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{xs:12, md:6}}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              What You Can Donate
            </Typography>
            <Typography variant="body1" >
              <strong>Non-Perishable Food:</strong> Canned goods, pasta, rice,
              cereal, etc.
            </Typography>
            <Typography variant="body1" >
              <strong>Toiletries:</strong> Soap, shampoo, toothpaste, etc.
            </Typography>
            <Typography variant="body1" >
              <strong>Clothing:</strong> Clean and gently used clothing items.
            </Typography>
            <Typography variant="body1" >
              <strong>Other Essentials:</strong> Blankets, socks, gloves, etc.
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>

      {/* Get Involved Section */}
      <Grid2 container spacing={4} sx={{ mb: 4 }}>
      <Box id="get-involved" sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Get Involved
        </Typography>
        <Typography variant="body1" sx={{mb:4}} >
          Join us in making a difference! Here are some ways you can help:
        </Typography>
        <Grid2 container spacing={3} justifyContent="center">
          <Grid2 size={{xs:12, sm:6,md:4}}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <div className="avatar">
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2,mr:2 }}>1</Avatar>
              <Typography variant="h6" gutterBottom>
                Donate Items
              </Typography>
              </div>
              <Typography variant="body2">
                Contribute essential items to a Blessing Box near you.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 size={{xs:12, sm:6,md:4}}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <div className="avatar">
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2,mr:2 }}>2</Avatar>
              <Typography variant="h6" gutterBottom>
                Volunteer
              </Typography>
              </div>
              <Typography variant="body2">
                Help maintain and restock Blessing Boxes in your area.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 size={{xs:12, sm:6,md:4}}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <div className="avatar">
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2,mr:2 }}>3</Avatar>
              <Typography variant="h6" gutterBottom>
                Spread Awareness
              </Typography>
              </div>
              <Typography variant="body2">
                Share the Blessing Box initiative with your community.
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
      </Grid2>
    
    </Container>
    </App>
  );
};
