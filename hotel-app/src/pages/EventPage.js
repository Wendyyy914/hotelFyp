// src/pages/EventsPage.js
import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Fab,
  IconButton,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

const EventsPage = () => {
  const navigate = useNavigate();

  const EventsContent = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [participants, setParticipants] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Cultural', 'Nature', 'Culinary', 'Wellness', 'Team Building'];

    const events = [
      {
        id: 1,
        name: "Paddy Field Exploration",
        price: "From $45/person",
        duration: "3 hours",
        capacity: "Up to 10 people",
        description: "Immerse yourself in Malaysian rural culture as you explore the scenic paddy fields with our experienced local guides. Learn about traditional rice cultivation methods and enjoy breathtaking views.",
        image: "/api/placeholder/400/200",
        category: "Cultural"
      },
      {
        id: 2,
        name: "Traditional Cooking Class",
        price: "From $60/person",
        duration: "2 hours",
        capacity: "Up to 8 people",
        description: "Learn to prepare authentic Malaysian dishes under the guidance of our skilled local chefs. Take home recipes and techniques to recreate these delicious meals.",
        image: "/api/placeholder/400/200",
        category: "Culinary"
      },
      {
        id: 3,
        name: "Sunrise Yoga by the Paddy",
        price: "From $25/person",
        duration: "1 hour",
        capacity: "Up to 12 people",
        description: "Start your day with a rejuvenating yoga session overlooking the golden paddy fields at sunrise. Our experienced instructors guide you through poses suitable for all levels.",
        image: "/api/placeholder/400/200",
        category: "Wellness"
      },
      {
        id: 4,
        name: "Corporate Team Building",
        price: "From $75/person",
        duration: "4 hours",
        capacity: "10-30 people",
        description: "Strengthen team bonds through a series of engaging activities in our scenic surroundings. Customizable program to suit your company's objectives and team dynamics.",
        image: "/api/placeholder/400/200",
        category: "Team Building"
      }
    ];

    const filteredEvents = activeCategory === 'All' 
      ? events 
      : events.filter(event => event.category === activeCategory);

    const handleBack = () => {
      navigate('/');
    };

    const handleChatClick = () => {
      navigate('/chat');
    };

    const handleEventDetails = (eventId) => {
      navigate(`/event-details/${eventId}`);
    };

    const handleBookEvent = (eventId) => {
      navigate(`/event-booking/${eventId}`);
    };

    const handleCustomEvent = () => {
      navigate('/event-customization');
    };

    return (
      <Box 
        sx={{ 
          minHeight: "100vh",
          backgroundColor: "#f8f8f8",
          overflow: "auto"
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
          <IconButton onClick={handleBack} sx={{ color: "#4d7c0f" }}>
            ←
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
            Event Packages
          </Typography>
          <IconButton sx={{ color: "#4d7c0f" }}>
            ☰
          </IconButton>
        </Box>

        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "200px",
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
              backgroundColor: "rgba(0,0,0,0.4)",
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
              Unforgettable Experiences
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                fontSize: "1rem",
                textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
              }}
            >
              Discover our curated selection of cultural & nature activities
            </Typography>
          </Box>
        </Box>

        {/* Event Filter */}
        <Card
          sx={{
            margin: "15px",
            padding: "15px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              marginBottom: "10px",
              fontSize: "1rem"
            }}
          >
            Find Your Perfect Event
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <TextField
              type="date"
              label="Date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ flex: 1 }}
              size="small"
            />
            <FormControl sx={{ flex: 1 }} size="small">
              <InputLabel>Participants</InputLabel>
              <Select
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                label="Participants"
              >
                <MenuItem value="1">1 Person</MenuItem>
                <MenuItem value="2">2 People</MenuItem>
                <MenuItem value="3-5">3-5 People</MenuItem>
                <MenuItem value="6+">6+ People</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#4d7c0f",
              color: "white",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#3d6a0a"
              }
            }}
          >
            Find Events
          </Button>
        </Card>

        {/* Event Categories */}
        <Box 
          sx={{ 
            display: "flex",
            overflowX: "auto",
            padding: "0 15px",
            marginBottom: "15px",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none"
          }}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setActiveCategory(category)}
              sx={{
                marginRight: "10px",
                padding: "10px 15px",
                borderRadius: "20px",
                whiteSpace: "nowrap",
                backgroundColor: activeCategory === category ? "#4d7c0f" : "#f0f0f0",
                color: activeCategory === category ? "white" : "#555",
                "&:hover": {
                  backgroundColor: activeCategory === category ? "#3d6a0a" : "#e0e0e0"
                }
              }}
            />
          ))}
        </Box>

        {/* Create Custom Event Button */}
        <Box sx={{ padding: "0 15px", marginBottom: "20px" }}>
          <Button
            fullWidth
            onClick={handleCustomEvent}
            sx={{
              backgroundColor: "#f0f0f0",
              color: "#4d7c0f",
              padding: "15px",
              borderRadius: "8px",
              fontWeight: 600,
              border: "2px dashed #4d7c0f",
              "&:hover": {
                backgroundColor: "#e8f5e8"
              }
            }}
          >
            ✨ Create Your Custom Event
          </Button>
        </Box>

        {/* Event Cards */}
        <Box sx={{ padding: "0 15px" }}>
          <Typography 
            variant="h5"
            sx={{
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "15px",
              color: "#333"
            }}
          >
            Featured Experiences
          </Typography>

          {filteredEvents.map((event) => (
            <Card 
              key={event.id}
              sx={{
                marginBottom: "20px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
              }}
            >
              <Box sx={{ position: "relative" }}>
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
                  📸 {event.name} Image
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "rgba(77, 124, 15, 0.9)",
                    color: "white",
                    padding: "8px 12px",
                    fontWeight: 600,
                    borderTopLeftRadius: "10px"
                  }}
                >
                  {event.price}
                </Box>
              </Box>
              
              <CardContent sx={{ padding: "15px" }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    marginBottom: "8px"
                  }}
                >
                  {event.name}
                </Typography>
                
                <Box 
                  sx={{ 
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    color: "#555",
                    fontSize: "0.9rem"
                  }}
                >
                  <Typography sx={{ marginRight: "15px" }}>
                    ⏱️ {event.duration}
                  </Typography>
                  <Typography>
                    👥 {event.capacity}
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: "0.9rem",
                    color: "#555",
                    marginBottom: "15px",
                    lineHeight: 1.4
                  }}
                >
                  {event.description}
                </Typography>
                
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleEventDetails(event.id)}
                    sx={{
                      flex: 1,
                      color: "#4d7c0f",
                      borderColor: "#4d7c0f",
                      fontWeight: 500,
                      "&:hover": {
                        borderColor: "#3d6a0a",
                        backgroundColor: "rgba(77, 124, 15, 0.04)"
                      }
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleBookEvent(event.id)}
                    sx={{
                      flex: 1,
                      backgroundColor: "#4d7c0f",
                      color: "white",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#3d6a0a"
                      }
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
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
      <BottomNavBar content={<EventsContent />} />
    </Container>
  );
};

export default EventsPage;