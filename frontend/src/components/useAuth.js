import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresToken, setExpiresToken] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:5000/login', { code })
      .then((res) => {
        console.log(res.data);
        window.history.pushState({}, null, '/');
      })
      .catch(() => {
        window.location = '/';
      });
  }, [code]);
};

export default useAuth;
