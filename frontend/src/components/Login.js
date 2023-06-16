import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import { BsSpotify } from 'react-icons/bs';

const Login = () => {
  const params = new URLSearchParams();
  params.append('client_id', '4f3b4354d2ba41e68c9178f52f2303a9');
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:3000');
  params.append('scope', 'user-read-private user-read-email user-top-read');

  const AUTH_URL = `https://accounts.spotify.com/authorize?${params.toString()}`;

  const navStyle = {
    backgroundColor: '#191825',
    color: '#865DFF',
  };

  return (
    <Container className="d-flex flex-clo" style={{ minHeight: '100vh' }}>
      <div className="d-flex flex-grow-1 my-2 justify-content-center align-items-center">
        <Stack
          gap={2}
          className="d-flex flex-grow-1 my-2 justify-content-center align-items-center"
        >
          <div>
            <h1>Get a Glimpse of You!</h1>
          </div>
          <div>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
              Login with <BsSpotify size={'2em'} />
            </a>
          </div>
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
