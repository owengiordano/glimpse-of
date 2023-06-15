import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {
  const verifier = generateCodeVerifier(128);
  const challenge = generateCodeChallenge(verifier);

  localStorage.setItem('verifier', verifier);

  const params = new URLSearchParams();
  params.append('client_id', '4f3b4354d2ba41e68c9178f52f2303a9');
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:3000');
  params.append('scope', 'user-read-private user-read-email user-top-read');
  params.append('code_challenge_method', 'S256');
  params.append('code_challenge', challenge);

  const AUTH_URL = `https://accounts.spotify.com/authorize?${params.toString()}`;

  function generateCodeVerifier(length) {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

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
