import React, { ReactNode } from 'react';
import './App.css';
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
import { NavLink } from 'react-router-dom';

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

function App({children}:any) {
  return (
  <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar */}
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BlessingBox
            </Typography>
            <Button color="inherit" className='navlink'><NavLink to="/">Home</NavLink></Button>
            <Button color="inherit" className='navlink'><NavLink to="/about">About</NavLink></Button>
            <Button color="inherit" className='navlink'> <NavLink to="/contact">Contact</NavLink></Button>
          </Toolbar>
        </AppBar>
        {children}
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
}

export default App;
