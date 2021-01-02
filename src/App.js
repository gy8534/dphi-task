import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar/Navbar";
import CreatePage from "./components/CreatePage/CreatePage";
import Page from "./components/Page/Page";
import EditPage from "./components/EditPage/EditPage";
import InputGroup from "./components/InputGroup/InputGroup";
import PageGrid from "./components/PageGrid/PageGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <InputGroup
              />
              <PageGrid/>
            </Route>
            <Route
              path="/page/edit/:id"
              render={(props) => <EditPage {...props} />}
            />
            <Route path="/page/new">
              <CreatePage />
            </Route>
            <Route path="/page/:id" render={(props) => <Page {...props} />} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
