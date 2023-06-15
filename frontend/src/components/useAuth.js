import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:5000/login', { code })
      .then((res) => {
        console.log(res.data);
        setAccessToken(res.data.access_token);
        setRefreshToken(res.data.refresh_token);
        setExpiresIn(res.data.expires_in);

        window.history.pushState({}, null, '/'); //removes query from URL
      })
      .catch(() => {
        window.location = '/';
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      console.log('past');
      axios
        .post('http://localhost:5000/refresh', { refreshToken })
        .then((res) => {
          setAccessToken(res.data.access_token);
          setExpiresIn(res.data.expires_in);

          window.history.pushState({}, null, '/'); //removes query from URL
        })
        .catch(() => {
          window.location = '/';
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
