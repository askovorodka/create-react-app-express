import React from 'react'
import {Router, Route} from 'react-router'

import App from './App'
import Hello from './pages/Hello'

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}/>
        <Route path="/hello" component={Hello}/>
    </Router>
)

export default Routes