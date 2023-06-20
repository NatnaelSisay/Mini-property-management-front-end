import { useState } from "react";

import "./PropertyDetailPage.css";

import PropertyDetailTable from "../../components/PropertyDetailTable";
import OfferDetailTable from "../../components/OfferDetailTable";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function PropetryDetailPage(props) {
	const [open, setOpen] = useState(true);
	const [property, setProperty] = useState(mockProperty);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		property && (
			<div>
				<Button variant="outlined" onClick={handleClickOpen}>
					Open alert dialog
				</Button>
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
						<PropertyDetail property={property} />
						<div className="offers-detail">
							<OfferDetailTable />
						</div>
					</DialogContent>
				</Dialog>
			</div>
		)
	);
}
function PropertyDetail({ property }) {
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
					<Button variant="contained">Make an Offer</Button>
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

// private long id;

// private BigDecimal offerPrice;

// private OfferStatus offerStatus;

// @ManyToOne
// @JoinColumn(name = "customer_id")
// private User customer;

// @ManyToOne
// @JoinColumn(name = "property_id")
// private Property property;
