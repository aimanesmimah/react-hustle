import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import StoreContext from '../../../StoreContext';


describe('store context component',()=>{
    
    let div;
    beforeEach(()=>{
        div = document.createElement('div');
    })

    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(div);
    })

    it('render without crashing',()=>{
        ReactDOM.render(<StoreContext />, div);
    })

    it('passing store to pure component mock child',function(){

        const MockChild= (props,{store}) => <div>{store.getState().CurrentPage}</div>
        MockChild.contextTypes = {
            store : PropTypes.object
        }

        ReactDOM.render(<StoreContext > <MockChild /> </StoreContext>,div)
    })

    it('passing store to class component mock child',function(){

        class MockChild extends React.Component{
            constructor(props){
                super(props)
            }

            render(){
                const {CurrentPage}= this.context.store.getState()
                return (
                    <div>Current page is: {CurrentPage}</div>
                )
            }
        }

        MockChild.contextTypes = {
            store : PropTypes.object
        }

        ReactDOM.render(<StoreContext > <MockChild /> </StoreContext>,div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it('passing store to a deeply nested component',function(){
        const MockChildOne= ()=> <div><MockChildTwo /></div>
        const MockChildTwo= ()=> <div><MockChildThree /></div>

        class MockChildThree extends React.Component {
            componentWillMount(){
                const {store}= this.context
                const {CurrentPage}= store.getState()
                console.log(CurrentPage)
            }

            render(){
                const {CurrentPage}= this.context.store.getState()
                return (
                    <div>{CurrentPage.toString()}</div>
                )
            }
        }

        MockChildThree.contextTypes = {
            store : PropTypes.object
        }

        ReactDOM.render(<StoreContext > <MockChildOne /> </StoreContext>,div)
    })
})