import React, { Component } from 'react';
import PropTypes from 'prop-types';
import storeFactory from './redux/store';


// for passing store to app components by context 
class StoreContext extends Component {
    constructor(props){
        super(props);
        this.store= storeFactory()
        this.style= {margin:0,padding:0}
    }

    getChildContext(){
        return {
          store: this.store
        }
    }

    componentWillMount(){
        this.unsubscribe = this.store.subscribe(
        () => {
            console.log('hellllllooooo')
            console.log('updaaatee store')
            this.forceUpdate()
            var {FavCars}= this.store.getState()
            console.log(FavCars)
            var obj= {FavCars}
            localStorage['auto1-fav-cars'] = JSON.stringify(obj);
        })
    }
    
    componentWillUnmount(){
        this.unsubscribe()
    }     

    render() {
        return (
            <div style={this.style} >
                {this.props.children}
            </div>
        );
    }
}

/*StoreContext.propTypes = {
    store : PropTypes.object.isRequired
  }*/
  
StoreContext.childContextTypes = {
    store : PropTypes.object.isRequired
}

export default StoreContext;