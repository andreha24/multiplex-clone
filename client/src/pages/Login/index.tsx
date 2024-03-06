import React from 'react';
import { Form } from "react-final-form";

import logo from '../../assets/logo.svg';

import './index.scss';

const Login: React.FC = () => {
    const sendForm = () => {

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
                    </form>
                )}
            />
        </div>

        <div className="login__right">

        </div>
    </div>
)};

export default Login;

