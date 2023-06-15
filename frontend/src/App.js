import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import 'bootsrtap/dist/bootsrtap/css/bootsrtap.min.css';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return <Login />;
}

export default App;
