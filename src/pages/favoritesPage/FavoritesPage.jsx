import { useState } from "react";

import "./FavoritesPage.css";
import Nav from "../../components/Nav";
import PropertyCard from "../../components/PropertyCard";

const FavoritesPage = () => {
	const [favorites, setFavorites] = useState(mockFavs);

	const favoriteProperties = favorites.map((property, index) => {
		return (
			<div key={index} className="property-card">
				<PropertyCard key={index} />
			</div>
		);
	});

	return (
		favorites && (
			<div>
				<Nav />
				<div className="container flex-wrap">{favoriteProperties}</div>
			</div>
		)
	);
};

const mockFavs = Array(10).fill(null);

export default FavoritesPage;
