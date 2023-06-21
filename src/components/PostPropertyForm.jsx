import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PostPropertyForm = ({ selectedImage, setImageSelected }) => {
  const handleButtonClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      setImageSelected(file);
    };
    input.click();
  };

  return (
    <Card
      margin="50px"
      elevation={5}
      sx={{
        padding: "20px",
      }}
    >
      <Container sx={{}} maxWidth="md">
        <Typography level="h1" fontSize="25px">
          Post a property for sell
        </Typography>

        <br />

        <form>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px 0",
            }}
          >
            <InputField name="price" type="number" label="price" />
            <SelectPropertyType />
            <InputField name="area" type="number" label="area" />
            <InputField
              name="numberOfBedrooms"
              type="number"
              label="Number of bedrooms"
            />
            <InputField
              name="numberOfBathrooms"
              type="number"
              label="Number of bathrooms"
            />
            <InputField
              name="numberOfFloors"
              type="number"
              label="Number of floors"
            />
            <InputField name="yearBuilt" type="number" label="Year built" />
            {selectedImage && (
              <img
                height="80px"
                style={{
                  objectFit: "contain",
                }}
                src={URL.createObjectURL(selectedImage)}
              />
            )}
            {selectedImage && (
              <Button color="error" onClick={() => setImageSelected(null)}>
                Remove picture
              </Button>
            )}
            {!selectedImage && (
              <Button onClick={handleButtonClick}> Upload picture</Button>
            )}
          </Box>

          <br />
          <br />
          <Divider variant="middle" />
          <br />

          <Typography>Address</Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px 0",
            }}
          >
            <InputField name="street" type="text" label="Street" />
            <InputField name="city" type="text" label="City" />
            <InputField name="state" type="text" label="State" />
            <InputField name="zip" type="text" label="Zipcode" />
          </Box>
          <br />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            name="description"
          />

          <br />
          <br />
          <Button color="primary" variant="contained">
            Post Property
          </Button>
        </form>
      </Container>
    </Card>
  );
};

const InputField = ({ label, name, type }) => (
  <Box
    // width="45%"
    sx={{
      width: {
        sm: "100%",
        md: "45%",
        md: "30%",
      },
    }}
  >
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      name={name}
      type={type}
    />
  </Box>
);

const SelectPropertyType = ({}) => (
  <FormControl
    sx={{
      width: {
        sm: "100%",
        md: "45%",
        md: "30%",
      },
    }}
  >
    <InputLabel>Property type</InputLabel>
    <Select label="Property type">
      <MenuItem value="HOUSE">Couse</MenuItem>
      <MenuItem value="CONDO">Condo</MenuItem>
      <MenuItem value="TOWNHOUSE">Town house</MenuItem>
      <MenuItem value="DUPLEX">Duplex</MenuItem>
      <MenuItem value="APARTMENT">Apartment</MenuItem>
    </Select>
  </FormControl>
);

export default PostPropertyForm;
