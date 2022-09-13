import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'rsuite';


const NavbarApp = () => {
  const pathname = useLocation().pathname
  
  return(
    pathname !== "/" &&(
      <Navbar  style={{
        background:"#000",
        color:'#fff',
        fontSize:"18px",
        padding:'10px',
        textDecoration:"none"
      }} >
        <Navbar.Brand href="#">BIBLIO</Navbar.Brand>
        <Nav>
          <Nav.Item >
            <Link className="nav-link" to="/accueil">Accueil</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/liste-livres">Voir la liste des livres</Link>
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item>
            <Link className="nav-link" to="/livres">Gestion livres</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/emprunts">Gestion des emprunts</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/mes-emprunts">Mes emprunts</Link>
          </Nav.Item>
          <Nav.Item >Profil</Nav.Item>
        </Nav>
      </Navbar>)
);}

export default NavbarApp;