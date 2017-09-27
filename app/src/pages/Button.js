import React, { Component } from 'react'

class Button extends Component {
    constructor(){
        super();
        this.state = {
            items : []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    /*handleClick(event) {
        return this.props.handleClick(event.target.toString());
    }*/

    handleClick = (e) => {
        import('../modules/moduleA')
            .then(({moduleA}) => {
                this.props.handleClick(moduleA);
            })
            .catch(err => {

            })
    };

    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick}>{this.props.value}</button>
        )
    }
}

export default Button;