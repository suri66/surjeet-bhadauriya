import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="header">
        <Link to="/" className="navbar-brand">
          Surjeet Bhadauriya
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/portfolio" className="nav-link">
                Portfoilio
              </Link>
            </NavItem> */}
            <NavItem>
              <Link to="/covid19" className="nav-link">
                Covid 19
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </NavItem> */}
          </Nav>
          <NavbarText>
            Source:&nbsp;
            <a
              href="https://www.covid19india.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'underline'}}
            >
              covid19india
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
