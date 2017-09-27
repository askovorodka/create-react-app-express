import React, {Component} from 'react'

class Experimental extends Component {
    constructor(){
        super();
        this.state = {time: new Date().getTime(), users: []}
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
        console.log('component will mount');
    }
    componentDidMount(){
        console.log('component did mount');
    }
    componentWillUnmount(){
        console.log('this unmount');
    }
    shouldComponentUpdate(){
        console.log('this should update' + this.state.time % 2);
        return this.state.time % 2;
    }
    componentWillUpdate(){
        console.log('this will update');
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }
    handleClick(e){
        e.preventDefault();
        this.setState({
            time: new Date().getTime(),
        });
    }

    render(){
        return (
            <div>
                <h2>experimantal {this.state.time.toString()}</h2>
                <a href="" onClick={this.handleClick}>update</a>
            </div>
        )
    }
}

export default Experimental;