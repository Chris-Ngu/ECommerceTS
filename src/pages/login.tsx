/*
    Test input binds
    work on 'onSubmit for login and register
    add mysql backend

*/
import React, { Component } from 'react';

interface Props {

}

interface State {
    loginEmail: string;
    loginPassword: string;

    registerEmail: string;
    registerPassword: string;
    registerConfirmPassword: string;

    forgotEmail: string;
}

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            loginEmail: '',
            loginPassword: '',

            registerEmail: '',
            registerPassword: '',
            registerConfirmPassword: '',

            forgotEmail: ''
        };

        this.onLoginEmailChange = this.onLoginEmailChange.bind(this);
        this.onLoginPasswordChange = this.onLoginPasswordChange.bind(this);

        this.onRegisterEmailChange = this.onRegisterEmailChange.bind(this);
        this.onRegisterPasswordChange = this.onRegisterPasswordChange.bind(this);
        this.onRegisterConfirmChange = this.onRegisterConfirmChange.bind(this);

        this.onForgotEmailChange = this.onForgotEmailChange.bind(this);

        this.register = this.register.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.backToLoginFromRegister = this.backToLoginFromRegister.bind(this);
        this.backToLoginFromForgot = this.backToLoginFromForgot.bind(this);
    }

    onLoginEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            loginEmail: e.target.value
        });
    }

    onLoginPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            loginPassword: e.target.value
        });
    }

    onRegisterEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            registerEmail: e.target.value
        });
    }

    onRegisterPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            registerEmail: e.target.value
        });
    }

    onRegisterConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            registerConfirmPassword: e.target.value
        });
    }

    onForgotEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            forgotEmail: e.target.value
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
                            alt='Blink Logo'
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
                            onChange={this.onLoginEmailChange}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id="login-input"
                            placeholder='Password'
                            required={true}
                            onChange={this.onLoginPasswordChange}
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
                                onClick={this.register}
                            >
                                Register
                            </a>
                            <span>| </span>
                            <a
                                href="#forgot"
                                id='login-hover'
                                onClick={this.forgotPassword}
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
                            onChange={this.onRegisterEmailChange}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id='login-input'
                            placeholder='Password'
                            required={true}
                            onChange={this.onRegisterPasswordChange}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id='login-input'
                            placeholder='Confirm Password'
                            required={true}
                            onChange={this.onRegisterConfirmChange}

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

                    {/*FORGOT FORM */}
                    <form
                        id='forgot-form'
                    >
                        <input
                            type='email'
                            id='login-input'
                            required={true}
                            placeholder="Email"
                            onChange={this.onForgotEmailChange}
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
