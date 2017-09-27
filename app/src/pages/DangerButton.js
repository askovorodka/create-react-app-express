import React, {Component} from 'react'
import Button from './Button'

class DangerButton extends Component {
    constructor(){
        super();
    }
    handleClick(value) {
        console.log(value);
    }
    render() {
        return <Button color="red" value="Test value" handleClick={this.handleClick}/>;
    }
}

export default DangerButton;