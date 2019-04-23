import React, {Component} from 'react';
import Myinput from './Myinput'
class Myform extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '1111',
                      email: '',
                      pass: '',
                      spass: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSpassChange = this.onSpassChange.bind(this);
       // this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
       // alert(`${event.target}, добро пожаловать!`);
console.log('onSubmit->',event.target.value);
        event.preventDefault();
    }
    onPasswordChange(event){
        this.setState({pass: event.target.value});
    }

    onLoginChange(event) {
        console.log('onLoginChange->',event.target.name);
        this.setState({login: event.target.name});
    }
    onSpassChange(event){
        this.setState({spass: event.target.value});
    }
    onInputChange = event =>
        console.log('onSubmit->',event.target.value);




    render() {
        return (
            <form onSubmit={this.onSubmit}>
                    <Myinput
                    labelText="Login"
                    type="text"
                    name="login"
                    inpValue={this.state.login}
                    eventHandler={this.onInputChange}
                    />
                    <Myinput
                        labelText="Email address"
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <Myinput
                        labelText="Password"
                        type="password"
                        id="pass"
                        value={this.state.pass}
                        onChange={this.onPassChange}
                    />
                    <Myinput
                        labelText="Confirm password"
                        type="password"
                        id="spass"
                        value={this.state.spass}
                        onChange={this.onSassChange}
                    />

                    <button className="btn btn-lg badge-success" type="submit">Confirm</button>
                </form>
        );
    }
}

export default Myform;