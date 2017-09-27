import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/catalog/1">Catalog by id #1</Link></li>
                        <li><Link to="/experimental">Experimental</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header