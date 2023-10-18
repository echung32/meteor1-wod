import React from 'react';
import { Image, Container } from 'react-bootstrap';

/** The BottomFooter appears at the bottom of every page. Rendered by the App Layout component. */
const CenterImage = () => (
  <Container className="p-5 justify-content-center">
    <Image src="wod-buzzs-on+thebeach.png" width="1200px" />
  </Container>
);

export default CenterImage;
