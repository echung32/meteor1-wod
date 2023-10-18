import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

/** The BottomFooter appears at the bottom of every page. Rendered by the App Layout component. */
const BottomFooter = () => (
  <footer className="mt-auto pt-3 fixed-bottom" id="footer">
    <Row className="px-5">
      <Col className="text-center">
        <h2>Lunch Served Daily</h2>
        <h3>11AM - 3PM</h3>
      </Col>
      <Col className="text-center">
        <h2>Dinner Served Daily</h2>
        <h3>4:30 - 9PM</h3>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Image src="wod-buzzs-mahalo.png" width="960px" className="w-75" />
    </Row>
  </footer>
);

export default BottomFooter;
