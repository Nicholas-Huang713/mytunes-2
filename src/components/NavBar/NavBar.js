import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="nav">
            <div className="nav__home">
                <Link to="/"><button id="home-text"><b>Home</b></button></Link>
            </div>
            <div className="nav__link">
                <Link to="/login"><button>Login</button></Link>
            </div>
            <div className="nav__dropdown">
                <div id="nav__menu">
                    <span className="nav__menu__btn" onClick={() => setToggleMenu(prev => !prev)}>
                        {toggleMenu ? 'X' : <span>&#9776;</span>}
                    </span>
                </div>
                {toggleMenu ? 
                    <div className="nav__dropdown__content">
                        <span><button onClick={() => setToggleMenu(prev => !prev)}>X</button></span>
                        <Link to="/"><a href="#"onClick={() => setToggleMenu(prev => !prev)}><b>Home</b></a></Link>
                        <br/>
                        <Link to="/login"><a href="#"onClick={() => setToggleMenu(prev => !prev)}>Login</a></Link>
                    </div>
                    :
                    <></>
                }
            </div>
        </nav>
    )
}
