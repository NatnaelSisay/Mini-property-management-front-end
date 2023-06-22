import { useEffect, useState } from "react";

import "./FavoritesPage.css";
import Nav from "../../components/Nav";
import PropertyCard from "../../components/PropertyCard";

import { mockProperty } from "../../utils/mockData";
import { getFavorites } from "../../apis/favoriteApis";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFavorites()
      .then((res) => {
        setFavorites(res.data.favorites);
      })
      .catch((err) => {});
  }, []);

  const onRemoveFavorite = (propertyId) => {
    setFavorites(
      favorites.filter((favorite) => favorite.property.id !== propertyId)
    );
  };

  const favoritePropertiesRender = favorites.map((favorite) => {
    return (
      <div key={favorite.property.id} className="property-card">
        <PropertyCard
          onClick={() => {
            navigate(`/property/${favorite.property.id}`);
          }}
          onRemoveFavorite={onRemoveFavorite}
          property={favorite.property}
        />
      </div>
    );
  });

  return (
    favorites && (
      <div>
        <Nav />
        <div className="container flex-wrap">{favoritePropertiesRender}</div>
      </div>
    )
  );
};

export default FavoritesPage;
