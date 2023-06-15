import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {
  const params = new URLSearchParams();
  params.append('client_id', '4f3b4354d2ba41e68c9178f52f2303a9');
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:3000');
  params.append('scope', 'user-read-private user-read-email user-top-read');

  const AUTH_URL = `https://accounts.spotify.com/authorize?${params.toString()}`;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  );
};

export default Login;
