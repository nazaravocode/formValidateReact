import React, {Component} from 'react';

class FormForTests extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            passOk: false,
            loginOk: false
        };

        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }
    onLoginChange(e) {
        this.setState({
            ...this.state,
            login: e.target.value,
            loginOk : e.target.value === 'admin'
        }, () => console.log('onLoginChange ->',this.state));

    }

    onPasswordChange(e) {
        this.setState({
            ...this.state,
            password: e.target.value,
            passOk : e.target.value === '123'
        }, () => console.log('onPasswordChange ->',this.state));
    }

    render() {
        // this.validator(this.state.login, this.state.password);

        return (
            <form  onSubmit={this.onSubmit}>
                <label>login</label>
                <input
                    type="text"
                    value={this.state.login}
                    onChange={e => this.onLoginChange(e)}
                    name="login"
                    style={{border: this.state.loginOk ? '3px solid green' : '1px solid red'}}
                />
                <label>pass</label>
                <input
                    type="text"
                    value={this.state.password}
                    onChange={e => this.onPasswordChange(e)}
                    name="password"
                    style={{border: this.state.passOk ? '3px solid green' : '1px solid red'}}
                />

                <button type="submit"> Submit</button>
            </form>
        );
    }
}

export default FormForTests;