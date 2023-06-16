import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import spot_logo from './images/spot_logo.png';
import { Container, Stack } from 'react-bootstrap';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div>
      <Header />
      {code ? <Dashboard code={code} /> : <Login />}
      <Container className="d-flex justify-content-center mt-3">
        <Stack
          gap={2}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <img
              style={{ width: '6rem', height: '6rem' }}
              src={spot_logo}
              alt={'Powered by Spotify'}
            />
          </div>
          <div>
            <p style={{ color: 'white' }}>Made by Owen Giordano</p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
