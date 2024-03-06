import React, { useState } from 'react';
import { Form } from "react-final-form";
import {Link} from "react-router-dom";
import InputMask from 'react-input-mask';

import logo from '../../assets/logo.svg';
import googleLogo from '../../assets/google-glass-logo.png'
import laptop from '../../assets/lk_login_img_new.png'

import './index.scss';
import 'react-phone-number-input/style.css';

const Login: React.FC = () => {
    const [phone, setNumber] = useState<string>("");

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    }

    const sendForm = () => {
        const res = {phone};
        console.log(res);
    }
    return (
    <div className="login-wrapper">
        <div className="login__left">
            <Form onSubmit={sendForm}
                render={({handleSubmit}) => (
                    <form className="login-form" onSubmit={handleSubmit}>
                        <img className="login-logo" src={logo} alt="logo"/>
                        <p className="login-form__heading">Entrance to a special room</p>
                        <p className="login-form__sec__text">Here are all your orders and personal information</p>

                        <div className="login-input-wrapper">
                            <p className="login-input-heading">Phone number</p>

                            <div className="login-input-block">
                                <InputMask
                                    name="number"
                                    mask="+380\ (99) 999 99 99"
                                    maskChar={null}
                                    className="login-input"
                                    onChange={handleNumberChange}
                                    placeholder="+380 (00) XXX XX XX"
                                />

                                <button className={phone.length < 19 ? "login-input-btn" : "login-input-btn active"} disabled={phone.length < 19}>Continue</button>
                            </div>
                        </div>

                        <div className="login-social-wrapper">
                            <div className="strips"></div>
                            <span className="title">or sign in with help</span>
                            <img src={googleLogo} className="google-logo" alt="google-logo"/>
                        </div>

                        <div className="wrap-link">
                            <span>Return to site</span>
                            <Link to="/" className="link">Multiplex</Link>
                        </div>
                    </form>
                )}
            />
        </div>

        <div className="login__right">
            <div className="new-info">
                <img src={laptop} alt="laptop"/>
                <p className="new-info__title">No need to download or print!</p>
                <p className="new-info__desc">
                    Tickets are already in your account - just log in now and show the QR code when entering the cinema hall.
                </p>
            </div>
        </div>
    </div>
)};

export default Login;

