import React, {Component} from 'react'

class Experimental extends Component {
    constructor(){
        super();
        this.state = {time: new Date().getTime(), users: [], updated: false}
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
        console.log('component will mount');
        this.setState({updated: true});

    }
    getUsers = () => {
        fetch(process.env.REACT_APP_BASE_URL + '/api/users',{accept: 'application/json',})
            .then(res => res.json())
            .then(users => this.setState({ users: users }));
    }
    componentDidMount(){
        console.log('component did mount');
        this.getUsers();
    }
    componentWillUnmount(){
        console.log('this unmount');
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUpdate(){

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