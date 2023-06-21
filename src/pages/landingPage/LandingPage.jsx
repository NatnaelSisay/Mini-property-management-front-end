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

    const formData = new FormData(filter.current);
    const data = Object.fromEntries(formData);

    fetchProperties(data);
  }

  const fetchProperties = (filterData) => {
    getProperties(filterData)
      .then((res) => {
        if (filterData) {
          setFilteredProperties(res.data);
        } else setProperties(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchProperties();
  }, [user]);

  return (
    <div>
      <Nav user={user} />

      {(!user || user.role === "USER") && (
        <div className="container">
          <PropertiesFilter
            showClear={filteredProperties}
            ref={filter}
            onClear={() => {
              setFilteredProperties(null);
              filter.current.reset();
            }}
            handleFilter={handleFilter}
          />
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
