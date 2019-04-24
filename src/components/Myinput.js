import React, {Component} from 'react';

class Myinput extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {labelText, type, eventHandler, name, inpValue, errorValidate } = this.props;
        return (
            <div className="form-group">
                    <label className={`${errorValidate ? 'text-danger' : 'text-success'}`} >{labelText}</label>
                    <input type={type} className={`form-control ${errorValidate ? 'is-invalid' : ''}`} name={name}
                           onChange={eventHandler}
                           value={inpValue}/>
                </div>
        );
    }
}

export default Myinput;