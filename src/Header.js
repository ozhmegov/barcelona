import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from './img/icons8-Barcelona FC.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div>
                        <ul>
                            <li><img className="logo" src={logo} alt="My logo" /></li>
                            <li className="label">FC Barcelona</li>
                            <li className="rightNav"><Link to='/schedule'>Schedule</Link></li>
                            <li className="rightNav"><Link to='/team'>Team</Link></li>
                            <li className="rightNav"><Link to='/'>About</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}