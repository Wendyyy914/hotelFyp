// src/pages/HomePage.js
import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Button,
  Fab,
  IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

const HomePage = () => {
  const navigate = useNavigate();

  const HomeContent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const quickAccessItems = [
      { icon: "🛏️", label: "Book a Room", path: "/rooms" },
      { icon: "🎉", label: "Event Packages", path: "/events" },
      { icon: "⭐", label: "Loyalty Program", path: "/loyalty" },
      { icon: "📍", label: "Local Recommendation", path: "/local" }
    ];

    const specialOffers = [
      {
        icon: "🌾",
        title: "Harvest Season Special",
        description: "20% off all rooms during the golden harvest season"
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Family Weekend Package", 
        description: "Includes breakfast and cultural activities for kids"
      },
      {
        icon: "💝",
        title: "Romantic Getaway",
        description: "Special couples package with private dining experience"
      }
    ];

    const handleQuickAccess = (path) => {
      navigate(path);
    };

    const handleProfileClick = () => {
      navigate('/login');
    };

    const handleChatClick = () => {
      navigate('/chat');
    };

    return (
      <Box 
        sx={{ 
          minHeight: "100vh",
          backgroundColor: "#f8f8f8",
          overflow: "auto",
          paddingBottom: "80px" // Space for bottom navigation
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            backgroundColor: "white",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            position: "sticky",
            top: 0,
            zIndex: 100
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#4d7c0f"
            }}
          >
            HOTEL PADI SENTRAL
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton 
              onClick={handleProfileClick}
              sx={{ 
                marginRight: "15px",
                color: "#4d7c0f"
              }}
            >
              👤
            </IconButton>
            <IconButton 
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{ color: "#4d7c0f" }}
            >
              ☰
            </IconButton>
          </Box>
        </Box>

        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "220px",
            backgroundColor: "#4d7c0f",
            backgroundImage: "linear-gradient(135deg, #4d7c0f 0%, #65a30d 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.2)",
              zIndex: 1
            }
          }}
        >
          <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontSize: "1.8rem",
                marginBottom: "10px",
                textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
              }}
            >
              Welcome to Padi Sentral
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                fontSize: "1rem",
                textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
              }}
            >
              Experience tranquility amidst golden paddy fields
            </Typography>
          </Box>
        </Box>

        {/* Quick Access Buttons */}
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            padding: "20px",
            marginTop: "-30px",
            position: "relative",
            zIndex: 5
          }}
        >
          {quickAccessItems.map((item, index) => (
            <Grid item xs={6} key={index}>
              <Card
                onClick={() => handleQuickAccess(item.path)}
                sx={{
                  padding: "15px 0",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.2s ease",
                  "&:active": {
                    transform: "scale(0.98)"
                  },
                  "&:hover": {
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    fontSize: "24px",
                    marginBottom: "8px"
                  }}
                >
                  {item.icon}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 500,
                    color: "#4a4a4a"
                  }}
                >
                  {item.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Featured Section */}
        <Typography 
          variant="h5"
          sx={{
            padding: "0 20px",
            margin: "25px 0 15px",
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#333"
          }}
        >
          Experience Paddy Field Living
        </Typography>
        <Box sx={{ padding: "0 20px" }}>
          <Card sx={{ position: "relative", borderRadius: "10px" }}>
            <Box
              sx={{
                height: "200px",
                backgroundColor: "#e8f5e8",
                backgroundImage: "linear-gradient(45deg, #e8f5e8 25%, transparent 25%), linear-gradient(-45deg, #e8f5e8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e8f5e8 75%), linear-gradient(-45deg, transparent 75%, #e8f5e8 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4d7c0f",
                fontSize: "14px"
              }}
            >
              🌾 Paddy Field Image Placeholder 🌾
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "15px",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                color: "white",
                borderRadius: "0 0 10px 10px"
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "5px" }}>
                Panoramic Paddy Views
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Wake up to golden fields and mountain backdrops
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* Location Section */}
        <Typography 
          variant="h5"
          sx={{
            padding: "0 20px",
            margin: "25px 0 15px",
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#333"
          }}
        >
          Our Location
        </Typography>
        <Box sx={{ padding: "0 20px", marginBottom: "25px" }}>
          <Box
            sx={{
              height: "200px",
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#777",
              fontSize: "14px"
            }}
          >
            🗺️ Interactive map will appear here
          </Box>
          <Card sx={{ padding: "15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              <strong>Hotel Padi Sentral</strong><br />
              123 Paddy View Road, Sekinchan, 45400<br />
              Selangor, Malaysia
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "15px" }}>
              Surrounded by scenic rice fields, our hotel is located in the heart of Sekinchan, 
              just 5 minutes from the beach and local attractions.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                sx={{ 
                  color: "#4d7c0f",
                  fontWeight: 500,
                  fontSize: "0.9rem"
                }}
              >
                🗺️ Get Directions
              </Button>
              <Button
                href="tel:+60123456789"
                sx={{ 
                  color: "#4d7c0f",
                  fontWeight: 500,
                  fontSize: "0.9rem"
                }}
              >
                📞 Contact Us
              </Button>
            </Box>
          </Card>
        </Box>

        {/* Special Offers */}
        <Typography 
          variant="h5"
          sx={{
            padding: "0 20px",
            margin: "25px 0 15px",
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#333"
          }}
        >
          Special Offers
        </Typography>
        <Box sx={{ padding: "0 20px" }}>
          {specialOffers.map((offer, index) => (
            <Card 
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                marginBottom: "15px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
                }
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: "28px",
                  marginRight: "15px",
                  flexShrink: 0
                }}
              >
                {offer.icon}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 600,
                    marginBottom: "5px"
                  }}
                >
                  {offer.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: "#666" }}
                >
                  {offer.description}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Book Now Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate('/rooms')}
          sx={{
            backgroundColor: "#4d7c0f",
            color: "white",
            padding: "15px",
            margin: "25px 20px",
            fontWeight: 600,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "#3d6a0a"
            }
          }}
        >
          Book Your Stay Now
        </Button>

        {/* About Section */}
        <Typography 
          variant="h5"
          sx={{
            padding: "0 20px",
            margin: "25px 0 15px",
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#333"
          }}
        >
          About Hotel Padi Sentral
        </Typography>
        <Box sx={{ padding: "0 20px", marginBottom: "30px" }}>
          <Card sx={{ padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: "15px"
              }}
            >
              Nestled among the lush paddy fields of Malaysia, Hotel Padi Sentral offers a unique blend 
              of modern comfort and rural charm. Our rooms provide panoramic views of golden rice fields, 
              creating a peaceful retreat from busy city life.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: "15px"
              }}
            >
              We pride ourselves on authentic cultural experiences, locally-sourced cuisine, 
              and warm Malaysian hospitality.
            </Typography>
            <Button
              onClick={() => navigate('/about')}
              sx={{ 
                color: "#4d7c0f",
                fontWeight: 600,
                padding: 0,
                minWidth: "auto"
              }}
            >
              Read More →
            </Button>
          </Card>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: "#333",
            color: "#ddd",
            padding: "30px 20px",
            fontSize: "0.9rem"
          }}
        >
          <Typography 
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "15px",
              color: "white",
              fontSize: "1.2rem"
            }}
          >
            HOTEL PADI SENTRAL
          </Typography>
          
          <Box sx={{ marginBottom: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", marginBottom: "8px" }}>
              <Typography sx={{ marginRight: "10px", color: "#4d7c0f" }}>📍</Typography>
              <Typography variant="body2">123 Paddy View Road, Sekinchan, Malaysia</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", marginBottom: "8px" }}>
              <Typography sx={{ marginRight: "10px", color: "#4d7c0f" }}>📞</Typography>
              <Typography variant="body2">+60 12-345-6789</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", marginBottom: "8px" }}>
              <Typography sx={{ marginRight: "10px", color: "#4d7c0f" }}>✉️</Typography>
              <Typography variant="body2">info@hotelpadisentral.com</Typography>
            </Box>
          </Box>

          <Box sx={{ marginBottom: "20px" }}>
            {["About Us", "Contact Us", "FAQ", "Terms & Conditions", "Privacy Policy"].map((link, index) => (
              <Typography 
                key={index}
                variant="body2" 
                sx={{ 
                  marginBottom: "8px",
                  color: "#bbb",
                  cursor: "pointer",
                  "&:hover": { color: "#4d7c0f" }
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              borderTop: "1px solid #444",
              paddingTop: "20px",
              marginTop: "20px",
              textAlign: "center",
              color: "#888",
              fontSize: "0.8rem"
            }}
          >
            © 2025 Hotel Padi Sentral. All rights reserved.
          </Box>
        </Box>

        {/* Chat Button */}
        <Fab
          onClick={handleChatClick}
          sx={{
            position: "fixed",
            bottom: "90px", // Above bottom navigation
            right: "20px",
            backgroundColor: "#4d7c0f",
            color: "white",
            "&:hover": {
              backgroundColor: "#3d6a0a"
            }
          }}
        >
          💬
        </Fab>
      </Box>
    );
  };

  return (
    <Container 
      maxWidth="false" 
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        padding: 0,
        margin: 0,
        boxSizing: "border-box"
      }}
    >
      <BottomNavBar content={<HomeContent />} />
    </Container>
  );
};

export default HomePage;