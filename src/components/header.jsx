import '../components/header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container className='header'>
      <Navbar.Brand className='logo' href="/"></Navbar.Brand>
      <Nav className="me-auto">
        <div className="lista">
        <Nav.Link className='lista-botao' href="/">Home</Nav.Link>
        <Nav.Link className='lista-botao' href="/sobre">Sobre</Nav.Link>
        <Nav.Link className='lista-botao' href="/projetos">Projetos</Nav.Link>
        <Nav.Link className='lista-botao' href="/contato">Contato/Doação</Nav.Link>
        </div>
      </Nav>
    </Container>
  </Navbar>
    </>
  );
}

export default Header;
