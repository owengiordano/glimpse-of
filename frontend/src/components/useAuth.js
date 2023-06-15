import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:5000/login', { code })
      .then((res) => {
        console.log(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshTokenToken);
        setExpiresIn(res.data.expiresIn);

        window.history.pushState({}, null, '/'); //removes query from URL
      })
      .catch(() => {
        window.location = '/';
      });
  }, [code]);

  return accessToken;
};

export default useAuth;
