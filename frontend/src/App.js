import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div>
      <Stack gap={3}>
        <div>
          <Header />
        </div>
        <div className="p-2">
          {code ? <Dashboard code={code} /> : <Login />}
        </div>
        <div className="p-2">
          <Footer />
        </div>
      </Stack>
    </div>
  );
}

export default App;
