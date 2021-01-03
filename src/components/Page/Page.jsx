import React from "react";
import {connect} from 'react-redux'

function Page(props) {
  const page = props.pages.filter(page => page.id === props.match.params.id)[0]
  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.body}</p>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps)(Page);
