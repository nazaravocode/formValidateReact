import React, {Component} from 'react';
import Myinput from './Myinput'

class MyFormLite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            pass: '',
            emailValid: false,
            passValid: false,
            loginValid: false,
            formValid: false,
            submited: false
        }
        this.onInputChange =  this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
        console.log('onInputChange ->', this.state);
    }

    validateField(fieldName, value) {
        let {emailValid, passValid, loginValid} = this.state;

        switch (fieldName) {
            case 'login':
                loginValid = value == 'admin';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            case 'pass':
                passValid =  value == '123';
                break;
            default:
                break;
        }
        this.setState({
            emailValid,
            passValid,
            loginValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid &&
                this.state.passValid && this.state.loginValid});
    }
    handleSubmit = e => {
        let submited =  !this.state.submited;
        e.preventDefault();
        this.setState({
            submited
        });
    }
    render() {
        return (
            // this.state.submited && <h1></h1>
            this.state.submited ? <h1>Hello {this.state.login}</h1> : <form onSubmit={this.handleSubmit}>
                    <Myinput
                        labelText="Login"
                        type="text"
                        name="login"
                        inpValue={this.state.login}
                        eventHandler={this.onInputChange}
                        errorValidate={!this.state.loginValid}
                    />
                    <Myinput
                        labelText="Email address"
                        type="email"
                        name="email"
                        inpValue={this.state.email}
                        eventHandler={this.onInputChange}
                        errorValidate={!this.state.emailValid}
                    />
                    <Myinput
                        labelText="Password"
                        type="password"
                        name="pass"
                        inpValue={this.state.pass}
                        eventHandler={this.onInputChange}
                        errorValidate={!this.state.passValid}
                    />
                    <button className="btn btn-lg badge-success"
                            disabled={!this.state.formValid}
                            type="submit"
                           >
                        Confirm
                    </button>
                </form>
        );
    }

}

export default MyFormLite;