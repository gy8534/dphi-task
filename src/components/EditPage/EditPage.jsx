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
  const [title, setTitle] = useState(page.title);
  const [body, setBody] = useState(page.body);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPage = {
      id: page.id,
      title,
      body,
      createdAt: page.createdAt,
    };

    let newPages = props.pages.filter((page) => page.id === props.match.params.id)
    newPages.push(newPage)
    props.editPage(newPages);
    history.push("/");
  };
  return (
    <div>
      <h1>Edit page with id = {props.match.params.id}</h1>
      <form className="createpage__form" noValidate>
        <TextField
          id="date"
          label="Title"
          type="text"
          className="createpage__input"
          defaultValue={page.title}
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
          defaultValue={page.body}
          onChange={(e) => setBody(e.target.value)}
        ></TextareaAutosize>
        <Button
          onClick={handleSubmit}
          className="createpage__button"
          color="inherit"
        >
          Edit
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
