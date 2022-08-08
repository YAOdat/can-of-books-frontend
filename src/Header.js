import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css'
import AuthButtons from './components/AuthButtons'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home | &nbsp; </Link></NavItem>
        <NavItem><Link to="/" className="nav-link">| About COB &nbsp; &nbsp; &nbsp;</Link></NavItem>
        <AuthButtons/>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
