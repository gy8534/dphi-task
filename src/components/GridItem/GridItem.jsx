import React from "react";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { deletePage } from "../../redux/index";
import { NavLink } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function GridItem({ id, title, body, createdFor, deletePage }) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2"  color="textSecondary">
            Created For -{" "}
            {createdFor.getDate() +
              "/" +
              (createdFor.getMonth() + 1) +
              "/" +
              createdFor.getFullYear()}
          </Typography>
          <Typography variant="body2">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <NavLink style={{ textDecoration: 'none', color: "#3E51B5" }} to={`/page/${id}`}>Read More</NavLink>
          </Button>
          <Button size="small">
            <NavLink style={{ textDecoration: 'none', color: "#3E51B5" }} to={`/page/edit/${id}`}>Edit</NavLink>
          </Button>
          <Button style={{ textDecoration: 'none', color: "#3E51B5" }} size="small" onClick={() => deletePage(id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePage: (id) => dispatch(deletePage(id)),
  };
};

export default connect(null, mapDispatchToProps)(GridItem);
