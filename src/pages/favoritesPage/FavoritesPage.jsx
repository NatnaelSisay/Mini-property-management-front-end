import { useState } from "react";

import "./FavoritesPage.css";
import Nav from "../../components/Nav";
import PropertyCard from "../../components/PropertyCard";

import { mockProperty } from "../../utils/mockData";

const FavoritesPage = () => {
	const [favoriteProperties, setFavoriteProperties] = useState([
		mockProperty,
		mockProperty,
	]);

	const favoritePropertiesRender = favoriteProperties.map((property, index) => {
		return (
			<div key={index} className="property-card">
				<PropertyCard key={index} property={property} />
			</div>
		);
	});

	return (
		favoriteProperties && (
			<div>
				<Nav />
				<div className="container flex-wrap">{favoritePropertiesRender}</div>
			</div>
		)
	);
};

export default FavoritesPage;
