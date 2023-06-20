import { Box, Container } from "@mui/material";
import React, { useState } from "react";

const SelectImageComponent = ({ selectedImage, setSelectedImage }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageSelection(file);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    handleImageSelection(file);
  };

  const handleImageSelection = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      sx={{
        height: "100%",
        backgroundColor: "#f7f2e4",
        border: "border: 1px dashed black",
        // dotted border
      }}
    >
      <div
        sx={{
          margin: "auto",
          height: "50px",
        }}
      >
        <h1>asdas</h1>
      </div>

      {/* <div
        className="image-selector"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" />
        ) : (
          <div className="placeholder">Drop an image or click to select</div>
        )}








        <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
        ref={(fileInput) => (this.fileInput = fileInput)}
    />
      
      
        <button onClick={() => this.fileInput.click()}>Select Image</button>
      </div> */}
    </Container>
  );
};

export default SelectImageComponent;
