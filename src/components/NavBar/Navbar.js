import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from './logo.svg';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img id='logoImg' src={Logo}/></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navBarLinks">
            <Nav.Link className='navBarLink' href="#home">Home</Nav.Link>
            <Nav.Link className='navBarLink' href="#recursos">Recursos</Nav.Link>
            <Nav.Link className='navBarLink' href="#sobre">Sobre</Nav.Link>
            <Nav.Link className='navBarLink' href="#time">Time</Nav.Link>
            <Nav.Link className='navBarLink' href="#contato">Contato</Nav.Link>
            <Nav.Link className='navBarLink' href="#mapa">Mapa</Nav.Link>
            <Nav.Link className='navBarLink' href="#nossosParceiros">Nossos Parceiros</Nav.Link>
          </Nav>
          <Button id="navBarBtn" href="#link">Acessar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;