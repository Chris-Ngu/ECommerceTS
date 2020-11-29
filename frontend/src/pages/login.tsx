// NPM
import React, { useState } from 'react';
import Axios, { AxiosResponse } from 'axios';

import { ForgotUserType, RegisterUserType, UserType } from "../interfaces/UserTypes";
import { SERVER_ADDRESS } from "../serverConfig";

// Styles
import '../styles/login.scss';

const Login: React.FC = () => {
    const [loginEmail, onLogimEmailChange] = useState('');
    const [loginPassword, onLoginPasswordChange] = useState('');
    const [registerEmail, onRegisterEmailChange] = useState('');
    const [registerPassword, onRegisterPasswordChange] = useState('');
    const [registerConfirmPassword, onRegisterConfirmPasswordChange] = useState('');
    const [registerUsername, onRegisterUsernameChange] = useState("");
    const [forgotEmail, onForgotEmailChange] = useState('');

    const registerAnimate = () => {
        const login: HTMLElement = document.getElementById('login-form')!;
        const register: HTMLElement = document.getElementById('register-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        login.style.visibility = 'hidden'
        login.style.opacity = '0';

        register.style.visibility = 'visible';
        register.style.opacity = '1';

        container.style.paddingBottom = '60px';
    }
    const backToLoginFromRegisterAnimate = () => {
        const login: HTMLElement = document.getElementById('login-form')!;
        const register: HTMLElement = document.getElementById('register-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        login.style.visibility = 'visible';
        login.style.opacity = '1';

        register.style.visibility = 'hidden';
        register.style.opacity = '0';

        container.style.paddingBottom = '0px';
    }
    const backToLoginFromForgot = () => {
        const forgot: HTMLElement = document.getElementById('forgot-form')!;
        const login: HTMLElement = document.getElementById('login-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        forgot.style.visibility = 'hidden';
        forgot.style.opacity = '0';

        login.style.visibility = 'visible';
        login.style.opacity = '1';

        container.style.height = '315px';
    }
    const forgotAnimate = () => {
        const forgot: HTMLElement = document.getElementById('forgot-form')!;
        const login: HTMLElement = document.getElementById('login-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        forgot.style.visibility = 'visible';
        forgot.style.opacity = '1';

        login.style.visibility = 'hidden';
        login.style.opacity = '0';

        container.style.height = '250px'
    }
    const loginUser = () => {
        // check data input here
        if (loginEmail.length === 0 || loginPassword.length === 0) {
            return alert("One or more fields were left blank, please try again");
        }

        const user: UserType = {
            email: loginEmail,
            password: loginPassword
        }

        // Handle POST login request here, maybe use some type of login token
        Axios.post(SERVER_ADDRESS + "/login", user)
            .then((res: AxiosResponse) => {
                alert(res.data);
            })
            .catch((err: unknown) => {
                alert(err);
            });
    }
    const registerUser = () => {
        //check data input here

        if (registerEmail.length === 0 || registerPassword.length === 0 || registerConfirmPassword.length === 0) {
            return alert("One or more fields was left empty, please try again");
        }

        if (registerPassword !== registerConfirmPassword) {
            return alert("Passwords do not match, please try again");
        }

        const user: RegisterUserType = {
            email: registerEmail,
            username: registerUsername,
            password: registerPassword,
            confirmPassword: registerConfirmPassword
        };

        Axios.post(SERVER_ADDRESS + "/users", user)
            .then((res) => {
                alert(res);
                // onRegisterUsernameChange("");
                // onRegisterPasswordChange("");
                // onRegisterEmailChange("");
                // onRegisterConfirmPasswordChange("");
            })
            .catch((err) => {
                alert(err);
            });
    }
    const forgotPassword = () => {
        if (forgotEmail.length === 0) {
            return alert("Please fill in your email to proceed");
        }

        const user: ForgotUserType = {
            email: forgotEmail
        };

        Axios.post(SERVER_ADDRESS + "/forgot", user)
            .then((res: AxiosResponse) => {
                alert(res.data);
            })
            .catch((err: unknown) => {
                alert(err);
            })
    }

    //handle form submits here
    return (
        <body
            id='background'>

            <div
                id='login-container'>

                <header id='login-header'>
                    <h1
                        id="login-title"
                    >
                        KeebClack
                    </h1>
                    <img
                        alt='KeebClack Logo'
                        id='login-pic'
                        src={require('../images/logo.png')}
                    />
                </header>

                {/* LOGIN FORM */}
                <div id='login-form'>
                    <input
                        type='text'
                        id='login-input'
                        placeholder='Email'
                        required={true}
                        onChange={(e) => onLogimEmailChange(e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id="login-input"
                        placeholder='Password'
                        required={true}
                        onChange={(e) => onLoginPasswordChange(e.target.value)}
                    />
                    <br /> <br />
                    <button
                        id="login-button"
                        onClick={() => loginUser()}
                    >
                        <span>Login</span>
                    </button>
                    <br /> <br />
                    <hr style={{ width: '70%', backgroundColor: 'rgb(51,204,255' }} />

                    <footer
                        id='login-footer'
                    >
                        <a
                            href='#register'
                            id='login-hover'
                            onClick={registerAnimate}
                        >
                            Register
                                </a>
                        <span>| </span>
                        <a
                            href="#forgot"
                            id='login-hover'
                            onClick={forgotAnimate}
                        >Forgot Password</a>
                    </footer>
                </div>

                {/*REGISTER FORM */}
                <div id='register-form'>
                    <input
                        type='text'
                        id='login-input'
                        placeholder='Email'
                        required={true}
                        onChange={(e) => onRegisterEmailChange(e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type="test"
                        id="login-input"
                        placeholder="Username"
                        required={true}
                        onChange={(e) => onRegisterUsernameChange(e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id='login-input'
                        placeholder='Password'
                        required={true}
                        onChange={(e) => onRegisterPasswordChange(e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id='login-input'
                        placeholder='Confirm Password'
                        required={true}
                        onChange={(e) => onRegisterConfirmPasswordChange(e.target.value)}

                    />
                    <br /> <br />
                    <button
                        id='login-button'
                        onClick={() => registerUser()}
                    >
                        <span>Register</span>
                    </button>
                    <br /><br />
                    <button
                        id='login-button'
                        onClick={backToLoginFromRegisterAnimate}
                        type='button'
                    >
                        Back to Login
                            </button>
                </div>

                {/*FORGOT FORM */}
                <div
                    id='forgot-form'
                >
                    <input
                        type='email'
                        id='login-input'
                        required={true}
                        placeholder="Email"
                        onChange={(e) => onForgotEmailChange(e.target.value)}
                    />
                    <br /> <br />
                    <button
                        type='submit'
                        id='login-button'
                        onClick={forgotPassword}
                    >
                        <span>Continue</span>
                    </button>
                    <br /> <br />
                    <button
                        type='button'
                        id='login-button'
                        onClick={backToLoginFromForgot}
                    >
                        Back to Login
                    </button>

                </div>
            </div>
        </body>
    )
}

export default Login;