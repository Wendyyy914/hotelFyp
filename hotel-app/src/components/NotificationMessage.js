import React from "react";
import { Box, Typography } from "@mui/material";

const NotificationMessage = ({ status, message }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        padding: "10px",
        backgroundColor: status === 1 ? "#4CAF50" : "#FF5252", // Green for success, Red for fail
        color: "white",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        fontFamily: "Poppins",
        fontSize: "16px",
        zIndex: 3000, 
      }}
    >
      <Typography>
        {status === 1 ? `✅ ${message}` : `❌ ${message}`}
      </Typography>
    </Box>
  );
};

export default NotificationMessage;
