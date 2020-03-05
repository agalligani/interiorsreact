import React, { Component } from "react";
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

export default class Agency extends Component {
  render() {
    return (
      <TextColumn columnAlignment={"left"}>
        <p>
          When done right, interior design becomes an intimate component in the
          fabric of our lives and of those with whom we share the experience of
          living. The choices we make in building, furnishing or renovating our
          homes are some of the most important decisions we will ever make.
          Ensuring that a space is both aesthetically pleasing and functional
          will bring joy and pleasure to daily existence. A statement about
          personal values and identity, a living space is a reflection of how we
          see ourselves as well as one of the primary sources of happiness and
          personal contentment.
        </p>
        <p>
          At Terrat Interiors, decisions about design are taken with an eye
          towards modern luxury and comfort. While keeping things contemporary,
          we take inspiration from the masters of mid-century modern and Bauhaus
          design. The lifelong passion of Drew Terrat for crafting elegant
          spaces for exclusive clients up and down the East Coast has earned Mr.
          Terrat a reputation for
        </p>
        <p>
          Through the years he has won many awards, but much of his best work is
          no longer gracing the covers or style sections of magazines. Many of
          Drew's exclusive clients don't open their doors to share their homes
          with photographers. And it's just as well. Our passion isn't for
          awards or glossy layouts (although we are knocking it... we love these
          too!). Our
        </p>
      </TextColumn>
    );
  }
}
