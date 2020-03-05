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

import OwlCarouselLoop from "../components/OwlCarousel/OwlCarouselLoop";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <div class="container">
          <Row>
            <Col>
              <OwlCarouselLoop />
            </Col>
          </Row>
          <div class="row align-items-start">
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-center">
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-end">
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
        </div>
      </Container>
    );
  }
}
