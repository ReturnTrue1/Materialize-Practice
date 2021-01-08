import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/typography">Typography</Link>
                </li>
                <li>
                    <Link to="/color">Color</Link>
                </li>
                <li>
                    <Link to="/buttonsAndIcons">Buttons and Icons</Link>
                </li>
                <li>
                    <Link to="/actionbutton">Action Buttons</Link>
                </li>
                <li>
                    <Link to="/navigationbar">Navigation Bars</Link>
                </li>
                <li>
                    <Link to="/collection">Collection</Link>
                </li>
                <li>
                    <Link to="/grid">Grid</Link>
                </li>
                <li>
                    <Link to="/card">Card</Link>
                </li>
                <li>
                    <Link to="/footer">Footer</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
                <li>
                    <Link to="/fancyform">Fancy Form</Link>
                </li>
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/carousel">Carousel</Link>
                </li>
            </ul>
        </div>
    )
}
