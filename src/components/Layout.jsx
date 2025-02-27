import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom"; // To render child components

const Layout = () => {
  const headerHeight = 64; // Header height

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", padding: 0 }}>
      {/* Sidebar fixed on the left */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "240px",
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          zIndex: 999,
        }}
      >
        <Sidebar />
      </Box>

      {/* Header fixed on the top */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          backgroundColor: "#000",
          zIndex: 1000,
        }}
      >
        <Header />
      </Box>

      {/* Main content section */}
      <Box
        sx={{
          marginLeft: "240px",
          marginTop: `${headerHeight}px`,
          padding: "20px",
          flexGrow: 1,
          height: "calc(100vh - 64px)",
          overflowY: "auto",
        }}
      >
        <Outlet /> {/* Renders the page content */}
      </Box>
    </Box>
  );
};

export default Layout;
