// NPM
import React, { Component, useState } from 'react';

// Styles
import '../styles/login.scss';
const Login: React.FC = () => {
    const [loginEmail, onLogimEmailChange] = useState('');
    const [loginPassword, onLoginPasswordChange] = useState('');
    const [registerEmail, onRegisterEmailChange] = useState('');
    const [registerPassword, onRegisterPasswordChange] = useState('');
    const [registerConfirmPassword, onRegisterConfirmPasswordChange] = useState('');
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
                <form id='login-form'>
                    <input
                        type='text'
                        id='login-input'
                        placeholder='Email'
                        required={true}
                        onChange={(e) => onLogimEmailChange(loginEmail + e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id="login-input"
                        placeholder='Password'
                        required={true}
                        onChange={(e) => onLoginPasswordChange(loginPassword + e.target.value)}
                    />
                    <br /> <br />
                    <button
                        type='submit'
                        id="login-button"
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
                </form>

                {/*REGISTER FORM */}
                <form id='register-form'>
                    <input
                        type='text'
                        id='login-input'
                        placeholder='Email'
                        required={true}
                        onChange={(e) => onRegisterEmailChange(registerEmail + e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id='login-input'
                        placeholder='Password'
                        required={true}
                        onChange={(e) => onRegisterPasswordChange(registerPassword + e.target.value)}
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id='login-input'
                        placeholder='Confirm Password'
                        required={true}
                        onChange={(e) => onRegisterConfirmPasswordChange(registerConfirmPassword + e.target.value)}

                    />
                    <br /> <br />
                    <button
                        type='submit'
                        id='login-button'
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
                </form>

                {/*FORGOT FORM */}
                <form
                    id='forgot-form'
                >
                    <input
                        type='email'
                        id='login-input'
                        required={true}
                        placeholder="Email"
                        onChange={(e) => onForgotEmailChange(forgotEmail + e.target.value)}
                    />
                    <br /> <br />
                    <button
                        type='submit'
                        id='login-button'
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

                </form>
            </div>
        </body>
    )
}

export default Login;