import React, { useState } from "react";
import { connect } from "react-redux";
import "./InputGroup.css";
import {
  sortAccordingToDate,
  filterAccordingToData,
  resetFilter,
} from "../../redux/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function InputGroup({
  sortAccordingToDate,
  filterAccordingToData,
  resetFilter,
}) {
  const [sortRev, setSortRev] = useState(false);

  const [startDate, setStartDate] = useState(new Date(2017, 5, 24));
  const [endDate, setEndDate] = useState(new Date(2017, 5, 24));
  const handleChange = () => {
    if (sortRev) {
      sortAccordingToDate("desc");
    } else {
      sortAccordingToDate();
    }
    setSortRev(!sortRev);
  };

  const handleClick = () => {
    filterAccordingToData(startDate, endDate);
  };

  const handleReset = () => {
    resetFilter()
  }
  return (
    <div className="form">
      <form className="form__left" noValidate>
        <TextField
          id="date"
          label="Start Date"
          type="date"
          defaultValue="2017-05-24"
          className="input"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
        
        <TextField
          id="date"
          label="End Date"
          type="date"
          defaultValue="2017-05-24"
          className="input"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
        <Button onClick={handleClick} className="input" color="primary">
          Filter
        </Button>
        <Button onClick={handleReset} className="input" color="primary">
          RESET
        </Button>
      </form>
      <FormControlLabel
        control={
          <Switch
            checked={sortRev}
            name="checkedB"
            color="primary"
            onChange={handleChange}
          />
        }
        label="Old First"
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortAccordingToDate: (sortType) => dispatch(sortAccordingToDate(sortType)),
    filterAccordingToData: (startDate, endDate) =>
      dispatch(filterAccordingToData(startDate, endDate)),
    resetFilter: () => dispatch(resetFilter()),
  };
};

export default connect(null, mapDispatchToProps)(InputGroup);
