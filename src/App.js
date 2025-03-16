import './App.css';
import Shop from './pages/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop />
    </div>
  );
}

export default App;
