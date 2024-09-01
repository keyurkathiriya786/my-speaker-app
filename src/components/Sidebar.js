import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  TextField,
  Typography,
  Checkbox,
  AppBar,
  Toolbar,
  InputAdornment,
  Avatar,
  Grid,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";

const speakers = [
  {
    name: "Eleanor Pena",
    title: "President of Sales",
    organization: "XYZ Organisation",
  },
  {
    name: "Esther Howard",
    title: "Marketing Coordinator",
    organization: "XYZ Organisation",
  },
  {
    name: "Albert Flores",
    title: "Nursing Assistant",
    organization: "XYZ Organisation",
  },
  {
    name: "John Doe",
    title: "Marketing Head",
    organization: "XYZ Organisation",
  },
  {
    name: "Savannah Nguyen",
    title: "Web Designer",
    organization: "XYZ Organisation",
  },
];

const Sidebar = ({ open, onClose }) => {
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (speaker) => {
    const currentIndex = selectedSpeakers.indexOf(speaker);
    const newChecked = [...selectedSpeakers];

    if (currentIndex === -1) {
      newChecked.push(speaker);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedSpeakers(newChecked);
  };

  const filteredSpeakers = speakers.filter((speaker) =>
    speaker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      className="sidebar-main"
      PaperProps={{ sx: { width: { xs: "100%", sm: 360 } } }}
    >
      <AppBar className="sidebar-mui-appbar" position="static" color="default">
        <Toolbar>
          <Typography sx={{ flexGrow: 1, fontSize: "17px" }}>
            Add Speaker
          </Typography>
          <IconButton edge="end" color="inherit" onClick={onClose}>
            <CloseIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box className="sidebar-search-field-main-div" sx={{ padding: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          className="sidebar-search-field"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <List sx={{ overflowY: "auto", height: "calc(100% - 128px)" }}>
        {filteredSpeakers.map((speaker, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
            }
            sx={{
              border: selectedSpeakers.includes(speaker)
                ? "2px solid LimeGreen"
                : "none",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <Checkbox
              checked={selectedSpeakers.indexOf(speaker) !== -1}
              onChange={() => handleToggle(speaker)}
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "#4CBB3E",
                },
              }}
            />
            <Avatar alt={speaker.name} sx={{ marginRight: 2 }} />
            <ListItemText
              primary={speaker.name}
              secondary={`${speaker.title} | ${speaker.organization}`}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Button
          variant="contained"
          color="primary"
          disabled={selectedSpeakers.length === 0}
          sx={{
            backgroundColor:
              selectedSpeakers.length !== 0 ? "#FF7043" : "primary.main",
            "&:hover": {
              backgroundColor:
                selectedSpeakers.length !== 0 ? "#FF7043" : "primary.dark",
            },
            textTransform : "capitalize",
            width: { xs: "10%"} 
          }}
        >
          Add
        </Button>
        <Button variant="outlined" sx={{backgroundColor : "#FCF3EF", color : "#E4875D", textTransform : "capitalize", border : 0}} onClick={onClose}>
          Cancel
        </Button>
        <Button sx={{textTransform : "capitalize", color : "#E4875D"}} variant="text" color="primary">
          Create a speaker
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
