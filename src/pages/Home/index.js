import React from 'react'
import './style.css'

import FindImages from './img/find-images.JPG'
import ColorGenerator from './img/color-generator.JPG'
import Calc from './img/calc.JPG'
import Lorem from './img/lorem.JPG'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <ul className="images-container">
                <div className="container-up">
                    <li className="img-bg">
                        <img src={FindImages} alt="Find images app" />
                        <Link to='/find-images'>
                            <div className="img-info">
                                <div className="blur"></div>
                                <h2 className='info-text'>Find Images</h2>
                            </div>
                        </Link>
                    </li>
                    <li className="img-bg">
                        <img src={ColorGenerator} alt="Color generator app" />
                        <Link to='/color-generator'>
                            <div className="img-info">
                                <div className="blur"></div>
                                <h2 className='info-text'>Color Generator</h2>
                            </div>
                        </Link>
                    </li>
                </div>

                <div className="container-down">
                    <li className="img-bg">
                        <img src={Lorem} alt="Lorem ipsum app" />
                        <Link to='/paragraphs-generator'>
                            <div className="img-info">
                                <div className="blur"></div>
                                <h2 className='info-text'>Paragraphs Generator</h2>
                            </div>
                        </Link>
                    </li>
                    <li className="img-bg">
                        <img src={Calc} alt="Calculadora de interes compuesto app" />
                        <Link to='/calculator'>
                            <div className="img-info">
                                <div className="blur"></div>
                                <h2 className='info-text'>Compound Interest Calculator</h2>
                            </div>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Home
