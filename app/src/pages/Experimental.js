import React, {Component} from 'react'

class Experimental extends Component {
    constructor(){
        super();
        this.state = {time: new Date().getTime(), users: [], updated: false}
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
    shouldComponentUpdate() {
        if (this.state.updated) {
            return false;
        }
        this.setState({updated: true});
        return true;
    }
    componentWillUpdate(){
        fetch('http://localhost:3001/api/users',{accept: 'application/json',})
            .then(res => res.json())
            .then(users => this.setState({ users: users }));
    }
    handleClick(e){
        e.preventDefault();
        this.setState({
            time: new Date().getTime(),
        });
    }

    renderUsers = () => {
        return this.state.users.map((user) => {
            return <li key={user.id}>{user.username}</li>
        });
    }

    render(){
        return (
            <div>
                <h2>experimantal {this.state.time.toString()}</h2>
                <a href="" onClick={this.handleClick}>update</a>
                {this.renderUsers()}
            </div>
        )
    }
}

export default Experimental;