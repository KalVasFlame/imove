import { useState } from "react";

import { Box, Button } from "@mui/material";

import CreatePost from "../CreatePost/CreatePost";
import PostsList from "../PostsList/PostsList";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      {!isOpen && <Button onClick={() => setIsOpen(true)}>Create Post</Button>}
      {isOpen && <CreatePost setIsOpen={setIsOpen} />}
      <PostsList />
    </Box>
  );
};

export default Dashboard;
