// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.js';
import Shop from './pages/Shop/Shop';
import EventsPage from './pages/EventsPage/EventsPage';
import SellerProfilePage from './pages/SellerProfilePage/SellerProfilePage.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/parceiros" element={<Shop />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/perfil/:vendedorId" element={<SellerProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;