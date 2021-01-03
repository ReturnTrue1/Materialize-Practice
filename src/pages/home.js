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
            </ul>
        </div>
    )
}
