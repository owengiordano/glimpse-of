import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return <Login />;
}

export default App;
