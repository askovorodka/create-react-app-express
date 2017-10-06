import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Hello from '../pages/Hello'
import Test from '../pages/Test'
import CatalogList from '../pages/CatalogList'
import Experimental from '../pages/Experimental'
import Skins from '../pages/Skins'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Hello} />
                <Route path="/test" component={Test} />
                <Route path="/hello" component={Hello}/>
                <Route exact path="/catalog" component={CatalogList}/>
                <Route path="/catalog/:number" component={CatalogList}/>
                <Route path="/experimental" component={Experimental}/>
                <Route path="/skins" component={Skins}/>
            </Switch>
        )
    }
}

export default Main