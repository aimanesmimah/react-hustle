import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';


describe('App component: Component tree root',()=>{
    let div;
    beforeEach(()=>{
        div= document.createElement('div')
    })

    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders without crashing',()=>{
          ReactDOM.render(<App />, div )
    })
})