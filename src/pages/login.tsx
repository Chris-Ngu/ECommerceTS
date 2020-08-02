import React, { Component } from 'react';

interface Props {

}

interface State {
    username: string;
    password: string;
}

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.register = this.register.bind(this);
        this.backToLogin = this.backToLogin.bind(this);
    }

    onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: e.target.value
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
    backToLogin = () => {
        const login: HTMLElement = document.getElementById('login-form')!;
        const register: HTMLElement = document.getElementById('register-form')!;
        const container: HTMLElement = document.getElementById('login-container')!;
        
        login.style.visibility = 'visible';
        login.style.opacity = '1';

        register.style.visibility = 'hidden';
        register.style.opacity = '0';

        container.style.paddingBottom = '0px';
    }

    render() {
        return (
            <body
                id='background'>

                <div
                    id='login-container'>

                    <h1 id="login-title">Blink</h1>

                    <form id='login-form'>
                        <input
                            type='text'
                            id='login-input'
                            placeholder='Username'
                            onChange={this.onUsernameChange}
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id="login-input"
                            placeholder='Password'
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
                            <a onClick={this.register}>Register </a>
                            <span>| </span>
                            <a href='#'>Forgot Password</a>
                        </footer>
                    </form>

                    <form id='register-form'>
                        <input
                            type='text'
                            id='login-input'
                            placeholder='Email'
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id='login-input'
                            placeholder='Password'
                        />
                        <br /> <br />
                        <input
                            type='password'
                            id='login-input'
                            placeholder='Confirm Password'
                        />
                        <br /> <br />
                        <button
                            type='submit'
                            id='login-button'
                        >
                            <span>Register</span>
                        </button>
                        <br/><br/>
                        <button
                            id='login-button'
                            onClick={this.backToLogin}
                        >
                            Back to Login
                        </button>
                    </form>

                </div>
            </body>
        )
    }
}
