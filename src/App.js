import "./App.css";
import React, { useState } from "react";
import { Button, CssBaseline, Box } from '@mui/material';
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  return (
    <Box sx={{ padding: 4 }}>
      <CssBaseline />
      <Button className="add-speaker-btm-main" variant="contained" onClick={handleSidebarOpen}>
        Add Speaker
      </Button>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
    </Box>
  );
}

export default App;
