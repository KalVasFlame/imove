import { useState } from "react";

import { postPost } from "../../api/dashboardApi";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  TextareaAutosize,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  const [type, setType] = useState("Cars");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const sendData = () => {
    postPost(title, description, type);
    setTitle("");
    setDescription("");
    alert("Post Created");
  };

  return (
    <Box m={5}>
      <FormControl fullWidth>
        <InputLabel id="type">{type}</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"Cars"}>Cars</MenuItem>
          <MenuItem value={"Auto Parts"}>Auto Parts</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
      <Box mt={5}>
        <Typography variant="h6"> Add Title</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Add Title"
          style={{ width: 100 + "%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Box
        mt={5}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Type something..."
          style={{ width: 100 + "%" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ fontSize: 48 }}
        />
      <Button onClick={sendData} variant="contained" sx={{ fontSize: 12 }}>
        Post
      </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
