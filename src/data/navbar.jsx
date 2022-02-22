import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import {IoChevronDown}  from 'react-icons/io5';
import {BsCart3} from"react-icons/bs";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
function NavBar() {

    return (
        <React.Fragment>
            <Navbar collapseOnSelect className="nav-bg-color mt-2" expand="lg" style={{height:"60px"}}  >
                <Container>
                    <Navbar.Brand href="/home"><img src="https://i.ibb.co/qs8BK6Y/flipkart-plus-4ee2f9.png" className="nav-img" width="70px" height="22px" />
                        <p className="nav-brand-span mx-1" >Explore <span className="nav-brand-p">Plus<img src="https://i.ibb.co/t2WXyzj/plus-b13a8b.png " className="mx-1" width="10px" height="10px" /></span></p>
                    </Navbar.Brand>
                    <div className="form-group">

                        <input className="form-control" type="text" placeholder="Search for products,brands and more" />
                    </div>
                    <button className="nav-login-btn mx-5">Login</button>

                    <div className="dropdown mx-4 nav-font">
                        <Link to="javascript" className="dropbtn">More<IoChevronDown/></Link>
                        <div className="dropdown-content">
                            <Link to="/">Notification</Link>
                            <Link to="/">Sell on FlipCart</Link>
                            <Link to="/">24x7 Customer care</Link>
                            <Link to="/">Advertise</Link>
                        </div>
                    </div>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className="text-light mx-5 nav-font">Viewed</Nav.Link>
                            
                            <Nav.Link href="#features" className="text-light mx-5 nav-font"><BsCart3/>Cart</Nav.Link>
                        </Nav>
                        <Nav>
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="row ">

            <div className="dropdown nav-font col-2 " style={{marginLeft:"170px",fontSize:"15px"}}>
                        <Link to="javascript" className="dropbtn text-dark">Mobiles<IoChevronDown/></Link>
                        <div className="dropdown-content">
                            <Link to="/">Notification</Link>
                            <Link to="/">Sell on FlipCart</Link>
                            <Link to="/">24x7 Customer care</Link>
                            <Link to="/">Advertise</Link>
                        </div>
                    </div>
                  
                    <div className="dropdown nav-font col-2  " style={{marginLeft:"210px",fontSize:"15px"}}>
                        <Link to="javascript" className="dropbtn text-dark">Laptops<IoChevronDown/></Link>
                        <div className="dropdown-content">
                            <Link to="/">Notification</Link>
                            <Link to="/">Sell on FlipCart</Link>
                            <Link to="/">24x7 Customer care</Link>
                            <Link to="/">Advertise</Link>
                        </div>
                    </div>
                <div className="dropdown nav-font col-2"style={{marginLeft:"230px",fontSize:"15px"}}>
                        <Link to="javascript" className="dropbtn text-dark">Camera<IoChevronDown/></Link>
                        <div className="dropdown-content">
                            <Link to="/">Notification</Link>
                            <Link to="/">Sell on FlipCart</Link>
                            <Link to="/">24x7 Customer care</Link>
                            <Link to="/">Advertise</Link>
                        </div>
                    </div>
            </div>
        </React.Fragment>)

}
export default NavBar;