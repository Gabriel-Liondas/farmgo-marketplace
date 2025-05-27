// src/components/NavBar/Navbar.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from './logo.svg'; 
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img id='logoImg' src={Logo} alt="FarmGo Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navBarLinks">
            <Nav.Link as={Link} className='navBarLink' to="/">Home</Nav.Link>
            <Nav.Link className='navBarLink' href="https://farmgo.app/#features">Recursos</Nav.Link>
            <Nav.Link className='navBarLink' href="https://farmgo.app/#features">Sobre</Nav.Link>
            <Nav.Link className='navBarLink' href="https://farmgo.app/#features">Time</Nav.Link>
            <Nav.Link className='navBarLink' href="https://farmgo.app/#features">Contato</Nav.Link>
            <Nav.Link className='navBarLink' href="https://farmgo.app/map.html">Mapa</Nav.Link>
            <Nav.Link as={Link} className='navBarLink' to="/parceiros">Nossos Parceiros</Nav.Link>
            <Nav.Link as={Link} className='navBarLink' to="/eventos">Eventos</Nav.Link>
          </Nav>
          <Button as={Link} to="/login" id="navBarBtn">Acessar</Button> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;