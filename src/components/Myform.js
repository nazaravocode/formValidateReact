import React, {Component} from 'react';
import Myinput from './Myinput'

class Myform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            pass: '',
            spass: '',
            formErrors: {email: '', password: '', login: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            loginValid: false,
            spasswordValid: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    /*   validator = {
           login: '',
           email: '',
           pass: '',
           spass: '',
       };*/


    onSubmit = event => {
        // alert(`${event.target}, добро пожаловать!`);
        // console.log('onSubmit->', event.target.value, event.target.name);
        event.preventDefault();
      /*  const data = new FormData(event.target);
        console.log('onSubmit data ->', data);*/
      if ( this.state.emailValid &&
          this.state.passwordValid &&
          this.state.loginValid &&
          this.state.spasswordValid) {
          this.setState( {formValid: true});
          console.log('onSubmit FORM NOT VALID )) ->', this.state);
      }else console.log('onSubmit FORM NOT VALID (( ->', this.state);



    }

    /*  onInputChange = event => {
          console.log('onSubmit->', event.target.name, '-- value--> ', event.target.value);
          this.setState({[event.target.name]: event.target.value});
          console.log('onSubmit state ->', this.state[event.target.name]);
          switch (event.target.name) {
              case login : this.validator.login =
          }

      }*/
    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
        console.log('onInputChange ->', this.state);
    }

    passwordValidator = (pass1, pass2) =>  {
        console.log('123 == pass1 == pass2 -->', 123 == pass1 == pass2 );
        return  123 == pass1 == pass2};


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let loginValid = this.state.loginValid;
        let spasswordValid = this.state.spasswordValid;
        switch (fieldName) {
            case 'login':
                loginValid = value == 'admin';
                fieldValidationErrors.login = loginValid ? '' : 'login is invalid';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'pass':
                passwordValid = this.passwordValidator(value, this.state.spass);

                fieldValidationErrors.password = passwordValid ? '' : 'passwords do not match. please try again';
                console.log('validateField pass->', passwordValid, this.state.formErrors);
                break;
            case 'spass':
                spasswordValid = this.passwordValidator(value, this.state.pass);
                fieldValidationErrors.password = passwordValid ? '' : 'passwords do not match. please try again';
                console.log('validateField pass->', passwordValid, this.state.formErrors);
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            spasswordValid: passwordValid,
            loginValid: loginValid,

        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid &&
                this.state.passwordValid
        });
    }


    render() {
        return (
            <>
                <div className='formErrors'>
                    {Object.keys(this.state.formErrors).map((fieldName, i) => {
                        if (this.state.formErrors[fieldName].length > 0) {
                            return (
                                <p key={i}>{fieldName} {this.state.formErrors[fieldName]}</p>
                            )
                        } else {
                            return '';
                        }
                    })}
                </div>
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
                        name="email"
                        inpValue={this.state.email}
                        eventHandler={this.onInputChange}
                    />
                    <Myinput
                        labelText="Password"
                        type="password"
                        name="pass"
                        inpValue={this.state.pass}
                        eventHandler={this.onInputChange}
                    />
                    <Myinput
                        labelText="Confirm password"
                        type="password"
                        name="spass"
                        inpValue={this.state.spass}
                        eventHandler={this.onInputChange}
                    />

                    <button className="btn btn-lg badge-success" type="submit">Confirm</button>
                </form>
            </>
        );
    }
}

export default Myform;