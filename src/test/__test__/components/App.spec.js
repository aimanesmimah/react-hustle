import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import App from '../../../App';
import AppMock from '../../__mocks__/reactRouter';
import {MemoryRouter} from 'react-router';
import {Wrapper} from '../../contextProvider';

const Component = Wrapper(App)


describe('App component: Component tree root',()=>{
    
    let div;
    beforeAll(()=>{
        div= document.createElement('div')
    })

    afterAll(()=>{
        ReactDOM.unmountComponentAtNode(div)
    })


    it('renders without crashing',()=>{
        ReactDOM.render( <Component /> , div )
    })



    it('React router: renders error page',()=>{
        const wrapper= mount(
            <MemoryRouter initialEntries={[ '/random' ]}>
                    <AppMock />
            </MemoryRouter>
        )

        expect(wrapper.contains('Error Page')).toBe(true)
    })

    it('React router: renders cars page',()=>{
        const wrapper= mount(
            <MemoryRouter initialEntries={[ '/cars' ]}>
                 <AppMock />
            </MemoryRouter>
       )

       expect(wrapper.contains('Cars Page')).toBe(true)

       const wrapper2= mount(
            <MemoryRouter initialEntries={[ '/Cars' ]}>
                <AppMock />
            </MemoryRouter>
        )

        expect(wrapper2.contains('Cars Page')).toBe(true)
    })

    it('React router: renders car page with stockNumber: 32434',()=>{
        const wrapper= mount(
            <MemoryRouter initialEntries={[ '/car/3333' ]}>
                 <AppMock />
            </MemoryRouter>
        )



        expect(wrapper.contains('3333')).toBe(true)
        expect(wrapper.contains('3332')).toBe(false)
    })
})