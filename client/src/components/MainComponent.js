import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler, Nav, NavLink, toggle } from 'reactstrap';

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      isNavOpen : true
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => this.setState({isNavOpen: !this.state.isNavOpen});
  
  render(){
      return (
        <div className="container">
          <Navbar light expand="md">
            <Link to='/home'>
            <NavbarBrand className="nav-brand">ToDo App</NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="nav">
                <NavItem>
                  <NavLink>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
  }
}

export default Main;