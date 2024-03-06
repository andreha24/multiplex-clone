import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.png';
import loginImg from '../../assets/ava_temp1.svg';

import './index.scss';

const Header:React.FC = () => (
    <div className="header">
        <div className="header-nav">
            <img src={menu} alt="menu"/>
            <img src={logo} className="header-nav-logo" alt="logo"/>
        </div>

        <div className="header-log">
            <Link to="/login">Log in</Link>
            <img src={loginImg} alt="log" />
        </div>
    </div>
);

export default Header;