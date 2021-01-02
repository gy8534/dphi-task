import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"

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
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link className="link" to="/">Diary</Link>
          </Typography>
          <Button color="inherit"><Link to="/page/new">Create Page</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
