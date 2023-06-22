import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const Properties = ({ properties }) => {
  const navigate = useNavigate();
  return properties.map((property, index) => {
    return (
      <div key={index} className="property-card">
        <PropertyCard
          onClick={() => {
            navigate(`/property/${property.id}`);
          }}
          property={property}
        />
      </div>
    );
  });
};

export default Properties;
