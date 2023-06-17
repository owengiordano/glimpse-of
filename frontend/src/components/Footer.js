import 'bootstrap/dist/css/bootstrap.min.css';
import spot_logo from './imagescomp/spotify_logo.png';
import { Container, Stack } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Stack
          gap={2}
          className="d-flex justify-content-center align-items-center"
          style={{ position: 'absolute', left: 0, right: 0 }}
        >
          <div>
            <img
              style={{ height: '3rem' }}
              src={spot_logo}
              alt={'Powered by Spotify'}
            />
          </div>
          <div>
            <p style={{ color: '#E1FFEE' }}>
              Made by{' '}
              <a
                style={{ color: '#A5F1E9' }}
                href="https://linktr.ee/owengiord?utm_source=linktree_admin_share"
                target="_blank"
                rel="noreferrer"
              >
                Owen Giordano
              </a>
            </p>
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
