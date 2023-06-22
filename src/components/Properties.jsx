import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { useSelector } from "react-redux";

const Properties = ({ properties, onDelete }) => {
  const user = useSelector((state) => state.auth.value);
  const navigate = useNavigate();

  return properties.map((property, index) => {
    return (
      <div key={index} className="property-card">
        <PropertyCard
          onClick={() => {
            navigate(`/property/${property.id}`);
          }}
          onDelete={onDelete}
          property={property}
          isOwner={user?.role === "OWNER"}
        />
      </div>
    );
  });
};

export default Properties;
