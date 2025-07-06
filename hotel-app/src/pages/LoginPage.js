// src/pages/LoginPage.js
import React, { useState, useEffect } from "react";
import NotificationMessage from "../components/NotificationMessage";
import useAuth from "../hooks/useAuth";
import axios from '../api/axios';
// import BottomNavBar from "../components/BottomNavBar";
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Tab, 
  Tabs, 
  Checkbox, 
  FormControlLabel,
  IconButton,
  Link
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
// import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import axios from '../api/axios';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const LoginPage = () => {

  const LoginContent = () => {
    const { login, isLoggedIn } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState(0);
    const [error, setError] = useState("");
    const [notification, setNotification] = useState(location.state?.notification || null);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Login form state
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
      rememberMe: false
    });
    
    // Register form state
    const [registerData, setRegisterData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      loyaltyProgram: false,
      agreeTerms: false
    });

    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
      setError("");
    };

    const handleLoginChange = (field) => (event) => {
      setLoginData(prev => ({
        ...prev,
        [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }));
    };

    const handleRegisterChange = (field) => (event) => {
      setRegisterData(prev => ({
        ...prev,
        [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }));
    };

    const handleLogin = async () => {
      try {
        setError("");
        // Add your login logic here
        console.log("Login data:", loginData);
        // await login(loginData.email, loginData.password);
      } catch (err) {
        setError("Login failed. Please check your credentials.");
      }
    };

    const handleRegister = async () => {
      try {
        setError("");
        if (registerData.password !== registerData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }
        if (!registerData.agreeTerms) {
          setError("Please agree to the Terms of Service and Privacy Policy");
          return;
        }
        // Add your register logic here
        console.log("Register data:", registerData);
      } catch (err) {
        setError("Registration failed. Please try again.");
      }
    };

    const handleBack = () => {
      navigate(-1);
    };

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f8f8f8",
          overflow: "auto"
        }}
      >
        {notification && <NotificationMessage status={notification.status} message={notification.message} />}
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            backgroundColor: "white",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 100
          }}
        >
          <IconButton onClick={handleBack} sx={{ color: "#4d7c0f" }}>
            {/* <ArrowBack /> */}
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1.1rem",
              flexGrow: 1,
              textAlign: "center",
              marginLeft: "-48px" // Offset for back button to center title
            }}
          >
            Account Access
          </Typography>
        </Box>

        {/* Auth Container */}
        <Box sx={{ padding: "20px", maxWidth: "500px", margin: "0 auto", width: "100%" }}>
          {/* Logo */}
          <Box sx={{ textAlign: "center", margin: "30px 0" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#4d7c0f",
                marginBottom: "5px"
              }}
            >
              HOTEL PADI SENTRAL
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                color: "#666"
              }}
            >
              Experience tranquility amidst golden paddy fields
            </Typography>
          </Box>

          {/* Auth Tabs */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              marginBottom: "20px"
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 500,
                  minHeight: "50px"
                },
                "& .MuiTab-root.Mui-selected": {
                  backgroundColor: "#4d7c0f",
                  color: "white"
                },
                "& .MuiTabs-indicator": {
                  display: "none"
                }
              }}
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>
          </Box>

          {/* Form Container */}
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              marginBottom: "20px"
            }}
          >
            {activeTab === 0 ? (
              // Login Form
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "20px",
                    color: "#333"
                  }}
                >
                  Welcome Back
                </Typography>

                <TextField
                  fullWidth
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleLoginChange('email')}
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange('password')}
                  sx={{ marginBottom: "20px" }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={loginData.rememberMe}
                      onChange={handleLoginChange('rememberMe')}
                    />
                  }
                  label="Remember me"
                  sx={{ marginBottom: "20px" }}
                />

                <Box sx={{ textAlign: "right", marginBottom: "20px" }}>
                  <Link href="#" sx={{ color: "#4d7c0f", fontSize: "0.9rem" }}>
                    Forgot Password?
                  </Link>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                    backgroundColor: "#4d7c0f",
                    padding: "14px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "15px",
                    "&:hover": {
                      backgroundColor: "#3d6a0a"
                    }
                  }}
                >
                  Login
                </Button>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#666",
                    textAlign: "center"
                  }}
                >
                  By logging in, you agree to our{" "}
                  <Link href="#" sx={{ color: "#4d7c0f" }}>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" sx={{ color: "#4d7c0f" }}>
                    Privacy Policy
                  </Link>
                </Typography>
              </Box>
            ) : (
              // Register Form
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "20px",
                    color: "#333"
                  }}
                >
                  Create an Account
                </Typography>

                <TextField
                  fullWidth
                  type="text"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={registerData.fullName}
                  onChange={handleRegisterChange('fullName')}
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  fullWidth
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={handleRegisterChange('email')}
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  placeholder="Create a password"
                  value={registerData.password}
                  onChange={handleRegisterChange('password')}
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange('confirmPassword')}
                  sx={{ marginBottom: "20px" }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={registerData.loyaltyProgram}
                      onChange={handleRegisterChange('loyaltyProgram')}
                    />
                  }
                  label="Join the Hotel Padi Sentral Loyalty Program"
                  sx={{ marginBottom: "20px", display: "block" }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={registerData.agreeTerms}
                      onChange={handleRegisterChange('agreeTerms')}
                    />
                  }
                  label="I agree to the Terms of Service and Privacy Policy"
                  sx={{ marginBottom: "20px", display: "block" }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleRegister}
                  sx={{
                    backgroundColor: "#4d7c0f",
                    padding: "14px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "15px",
                    "&:hover": {
                      backgroundColor: "#3d6a0a"
                    }
                  }}
                >
                  Create Account
                </Button>
              </Box>
            )}

            {error && (
              <Typography
                variant="body2"
                sx={{
                  color: "red",
                  textAlign: "center",
                  marginTop: "10px"
                }}
              >
                {error}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxWidth="false" sx={{
      width: "100%", 
      height: "844px", 
      position: 'relative',
      padding: 0, 
      margin: 0, 
      boxSizing: "border-box",
    }}>
      {/* <BottomNavBar content={<LoginContent />} /> */}
      <LoginContent />
    </Container>
  );
};

export default LoginPage;