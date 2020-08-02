/*
    Bind all submits and handle each request
*/

import React, { Component } from 'react';

interface Props {

}

interface State {
    password: string;
    email: string;
}

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            password: '',
            email: ''
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);

        this.register = this.register.bind(this);
        this.backToLoginFromRegister = this.backToLoginFromRegister.bind(this);
    }

    onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

    }
    register = () => {
        const login: HTMLElement = document.getElementById('login-form')!;
        const register: HTMLElement = document.getElementById('register-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        login.style.visibility = 'hidden'
        login.style.opacity = '0';

        register.style.visibility = 'visible';
        register.style.opacity = '1';

        container.style.paddingBottom = '60px';
    }
    backToLoginFromRegister = () => {
        const login: HTMLElement = document.getElementById('login-form')!;
        const register: HTMLElement = document.getElementById('register-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        login.style.visibility = 'visible';
        login.style.opacity = '1';

        register.style.visibility = 'hidden';
        register.style.opacity = '0';

        container.style.paddingBottom = '0px';
    }
    backToLoginFromForgot = () => {
        const forgot: HTMLElement = document.getElementById('forgot-form')!;
        const login: HTMLElement = document.getElementById('login-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        forgot.style.visibility = 'hidden';
        forgot.style.opacity = '0';

        login.style.visibility = 'visible';
        login.style.opacity = '1';

        container.style.height = '315px';

    }
    forgotPassword = () => {
        const forgot: HTMLElement = document.getElementById('forgot-form')!;
        const login: HTMLElement = document.getElementById('login-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;

        forgot.style.visibility = 'visible';
        forgot.style.opacity = '1';

        login.style.visibility = 'hidden';
        login.style.opacity = '0';

        container.style.height = '250px'
    }


    render() {
        return (
            <body
                id='background'>

                <div
                    id='login-container'>

                    <header id='login-header'>
                        <h1
                            id="login-title"
                        >
                            Blink
                        </h1>
                        <img
                            id='login-pic'
                            src={require('../images/logo.png')}
                        />
                    </header>
                    <form id='login-form'>
                        <input
                            type='text'
                            id='login-input'
                            placeholder='Email'
                            required={true}
                            onChange={this.onUsernameChange}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id="login-input"
                            placeholder='Password'
                            required={true}
                            onChange={this.onPasswordChange}
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
                                id='login-hover'
                                onClick={this.register}
                            >
                                Register
                            </a>
                            <span>| </span>
                            <a
                                id='login-hover'
                                onClick={this.forgotPassword}
                            >Forgot Password</a>
                        </footer>
                    </form>

                    <form id='register-form'>
                        <input
                            type='text'
                            id='login-input'
                            placeholder='Email'
                            required={true}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id='login-input'
                            placeholder='Password'
                            required={true}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id='login-input'
                            placeholder='Confirm Password'
                            required={true}

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
                            onClick={this.backToLoginFromRegister}
                            type='button'
                        >
                            Back to Login
                        </button>
                    </form>

                    <form
                        id='forgot-form'
                    >
                        <input
                            type='email'
                            id='login-input'
                            required={true}
                            placeholder="Email"
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
                            onClick={this.backToLoginFromForgot}
                        >
                            Back to Login
                        </button>

                    </form>
                </div>
            </body>
        )
    }
}
