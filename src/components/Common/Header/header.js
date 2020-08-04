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
              <Link to="/contact" className="nav-link">
                Contact
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
            <NavItem>
              <Link to="/news" className="nav-link">
                News
              </Link>
            </NavItem>
          </Nav>          
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
