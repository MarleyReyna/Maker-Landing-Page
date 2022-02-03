import React from 'react';
import './Header.scss'
import logo from './logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='' aria-hidden='true'></img>
        </header>
    );
}
 
export default Header;