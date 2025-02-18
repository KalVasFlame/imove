import { useState } from "react";

import { postPost } from "../../api/dashboardApi";

import ImagesUploader from "../ImagesUploader/ImagesUploader";

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

const CreatePost = ({ setIsOpen }) => {
  const [type, setType] = useState("Cars");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [resetImages, setResetImages] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const sendData = () => {
    if (!title || !description || !type || !images) {
      return alert("Please fill all the fields");
    }
    postPost(title, description, type, images);
    setTitle("");
    setDescription("");
    setType("Cars");
    setImages([]);
    setResetImages(true);
    setIsOpen(false);
  };

  return (
    <Box m={5}>
      <Button
        onClick={() => setIsOpen(false)}
        variant="outlined"
        sx={{ marginBottom: 5 }}
      >
        Back
      </Button>
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
        <ImagesUploader
          resetImages={resetImages}
          images={images}
          setImages={setImages}
          status={status}
          setStatus={setStatus}
        />
        <Button onClick={sendData} variant="contained" sx={{ fontSize: 12 }}>
          Post
        </Button>
      </Box>
    </Box>
  );
};
export default CreatePost;
