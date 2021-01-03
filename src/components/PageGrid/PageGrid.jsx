import React, {Component} from "react";
import {connect} from 'react-redux'
import Grid from "@material-ui/core/Grid";
import GridItem from "../GridItem/GridItem";

class PageGrid extends Component {


  render() {
    const pages = this.props.filterData || this.props.pages;
    console.log(pages)
    return (
      <div>
      <h1>Your Diary</h1>
      <Grid container spacing={3}>
        {pages.map(({id, title, body, createdFor}) => (
          <Grid  key={id} item xs={4}>
            <GridItem id={id} title={title} body={body} createdFor={createdFor}/>
          </Grid>
        ))}
      </Grid>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    filterData: state.filterData,
  }
}

export default connect(mapStateToProps, null)(PageGrid);
