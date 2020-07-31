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

        //Set function bindings here
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
                    />
                    <br /> <br />
                    <input
                        type='password'
                        id="login-input"
                        placeholder='Password'
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
