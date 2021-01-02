import React from "react";
import Card from "@material-ui/core/Card";
import {connect} from 'react-redux'
import {deletePage} from '../../redux/index'
import {Link} from 'react-router-dom'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function GridItem({id, title, body, createAt, deletePage}) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={`/page/${id}`}>Read More</Link></Button>
          <Button size="small"><Link to={`/page/edit/${id}`}>Edit</Link></Button>
          <Button size="small" onClick={() => deletePage(id)}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePage : (id) => dispatch(deletePage(id))
  }
}

export default connect(null,mapDispatchToProps)(GridItem);
