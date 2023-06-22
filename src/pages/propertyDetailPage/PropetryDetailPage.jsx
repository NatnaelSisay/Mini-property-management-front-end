import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { mockProperty } from "../../utils/mockData";

import "./PropertyDetailPage.css";
import PropertyDetailTable from "../../components/PropertyDetailTable";
import OfferDetailTable from "../../components/OfferDetailTable";
import Nav from "../../components/Nav";

// MATERIAL-UI
import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { getProperty } from "../../apis/propertiesAPi";

export default function PropetryDetailPage(props) {
  const [property, setProperty] = useState();
  const userOffer = useRef();
  const user = useSelector((state) => state.auth.value);

  const handleMakeOffer = (e) => {
    e.preventDefault();
    console.log("user offer => ", userOffer.current[0].value);
    // send offer to backend and update
  };

  const { id } = useParams();

  useEffect(() => {
    getProperty(id)
      .then((res) => {
        setProperty(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    property && (
      <div>
        <Nav />
        <div className="container">
          <PropertyDetail
            property={property}
            userOffer={userOffer}
            handleMakeOffer={handleMakeOffer}
          />
          {(!user || user?.role === "USER") && (
            <div className="make-offer-form">
              <form ref={userOffer} onSubmit={handleMakeOffer}>
                <TextField
                  id="outlined-basic"
                  label="MinPrice"
                  variant="outlined"
                  name="amount"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  size="small"
                />
                <Button variant="contained" type="submit">
                  Make an Offer
                </Button>
              </form>
            </div>
          )}
          <div className="offers-detail">
            <OfferDetailTable offers={property.offers} />
          </div>
        </div>
      </div>
    )
  );
}

function PropertyDetail({ property, userOffer, handleMakeOffer }) {
  return (
    property && (
      <div className="dialog-box">
        <div className="dialog-image">
          <img src="https://photos.zillowstatic.com/fp/be98bf53c0259949bce4b0b945654cf2-cc_ft_768.webp" />
        </div>
        <div>
          <DialogContentText id="alert-dialog-description">
            {property.description}
          </DialogContentText>
          <PropertyDetailTable property={property} />
        </div>
      </div>
    )
  );
}
