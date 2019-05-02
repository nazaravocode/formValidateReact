import React, { Component } from 'react';
import {Input, MessagesBlock} from './FormStyleComp_utils';
import styled from 'styled-components';

export const Input = styled.input`
    border: solid 2px ${props =>
    props.isValid ? 'blue' :
        'red'};
`;

export const MessagesBlock = styled.div`
  width: 150px;
  height: 100px;
  margin: 15px auto 15px auto;
  padding: 5px;
  border: solid 2px
    ${props =>
    props.isValid ? 'blue' :
        'red'};
`;

class FormStyledComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            messages: null,
        };

        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
        const { login, password } = this.state;
        const { validName, validPassword } = validator(login, password);

        const messages =
            validName && validPassword ? 'Успех' :
                'Неудача';

        this.setState({ messages });

        return (
            setTimeout(() => {
                this.setState({ messages: null });
            }, 2000),
                event.preventDefault()
        );
    }
    onLoginChange (e) {
        this.setState({
            login: e.target.value,
        });
    }

    onPasswordChange (e) {
        this.setState({
            password: e.target.value,
        });
    }

    render () {
        const { login, password, messages } = this.state;
        const { validName, validPassword } = validator(login, password);

        return (
            <div>
                {messages && (
                    <MessagesBlock isValid={validName && validPassword}>
                        {messages}
                    </MessagesBlock>
                )}
                <form onSubmit={this.onSubmit}>
                    <label>login</label>
                    <Input
                        type='text'
                        value={login}
                        onChange={this.onLoginChange}
                        isValid={validName}
                    />
                    <label>password</label>
                    <Input
                        type='text'
                        isValid={validPassword}
                        value={password}
                        onChange={this.onPasswordChange}
                    />
                    <button type='submit'> Submit</button>
                </form>
            </div>
        );
    }
}

export default FormStyledComp;