import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PropType from "prop-types";

function BasicSelectComponent({ name, options, value, setValue }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={name}
          name={name}
          onChange={(e) => setValue(e.target.value)}
        >
          {options &&
            options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

BasicSelectComponent.propTypes = PropType.object.isRequired;

export default BasicSelectComponent;
