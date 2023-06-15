import React from 'react';
import useAuth from './useAuth';
import { Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [timeRange, setTimeRange] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (!timeRange) return setTimeRange('');
    if (!accessToken) return;

    const limit = 10;
    const offset = 0;

    axios
      .get(
        `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${timeRange}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.items.slice(0, 5);
        for (let i = 0; i < 5; i++) {
          const name = data[i].name;
          const images = data[i].images;
          const popularity = data[i].popularity;
          const id = data[i].id;
          setArtists((a) => {
            return [
              ...a,
              { name: name, images: images, popularity: popularity, id: id },
            ];
          });
        }
      });
  }, [accessToken, timeRange]);
  return (
    <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>
      <div className="d-flex justify-content-center align-items-center">
        {' '}
        HELLO
      </div>
      <div className="d-flex flex-grow-1 my-2 justify-content-center align-items-center">
        {' '}
        MIDDLE
      </div>
      <div className="d-flex justify-content-center align-items-center">
        BOTTOM
        <Button onClick={() => setTimeRange('short_term')}>HERE</Button>
      </div>
    </Container>
  );
};

export default Dashboard;
