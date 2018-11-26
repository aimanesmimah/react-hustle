import React  from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import Select from '../../../../components/common/select/Select';
import DropDown from '../../../../components/common/select/DropDown';
import {BigRegular} from '../../../../styledComponents/fonts';
import {Wrapper, Store} from '../../../contextProvider';

const SelectWrapped= Wrapper(Select)
const DropDownWrapped= Wrapper(DropDown)

describe('Select control Component',()=>{
    let div, context= {store: Store()}

    afterAll(()=>{
         ReactDOM.unmountComponentAtNode(div)
    })


    it('renders without problem',()=>{
        let div= document.createElement('div')
        ReactDOM.render(<SelectWrapped />,div) 
    })


    it('dropdown renders without problem',()=>{
        const wrapper= mount(<DropDown type="Color" />)

        expect(wrapper.props().type).toEqual('Color')

        // green is the value with whom we initialized filterSort context
        expect(wrapper.contains(<BigRegular>green</BigRegular>)).toBe(true)

        
    })


})