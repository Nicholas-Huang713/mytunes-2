import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="nav">
            {/* <div className="nav__btns"> */}
                <div className="nav__home">
                    <Link to="/"><button id="home-text"><b>Home</b></button></Link>
                </div>
                <div className="nav__link">
                    <Link to="/login"><button>Login</button></Link>
                </div>
                <div id="nav__menu">
                    Hamburger
                </div>
            {/* </div> */}
        </nav>
    )
}
