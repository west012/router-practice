import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Link, NavDropdown} from 'react-bootstrap';

function Navbar(){
    return (
        <div className = 'navbar'>
            <Link to = '/'> Home</Link>
            <Link to = '/about'> About Me</Link>
            {/* <Link to = '/'> Projects</Link> */}
        
        </div>
    )
}

export default Navbar;