import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  Grid2,
} from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import ScannerLottie from "./assets/ScannerLottie.json";
import { list_details } from "./data";
import App from "./App";

const HomePage: React.FC = () => {
  return (
    <App>
      {/* dashboard pic Section */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }} className="welcome-grid">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight={600}
            color="#1977d2"
          >
            Welcome!
          </Typography>
          {/* <Typography variant="h5" component="h2" gutterBottom fontWeight={600} color="#1977d2">
              Join us in creating a culture of giving and support. Together, we
              can make a difference.
            </Typography> */}
          {/* <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
              Get Started
            </Button> */}
        </Box>
      </Container>

      {/* Content Section */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }} className="list-grid">
        <Grid2 container spacing={4}>
          {list_details?.map((item) => (
            <Grid2 size={{ xs: 12, md: 12 }}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Grid2 size={{ xs: 12, md: 12 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {item?.title}
                  </Typography>
                </Grid2>
                <Grid2 container spacing={4}>
                  <Grid2 size={{ xs: 12, md: 8 }}>
                    <Typography>{item?.desc}</Typography>
                  </Grid2>

                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <div className="lottie">
                      <Player
                        autoplay
                        loop
                        src={ScannerLottie}
                        style={{ height: "200px", width: "200px" }}
                      ></Player>
                    </div>
                  </Grid2>
                </Grid2>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </App>
  );
};

export default HomePage;
