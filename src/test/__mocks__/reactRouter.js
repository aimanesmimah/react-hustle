import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

const mockStyle= {
    margin:0,
    padding:0
}

const ErrorPage= ()=> <div>Error Page</div>

const Cars= ()=> <div>Cars Page</div>

class Car extends React.Component {
    render(){
        const {match} = this.props 
        return (
            <div>{match.params.stockNumber}</div>
        )
    }
}


export default () =>
<div style={mockStyle}>
    <Switch>
        <Route exact path='/' component={Cars} />
        <Route path='/car/:stockNumber' component={Car} />
        <Redirect from='/cars' to='/' />
        <Redirect from='/Cars' to='/' />
        <Route component={ErrorPage} />
    </Switch>
</div>