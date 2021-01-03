import React, { useState } from "react";
import "./CreatePage.css";
import { useHistory } from "react-router-dom";
import { v1 } from "uuid";
import { connect } from "react-redux";
import { addPage } from "../../redux/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


function CreatePage({ pages, addPage }) {
  let date = new Date()
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdFor, setCreatedFor] = useState(date);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Please fill all the fields");
      return;
    }
    const newPage = {
      id: v1(),
      title,
      body,
      createdFor,
      createdAt: new Date(),
    };
    console.log(newPage);
    addPage(newPage);
    history.push("/");
  };
  return (
    <div className="createpage">
      <h1>
        Add a Note
      </h1>
      <form className="createpage__form" noValidate>
        <div className="createpage__header">
          <div className="createpage__title">
          <TextField
            id="date"
            label="Title"
            type="text"
            style={{width: "100%"}}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
          </div>
          <div className="createpage__date">
          <TextField
            id="date"
            label="Start Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setCreatedFor(new Date(e.target.value))}
          />
          </div>
        </div>
        <br/>
        <br/>
        <TextareaAutosize
          className="createpage__input"
          aria-label="empty textarea"
          placeholder="How was you day?"
          rowsMin={10}
          onChange={(e) => setBody(e.target.value)}
        />
        <br/>
        <Button
          onClick={handleSubmit}
          className="createpage__button"
          color="inherit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPage: (page) => dispatch(addPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
