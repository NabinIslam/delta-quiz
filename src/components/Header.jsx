import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="text-white text-decoration-none" to={'/'}>
            DeltaQuiz
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="text-white text-decoration-none" to={'/'}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-white text-decoration-none"
                to={'/statistics'}
              >
                Statistics
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-white text-decoration-none" to={'/blog'}>
                Blog
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
