import React, {Component} from 'react'
import '../pages/pages.css'
import logo from '../images/kot.png'

class Catalog extends Component {
    constructor(){
        super();
    }

    list(){
        return (<h1 className="catalog">catalog list</h1>)
    }

    byId(){
        return (
            <div>
                <h1>catalog by id {this.props.id}</h1>
                <img src={logo} className="logo" alt="logo" />
            </div>
        );
    }

    render(){
        if (this.props.id){
            return this.byId();
        } else {
            return this.list()
        }
    }
}

export default Catalog;