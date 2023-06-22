import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import imageUrlBuilder from "../utils/imageUrlBuilder";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
  addFavorite,
  getFavorite,
  removeFavorite,
} from "../apis/propertiesAPi";

export default function PropertyCard({ property, onClick }) {
  if (!property) return null;
  const [isFavorite, setIsFavorite] = useState(null);
  useEffect(() => {
    getFavorite(property.id)
      .then((res) => {
        setIsFavorite(res);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) setIsFavorite(false);
        }
      });
  }, []);

  const addToFavorite = () => {
    addFavorite(property.id)
      .then((res) => {
        setIsFavorite(true);
      })
      .catch((err) => {});
  };
  const removeFromFavorites = () => {
    removeFavorite(property.id)
      .then((res) => {
        setIsFavorite(false);
      })
      .catch((err) => {});
  };

  return (
    <Card variant="outlined" sx={{ width: 400, margin: 3 }} onClick={onClick}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={imageUrlBuilder(property.image)} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h1" fontSize="25px">
          ${property.price}
        </Typography>
      </CardContent>

      <CardContent orientation="horizontal">
        <Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
          {/* 3 bedroom */}
          {property.numberOfBedrooms}{" "}
          {property.numberOfBathrooms > 1 ? "bedrooms" : "bedroom"}
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
          {/* 2 bathroom */}
          {property.numberOfBathrooms}{" "}
          {property.numberOfBathrooms > 1 ? "bathrooms" : "bathroom"}
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
          {/* 1,400 sqft */}
          {property.area} sqft
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
          {/* 2 floors */}
          {property.numberOfFloors}{" "}
          {property.numberOfFloors > 1 ? "floors" : "floor"}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          level="body2"
          fontSize="16px"
          fontWeight="bold"
          sx={{ mt: 0.7 }}
        >
          {/* 1234 Main St, San Francisco, CA 94122 */}
          {property.address.street} , {property.address.city},
          {property.address.state} , {property.address.zipcode}
        </Typography>
        <Typography
          level="body2"
          fontSize="16px"
          fontWeight="bold"
          sx={{ mt: 0.5 }}
        >
          G+2 House
          {/* {props.type} */}
        </Typography>
      </CardContent>

      <CardOverflow>
        <Divider inset="context" />

        <CardContent>
          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            {property.propertyType} | {property.propertyStatus}
          </Typography>
        </CardContent>

        {isFavorite !== null && (
          <Box
            sx={{
              padding: "10px",
              height: "50px",
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (isFavorite) removeFromFavorites();
              else addToFavorite();
            }}
          >
            <Favorite
              sx={{
                color: isFavorite ? "red" : "black",
              }}
            />
          </Box>
        )}
      </CardOverflow>
    </Card>
  );
}
