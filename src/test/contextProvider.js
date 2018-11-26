import React from 'react';
import createStore from '../redux/store'
import StoreContext from '../StoreContext';

export const Store= ()=> createStore()

export const Wrapper= (Component)=> 
class extends React.Component {
    render(){

        return (
            <StoreContext>
                <Component />
            </StoreContext>
        )
    }
}