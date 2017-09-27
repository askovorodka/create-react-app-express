import React,{Component} from 'react'
import Catalog from '../components/Catalog'

class CatalogList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <Catalog id={this.props.match.params.number}/>;
    }
}

export default CatalogList;