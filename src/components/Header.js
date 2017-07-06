import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/schedule'>Schedule</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}