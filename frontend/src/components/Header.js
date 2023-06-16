import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { BsSpotify } from 'react-icons/bs';
//import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: '#dae8e5',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Text className="mx-auto">Glimpse of</Navbar.Text>
        <Navbar.Text></Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
