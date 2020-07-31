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

    render() {
        return (
            <body
                id='background'>

                <form
                    id='login-container'>
                    <h1 id="login-title">Blink</h1>
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
                        Login
                    </button>
                    <br /> <br />
                    <hr style={{ width: '70%', backgroundColor: 'black' }} />
                </form>
            </body>
        )
    }
}
