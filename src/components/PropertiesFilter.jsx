import { forwardRef } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PropertiesFilter = ({ handleFilter, onClear, showClear }, filter) => {
  return (
    <>
      <form
        className="filter-fields center-vertical"
        ref={filter}
        onSubmit={handleFilter}
      >
        <TextField
          id="minPrice"
          label="MinPrice"
          variant="outlined"
          name="minPrice"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <TextField
          id="maxPrice"
          label="MaxPrice"
          variant="outlined"
          name="maxPrice"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <TextField
          id="numberOfBedRooms"
          label="BedRooms"
          variant="outlined"
          name="numberOfBedRooms"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <TextField
          id="numberOfBathRooms"
          label="BathRooms"
          variant="outlined"
          name="numberOfBathRooms"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <TextField
          id="zipCode"
          label="ZipCode"
          variant="outlined"
          name="zipCode"
        />
        <TextField id="city" label="City" variant="outlined" name="city" />
        <TextField id="state" label="State" variant="outlined" name="state" />

        <div>
          <Button variant="contained" type="submit" className="small-margin">
            Fitler
          </Button>
          {showClear && (
            <Button variant="contained" onClick={onClear} color="warning">
              clear
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default forwardRef(PropertiesFilter);
