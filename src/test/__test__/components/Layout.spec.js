import React from 'react';
import ReactDOM from 'react-dom';
import {expect as chaiExpect} from 'chai';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';
import AppTemplate from '../../../components/AppTemplate';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {Menu,MenuItem} from '../../../components/layout/Header';
import {Div} from '../../../styledComponents/main';
import {BigBold} from '../../../styledComponents/fonts';
import {Store, Wrapper} from '../../contextProvider';

// redux context
var context= {store: Store() }

// wrapping components into AppTemplate and Header
var AppTemplateComp= Wrapper(AppTemplate)
var HeaderComp= Wrapper(Header)

describe('Layout',()=>{

    it('renders without crashing',()=>{
        let div= document.createElement('div')
        ReactDOM.render(<AppTemplateComp />, div )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('Header rendering',()=>{
        let div= document.createElement('div')
        ReactDOM.render(<HeaderComp />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('Header content',()=>{
        var header= shallow(<Header /> )
        
        
        console.log(header)
        expect(header).toBeDefined()

        expect(header.contains(<Menu />)).toBe(true)
        chaiExpect(header.find('.float-right')).to.have.lengthOf(1)
    })

    it('Menu renders three <MenuItem /> components',()=>{
        const menu= shallow(<Menu />,{context}) 
        expect(menu.find).toBeDefined()
        chaiExpect(menu.find(MenuItem)).to.have.lengthOf(3)
    })

    it('Footer rendering',()=>{

        var component= shallow(<Footer />)
        expect(component.contains('© AUTO1 Group 2018')).toBe(true)
    })

    it('AppTemplate component rendering',()=>{
        var appTemplate= shallow(<AppTemplate/>)
        

        expect(appTemplate.contains(<Footer />)).toBe(true)
        expect(appTemplate.contains(<Header />)).toBe(true)
    })

    it('<MenuItem /> props',()=>{
        var menuItem= mount(<MenuItem item="my orders" />)

        expect(menuItem.props().item).toEqual('my orders')
        menuItem.setProps({item: 'purchase'})
        expect(menuItem.props().item).toEqual('purchase')
    })
})