import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SelectImageComponent from "../../components/SelectImageComponent";
import PostPropertyForm from "../../components/PostPropertyForm";
import { Link } from "react-router-dom";

const CreatePostPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container
      sx={{
        width: "80%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PostPropertyForm />
    </Container>
  );
};

export default CreatePostPage;
