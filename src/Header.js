import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
             <h1 className="brand-name">TODO LIST</h1>
             <Nav className="justify-content-center" >
                <Nav.Item className="mr-5">
                    <Link to="/classbasedtodo">CLASS TODO</Link>
       
                </Nav.Item>
                <Nav.Item>
                    <Link to="/functionbasedtodo">FUNCTION TODO</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header;
