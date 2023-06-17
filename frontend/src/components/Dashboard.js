import React from 'react';
import useAuth from './useAuth';
import { Container, Button, Stack, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Artist from './Artist';
import Spinner from './Spinner';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [artists, setArtists] = useState([]);
  const [name, setName] = useState('YOUR');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) return;
    const getArtists = async () => {
      const limit = 10;
      const offset = 0;

      await axios
        .get(
          `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=short_term&offset=${offset}`,
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
            const image = data[i].images[0].url;
            const popularity = data[i].popularity;
            const id = data[i].id;
            setArtists((a) => {
              return [
                ...a,
                { name: name, image: image, popularity: popularity, id: id },
              ];
            });
          }
        });
    };

    const getName = async () => {
      await axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((info) => {
          setName(info.data.display_name);
          setLoading(false);
        });
    };
    getName();
    getArtists();
  }, [accessToken]);

  return (
    <Container style={{ height: '75%' }}>
      {loading ? (
        <Spinner />
      ) : (
        <Stack
          gap={9}
          className="d-flex justify-content-center align-items-center"
        >
          <div style={{ color: '#E1FFEE' }}>
            <h1>A GLIMPSE OF</h1>
          </div>
          <div style={{ color: '#E1FFEE' }}>
            <h1>{name.toUpperCase()}'S SUMMER</h1>
          </div>

          {artists.length > 0 ? (
            <div>
              {artists.map((artist, i) => (
                <div key={i} className="p-2">
                  <Artist artistName={artist} />
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </Stack>
      )}
    </Container>
  );
};

export default Dashboard;
