import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bd="dark" variant="primary">
                <Nav className="me-auto">
                    <Nav.Link href="/"> Home</Nav.Link>
                    <Nav.Link href="/SignIn"> Signin</Nav.Link>
                    <Nav.Link href="/SignUp"> SignUp</Nav.Link>
                </Nav>
            </Navbar>

        </>
    )
}

export default NavBar;