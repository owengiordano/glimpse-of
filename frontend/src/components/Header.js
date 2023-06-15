import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
//import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: '#dae8e5',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Text className="mx-auto">Glimpse of</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
