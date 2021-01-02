import React, { useState } from "react";
import "./CreatePage.css";
import { useHistory } from "react-router-dom";
import {v1} from 'uuid'
import { connect } from "react-redux";
import { addPage } from "../../redux/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function CreatePage({pages, addPage }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Please fill all the fields");
      return
    };
    const newPage = {
      id: v1(),
      title,
      body,
      createdAt: new Date(),
    };
    console.log(newPage)
    addPage(newPage);
    history.push("/");
  };
  return (
    <div className="createpage">
      <h1>
        Create Diary for Toady <span> - 2nd Jan, 2021</span>
      </h1>
      <form className="createpage__form" noValidate>
        <TextField
          id="date"
          label="Title"
          type="text"
          className="createpage__input"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          className="createpage__input"
          aria-label="empty textarea"
          placeholder="How was you day?"
          rowsMin={10}
          onChange={(e) => setBody(e.target.value)}
        />
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
    pages: state.pages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPage: (page) => dispatch(addPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
