import React, { useRef, useEffect } from 'react'
import nest from './logo-primary.svg'

import M from 'materialize-css'

const NavBars = () => {

    const dropdown = useRef();

    useEffect(() => {
        M.Dropdown.init(dropdown.content, {
            hover: true,
        });
    }, [dropdown]);

    return (
        <div className='container'>
            <h3>Navigation Bars</h3>

            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">
                        <img src={nest} alt="nest" />
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li className="active"><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <br></br>

            <nav className="blue darken-4">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">
                        <img src={nest} alt="nest" />
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a className="dropdown-trigger" ref={dropdown} href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><button className="waves-effect waves-light btn">LOGIN</button></li>
                        <li><i className="material-icons">person</i></li>
                    </ul>
                </div>
            </nav>

            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>

            <br></br>

            <nav className="black">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">
                        <img src={nest} alt="nest" />
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li className="active"><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBars