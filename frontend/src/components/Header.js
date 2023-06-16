import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { BsSpotify } from 'react-icons/bs';
import { ReactComponent as Logo } from '../images/logo.svg';

//import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: '#191825',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} className="mt-0" variant="light">
      <Container>
        <Navbar.Text className="mx-auto">
          <Logo
            alt={'Glimpsify'}
            style={{ maxWidth: '20rem', maxHeight: '4rem' }}
          />
        </Navbar.Text>
        <Navbar.Text></Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
