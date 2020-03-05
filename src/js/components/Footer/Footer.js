import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <footer class="page-footer font-small pt-4">
        <Container>
          <Row>
            <Col className="col-md-12">
              <div class="footer-copyright text-right py-3">
                <span className="copyright">© 2020 Copyright:</span>
                <a href="http://terratinteriors.com/"> terratinteriors.com</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
