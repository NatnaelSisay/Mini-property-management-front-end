import {
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import SelectImageComponent from "../../components/SelectImageComponent";
import PostPropertyForm from "../../components/PostPropertyForm";
import { Link, useNavigate } from "react-router-dom";
import { createProperty } from "../../apis/propertiesAPi";

const CreatePostPage = () => {
  const [selectedImage, setImageSelected] = useState(null);
  const formRef = useRef();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    data.price = Number(data.price);
    data.area = Number(data.area);
    data.numberOfBedrooms = Number(data.numberOfBedrooms);
    data.yearBuilt = Number(data.yearBuilt);
    data.numberOfBathrooms = Number(data.numberOfBathrooms);
    data.numberOfFloors = Number(data.numberOfFloors);

    data.address = {
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
    };

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        data.image = base64;
        createProperty(data)
          .then((res) => {
            navigate(-1);
          })
          .catch((err) => {
            if (err.response) {
              if (err.response.status === 403) {
                setSnackbarContent(err.response.data.error);
                setShowSnackbar(true);
              }
            }
          });
      };
      reader.readAsDataURL(selectedImage);
    }
    // formData.append("image", selectedImage);
  };

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
      <PostPropertyForm
        ref={formRef}
        selectedImage={selectedImage}
        setImageSelected={setImageSelected}
        onSubmit={onSubmit}
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={(event, reason) => {
          setShowSnackbar(false);
        }}
        key={"top" + "right"}
        message={snackbarContent}
      />
    </Container>
  );
};

export default CreatePostPage;
