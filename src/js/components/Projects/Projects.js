import React, { Component } from "react";
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

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-md-7">
            <h1 id="myHeading">Our Story</h1>
            <p>
              Drew Terrat was born with a passion for design. From the time he
              moved to Boston in the mid-eighties, Drew has been involved in
              buying, selling, renovating, and furnishing some of New England's
              finer residences, including many of his own. With a As his
              reputation for discriminating taste and bold modern coupled with
              his notorious charm and intellect From there he moved on to
            </p>
            <p>
              In 2002 Drew opened one of the original flagship Mitchell Gold +
              Bob Williams furniture stores in Boston. His
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
