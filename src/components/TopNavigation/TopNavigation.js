import React, {Component, Fragment} from 'react';
import {NavDropdown, Nav, Navbar} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from  '../../asset/image/navlogoScroll.svg';

import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Link, NavLink} from "react-router-dom";


class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navbarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navVariant:"dark",
            navBarBack: 'navBackground',
            navBarItem: 'navItem',

        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navbarTitle: 'navTitleScroll', navBarLogo:[blueLogo], navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll', navVariant:"light"})
        }else if (window.scrollY<100){
            this.setState({navbarTitle: 'navTitle', navBarLogo:[whiteLogo], navBarBack: 'navBackground', navBarItem: 'navItem', navVariant:"dark"})

        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} collapseOnSelect expand="lg"  fixed="top" >
                    <Navbar.Brand href="#home" className={this.state.navbarTitle}><img src={this.state.navBarLogo} /> Avik Apu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav >
                            <Nav.Link><NavLink to="/" className={this.state.navBarItem} >HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/service" className={this.state.navBarItem} >SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/course" className={this.state.navBarItem} >COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/portfolio" className={this.state.navBarItem} >PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contact" className={this.state.navBarItem} >CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/about" className={this.state.navBarItem} >ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;

/**
<Nav.Link as={Link} to="/" className={this.state.navBarItem} >HOME</Nav.Link>
<Nav.Link as={Link} to="/service" className={this.state.navBarItem} >SERVICES</Nav.Link>
<Nav.Link as={Link} to="/course" className={this.state.navBarItem} >COURSES</Nav.Link>
<Nav.Link as={Link} to="/portfolio" className={this.state.navBarItem} >PORTFOLIO</Nav.Link>
<Nav.Link as={Link} to="/contact" className={this.state.navBarItem} >CONTACT</Nav.Link>
<Nav.Link as={Link} to="/about" className={this.state.navBarItem} >ABOUT</Nav.Link>
 **/