// src/components/BottomNavBar.js
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavBar = ({ content }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');

  // Update active tab based on current location
  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setActiveTab('home');
        break;
      case '/rooms':
        setActiveTab('rooms');
        break;
      case '/events':
        setActiveTab('events');
        break;
      case '/loyalty':
        setActiveTab('loyalty');
        break;
      case '/profile':
        setActiveTab('profile');
        break;
      default:
        setActiveTab('home');
    }
  }, [location.pathname]);

  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home', path: '/' },
    { id: 'rooms', icon: '🛏️', label: 'Rooms', path: '/rooms' },
    { id: 'events', icon: '🎉', label: 'Events', path: '/events' },
    { id: 'loyalty', icon: '⭐', label: 'Loyalty', path: '/loyalty' },
    { id: 'profile', icon: '👤', label: 'Profile', path: '/profile' }
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    navigate(item.path);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Main Content Area */}
      <Box 
        sx={{ 
          flex: 1, 
          overflow: 'auto',
          paddingBottom: '70px' // Space for bottom navigation
        }}
      >
        {content}
      </Box>
      
      {/* Bottom Navigation */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          zIndex: 90
        }}
      >
        {navItems.map((item) => (
          <Box
            key={item.id}
            onClick={() => handleNavClick(item)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: activeTab === item.id ? '#4d7c0f' : '#777',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#4d7c0f'
              }
            }}
          >
            <Box
              sx={{
                fontSize: '1.2rem',
                marginBottom: '5px'
              }}
            >
              {item.icon}
            </Box>
            <Box component="span">
              {item.label}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BottomNavBar;