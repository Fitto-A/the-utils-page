import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="logo">
                <Link to='/'>
                    <h2>The Utils Page</h2>
                </Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to='/find-images'>
                            Find Images
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/color-generator'>
                            Color Generator
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/paragraphs-generator'>
                            Paragraphs Generator
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/calculator'>
                            Compound Interest Calculator
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
