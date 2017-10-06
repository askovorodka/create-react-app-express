import React, {Component} from 'react'

class Skins extends Component {
    constructor(){
        super();
        this.state = {
            skins: [],
            count: 0
        }
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_BASE_URL + '/api/skins',{accept: 'application/json'})
            .then(response => response.json())
            .then(response => this.setState({count: response.count, skins: response.data}))
    }
    getSkins = () => {
        return this.state.skins.map(item => {
            return <li key={item.id}>{item.steam_id} - {item.value} - {item.currency}</li>
        })
    }
    render() {
        const count = this.state.count;
        return (
            <div>
                <h2>skins</h2>
                <div>{count}</div>
                <div>{this.getSkins()}</div>
            </div>
        )
    }
}

export default Skins;