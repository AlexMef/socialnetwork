import React from 'react';
import './Header.scss';
import logo from '../../logo.svg';

function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div><img id="logo" src={logo} alt="" /></div>
                <div className="site-name">Site name</div>
                <div className="site-menu">
                    <div><a href="https://google.com">Home</a></div>
                    <div><a href="https://google.com">News</a></div>
                    <div><a href="https://google.com">Something</a></div>
                    <div><a href="https://google.com">Abouts</a></div>
                </div>
            </div>
        </div>
    )
}

export default Header;