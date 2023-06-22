import { useEffect, useState } from "react";
import "./offersPage.css";

import Nav from "../../components/Nav";
import Button from "@mui/material/Button";

import PropertyDetailTable from "../../components/PropertyDetailTable";
import {
  Box,
  Card,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { getOffers, updateOffer } from "../../apis/offersApis";
import imageUrlBuilder from "../../utils/imageUrlBuilder";
import { useSelector } from "react-redux";

const OffersPage = () => {
  const user = useSelector((state) => state.auth.value);
  const [offers, setOffers] = useState([]);
  const isOwner = user?.role === "OWNER";
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState("");

  const _updateOffer = (offerId, action) => {
    updateOffer(offerId, action)
      .then((res) => {
        const offerRespose = res.data;
        const updatedOffers = offers.map((offer) => {
          if (offer.id === offerRespose.id) {
            return offerRespose;
          }
          return offer;
        });
        setOffers(updatedOffers);
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

  useEffect(() => {
    getOffers()
      .then((res) => {
        setOffers(res.data.offers);
      })
      .catch((err) => {});
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F4F4F4",
        minHeight: "100vh",
      }}
    >
      <Nav />

      {offers.map((offer) => (
        <div className="container offers-content" key={offer.id}>
          <div className="offers-content-img">
            <img src={imageUrlBuilder(offer.property.image)} />
          </div>
          <div className="offers-content-detail">
            <div>
              <PropertyDetailTable property={offer.property} small={true} />
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell component="th">Offer status</TableCell>
                    <TableCell align="right">{offer.offerStatus}</TableCell>
                  </TableRow>
                </TableBody>

                {isOwner && (
                  <>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th">Offered by</TableCell>
                        <TableCell align="right">
                          {offer.customer.firstName} {offer.customer.lastName}
                        </TableCell>
                        <TableCell align="right">
                          {offer.customer.email}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                )}
              </Table>

              <div className="offer-content-actions">
                <Button color="success">Offer: ${offer.offerPrice}</Button>

                {offer.offerStatus === "ACCEPTED" &&
                  offer.property.propertyStatus === "CONTINGENT" && (
                    <ContingetStatus
                      isOwner={isOwner}
                      offer={offer}
                      onAccept={() =>
                        _updateOffer(offer.id, "ACCEPT_CONTINGENT")
                      }
                      onCancel={() =>
                        _updateOffer(offer.id, "CANCEL_CONTINGENT")
                      }
                    />
                  )}
                {offer.offerStatus === "PENDING" && !isOwner && (
                  <Button
                    onClick={() => _updateOffer(offer.id, "CANCEL")}
                    variant="contained"
                    color="error"
                  >
                    CANCEL
                  </Button>
                )}
                {isOwner && offer.offerStatus === "PENDING" && (
                  <>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => _updateOffer(offer.id, "REJECT")}
                    >
                      REJECT
                    </Button>

                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => _updateOffer(offer.id, "ACCEPT")}
                    >
                      ACCEPT
                    </Button>
                  </>
                )}
              </div>
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
            message={snackbarContent}
          />
        </div>
      ))}
    </Box>
  );
};

const ContingetStatus = ({ isOwner, offer, onAccept, onCancel }) => {
  const acceptedByOwner = offer.acceptedByOwner;
  const acceptedByCustomer = offer.acceptedByCustomer;

  if (acceptedByOwner && acceptedByCustomer) {
    return null;
  }
  if (acceptedByOwner) {
    if (isOwner) {
      return (
        <Typography variant="h6">Waiting for customer to accept</Typography>
      );
    }
  }
  if (acceptedByCustomer) {
    if (!isOwner) {
      return <Typography variant="h6">Waiting for owner to accept</Typography>;
    }
  }
  return (
    <>
    <Button variant="contained" color="error" onClick={onCancel}>
      CANCEL_CONTINGENT
    </Button>
    <Button variant="contained" color="success" onClick={onAccept}>
      ACCEPT_CONTINGENT
    </Button>
    </>
  );
};

export default OffersPage;
