import React, {Component} from 'react';

class Myinput extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {labelText, type, name,eventHandler,inpValue} = this.props;
        return (
            <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">{labelText}</label>
                    <input type={type} className="form-control" name={name}
                           onChange={eventHandler}
                           value={inpValue}/>
                </div>
        );
    }
}

export default Myinput;