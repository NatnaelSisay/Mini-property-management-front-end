import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import "./PropertyDetailPage.css";
import PropertyDetailTable from "../../components/PropertyDetailTable";
import OfferDetailTable from "../../components/OfferDetailTable";
import Nav from "../../components/Nav";
import Snackbar from "@mui/material/Snackbar";
import imageUrlBuilder from "../../utils/imageUrlBuilder";

// MATERIAL-UI
import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { getProperty, makeAnOffer } from "../../apis/propertiesAPi";
export default function PropetryDetailPage(props) {
  const [property, setProperty] = useState();
  const userOffer = useRef();
  const user = useSelector((state) => state.auth.value);
  const { id } = useParams();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleMakeOffer = (e) => {
    e.preventDefault();
    const offerValue = userOffer.current[0].value;
    makeAnOffer(id, offerValue)
      .then((res) => {
        setShowSnackbar(true);
        userOffer.current.reset();
      })
      .catch((err) => {});
  };

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
          {(!user || user?.role === "USER") &&
            (property.propertyStatus == "PENDING" ||
              property.propertyStatus == "AVAILABLE") && (
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

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={showSnackbar}
          autoHideDuration={2000}
          onClose={(event, reason) => {
            setShowSnackbar(false);
          }}
          key={"top" + "right"}
          message="Offer made successfully"
        />
      </div>
    )
  );
}

function PropertyDetail({ property, userOffer, handleMakeOffer }) {
  return (
    property && (
      <div className="dialog-box">
        <div className="dialog-image">
          <img src={imageUrlBuilder(property.image)} />
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
