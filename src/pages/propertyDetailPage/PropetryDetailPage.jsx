import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyDetailPage.css";

import PropertyDetailTable from "../../components/PropertyDetailTable";
import OfferDetailTable from "../../components/OfferDetailTable";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function PropetryDetailPage(props) {
	const [open, setOpen] = useState(true);
	const [property, setProperty] = useState(mockProperty);
	const navigate = useNavigate();
	const userOffer = useRef();

	const handleMakeOffer = (e) => {
		e.preventDefault();
		console.log("user offer => ", userOffer.current[0].value);
		// send offer to backend and update
	};

	const handleClose = () => {
		setOpen(false);
		navigate(-1);
	};

	return (
		property && (
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					fullWidth
					maxWidth="xl"
				>
					<DialogTitle id="alert-dialog-title">
						Appartment for rent, Two bedroom apartment with 1 shared kitchen
					</DialogTitle>
					<DialogContent>
						<PropertyDetail
							property={property}
							userOffer={userOffer}
							handleMakeOffer={handleMakeOffer}
						/>
						<div className="offers-detail">
							<OfferDetailTable />
						</div>
					</DialogContent>
				</Dialog>
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
				</div>
			</div>
		)
	);
}

const mockProperty = {
	price: 123,
	address: {
		street: "4th",
		city: "Fairfield",
		state: "Iowa",
		zip: 52557,
	},
	offers: [],
	owner: {},
	area: 23,
	numberOfBedRooms: 2,
	numberOfBathRooms: 2,
	numberOfFloors: 1,
	yearBuilt: 1999,
	description:
		"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
	propertyType: "APARTMENT",
	propertyStatus: "AVAILABLE",
};
