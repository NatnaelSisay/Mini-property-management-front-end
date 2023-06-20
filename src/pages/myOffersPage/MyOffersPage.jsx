import { useState } from "react";
import "./MyOffersPage.css";

import Nav from "../../components/Nav";
import Button from "@mui/material/Button";

import PropertyDetailTable from "../../components/PropertyDetailTable";

const MyOffersPage = () => {
	const [property, setProperty] = useState(mockProperty);
	return (
		property && (
			<div>
				<Nav />
				<div className="container offers-content">
					<div className="offers-content-img">
						<img src="https://photos.zillowstatic.com/fp/0297ad48a3e088cd9beb49b37998f4bd-cc_ft_1536.webp" />
					</div>
					<div className="offers-content-detail">
						<div>
							<PropertyDetailTable property={property} />
							<div className="offer-content-actions">
								<Button color="success">Offer: $5000000</Button>
								<Button variant="contained" color="error">
									Cancel
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

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

export default MyOffersPage;
