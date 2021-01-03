import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { editPage } from "../../redux/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function EditPage(props) {
  let history = useHistory();
  const page = props.pages.filter(
    (page) => page.id === props.match.params.id
  )[0];
  let date = page.createdFor.toISOString().substring(0,10)
  const [title, setTitle] = useState(page.title);
  const [body, setBody] = useState(page.body);
  const [createdFor, setCreatedFor] = useState(page.body);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPage = {
      id: page.id,
      title,
      body,
      createdAt: page.createdAt,
      createdFor:createdFor
    };


    props.editPage(newPage);
    history.push("/");
  };
  return (
    <div className="createpage">
      <h1>
        Edit Note
      </h1>
      <form className="createpage__form" noValidate>
        <div className="createpage__header">
          <div className="createpage__title">
          <TextField
            id="date"
            label="Title"
            type="text"
            style={{width: "100%"}}
            defaultValue={page.title}
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
            defaultValue={date}
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
          defaultValue={page.body}
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
    editPage: (page) => dispatch(editPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
