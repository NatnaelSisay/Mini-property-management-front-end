import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const Properties = ({ properties }) => {
  return properties.map((property, index) => {
    return (
      <div key={index} className="property-card">
        <Link to={`/property/${property.id}`}>
          <PropertyCard property={property} />
        </Link>
      </div>
    );
  });
};

export default Properties;
