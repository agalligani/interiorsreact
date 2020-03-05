import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import Nav from "../js/components/Nav/Nav";
import Home from "../js/screens/Home";
import Footer from "../js/components/Footer/Footer";

import {
  faCheckSquare,
  faCoffee,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
library.add(faCheckSquare, faCoffee, faBars);

export default class App extends Component {
  state = {
    isScrolled: false,
    navBarClass: "navbar-area-fixed"
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let isScrolled = window.scrollY > 200 ? true : false;
    let navBarClass = "";
    navBarClass = isScrolled ? "navbar-area navbar-area-fixed" : "navbar-area";
    this.setState({ isScrolled: isScrolled, navBarClass: navBarClass });
  };

  render() {
    console.log("router render", this.state.navBarClass);
    return (
      <Router>
        <Nav navBarClass={this.state.navBarClass}></Nav>
        <Route path="/home" render={() => <div>Home</div>} />
        <div>
          <Switch>
            <Route path="/">
              {() => {
                return <Home />;
              }}
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

// export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
