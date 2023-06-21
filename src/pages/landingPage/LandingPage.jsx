import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./LandingPage.css";

import Nav from "../../components/Nav";
import Properties from "../../components/Properties";
import PropertiesFilter from "../../components/PropertiesFilter";
import { mockProperty } from "../../utils/mockData";
import { getProperties } from "../../apis/propertiesAPi";

const LandingPage = () => {
  const filter = useRef();
  const [properties, setProperties] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(null);
  const user = useSelector((state) => state.auth.value);

  function handleFilter(e) {
    e.preventDefault();
    const {
      minPrice,
      maxPrice,
      numberOfBedRooms,
      numberOfBathRooms,
      zipCode,
      city,
      state,
    } = filter.current;

    const data = {
      minPrice: Number(minPrice.value),
      maxPrice: maxPrice.value,
      bedRooms: numberOfBedRooms.value,
      bathRooms: numberOfBathRooms.value,
      zipCode: zipCode.value,
      city: city.value,
      state: state.value,
    };

    console.log("Filter data", data);
    // call the api and update the properties
    // GET /api/v1/properties data
    fetchData();
  }

  function fetchData() {
    setProperties(Array(5).fill(mockProperty));
  }

  const fetchProperties = () => {
    getProperties()
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <Nav user={user} />

      {(!user || user.role === "USER") && (
        <div className="container">
          <PropertiesFilter handleFilter={handleFilter} />
        </div>
      )}

      <div className="container flex-wrap">
        <Properties
          properties={
            filteredProperties?.properties ?? properties?.properties ?? []
          }
        />
      </div>
    </div>
  );
};

export default LandingPage;
