import React from 'react';
import { Spinner as Loader, Container } from 'react-bootstrap';

const spinnerStyle = {
  position: 'absolute',
  top: 'calc(50% - 1rem)',
  left: 'calc(50% - 1rem)',
};

const Spinner = () => (
  <Container style={{ height: '70vh' }}>
    <Loader style={spinnerStyle} animation="border" variant="success" />
  </Container>
);

export default Spinner;
