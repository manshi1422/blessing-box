import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Link,
  Grid2,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Player } from "@lottiefiles/react-lottie-player";
import ScannerLottie from "./assets/ScannerLottie.json";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const HomePage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar */}
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BlessingBox
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }} className="welcome-grid">
          <Box sx={{ textAlign: "center", padding: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom fontWeight={600} color="#1977d2">
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
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 12 }}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Grid2 size={{ xs: 12, md: 12 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Feature One
                  </Typography>
                </Grid2>
                <Grid2 container spacing={4}>
                  <Grid2 size={{ xs: 12, md: 8 }}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
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
            <Grid2 size={{ xs: 12, md: 12 }}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Feature Two
                </Typography>
                <Typography>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Paper>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Feature Three
                </Typography>
                <Typography>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </Paper>
            </Grid2>
          </Grid2>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            MyApp
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Built with ❤️ using Material-UI and React
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {"© "}
            <Link color="inherit" href="https://myapp.com/">
              MyApp
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
