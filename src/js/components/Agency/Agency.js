import React, { Component, Fragment } from "react";
import TextColumn from "../TextColumn/TextColumn";
import {
  Alert,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax, Background } from "react-parallax";

export default class Agency extends Component {
  render() {
    return (
      <Fragment>
        <TextColumn columnAlignment={"left"}></TextColumn>
        <TextColumn columnAlignment={"right"}></TextColumn>
      </Fragment>
    );
  }
}
