import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom"

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
          <NavLink  style={{ textDecoration: 'none', color: "white" }} to="/">Diary</NavLink>
          </Typography>
          <Button color="secondary"><NavLink style={{ textDecoration: 'none', color: "white" }} to="/page/new">Create Page</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
