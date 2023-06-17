import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { BsSpotify } from 'react-icons/bs';

const Login = () => {
  const params = new URLSearchParams();
  params.append('client_id', '4f3b4354d2ba41e68c9178f52f2303a9');
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:3000');
  params.append('scope', 'user-read-private user-read-email user-top-read');

  const AUTH_URL = `https://accounts.spotify.com/authorize?${params.toString()}`;

  const buttonStyle = {
    color: 'E384FF',
    backgroundColor: '#865DFF',
  };

  const conStyle = {
    color: '#865DFF',
    minHeight: '70vh',
  };

  return (
    <Container className="d-flex flex-clo" style={conStyle}>
      <div className="d-flex flex-grow-1 my-2 justify-content-center align-items-center">
        <Stack
          gap={3}
          className="d-flex flex-grow-1 my-2 justify-content-center align-items-center"
        >
          <div>
            <h1>Glimpse of Your Summer:</h1>
          </div>
          <div className="mb-2">
            <h4 className="justify-content-center align-items-center">
              Who's your summer go-to?
            </h4>
          </div>
          <div>
            <a
              className="btn btn-secondary btn-lg"
              style={buttonStyle}
              href={AUTH_URL}
            >
              Login with <BsSpotify size={'2em'} />
            </a>
          </div>
        </Stack>
      </div>
    </Container>
  );
};

export default Login;
