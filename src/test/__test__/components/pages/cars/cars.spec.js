import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount } from 'enzyme';
import {expect as chaiExpect} from 'chai';
import Cars from '../../../../../components/pages/cars';
import Paginate from '../../../../../components/pages/cars/pagination/Paginate';
import Navigation from '../../../../../components/pages/cars/pagination/Navigation';
import {CarBox, LoadingCarBox} from '../../../../../components/pages/cars/CarBox';
import {Wrapper,Store} from '../../../../contextProvider';
import { Medium } from '../../../../../styledComponents/fonts';
import { updateCurrentPage, updatePageCount, updatePageCars } from '../../../../../redux/actionCreators';

const CarsWrapped= Wrapper(Cars)

describe('Cars component',()=>{
    let div, context= {store: Store()} ;
    afterAll(()=>{
        ReactDOM.unmountComponentAtNode(div)
    })

    afterEach(()=>{
        context.store= Store()
    })

    it('renders without issue',()=>{
        div= document.createElement('div')
        ReactDOM.render(<CarsWrapped />, div)
    })

    it('paginate component',()=>{

        var wrapper= shallow(<Paginate />, {context})
    

        chaiExpect(wrapper.find(Navigation)).to.have.lengthOf(1)
        chaiExpect(wrapper.find(LoadingCarBox)).to.have.lengthOf(3)
    })

    it('navigation Medium items',()=>{
        const pageClick= jest.fn((e)=> console.log('page click'))
        
        var wrapper= shallow(<Navigation onPageClick={pageClick} />, {context})

        chaiExpect(wrapper.find(Medium)).to.have.lengthOf(5)

        var FirstMedium= wrapper.first().first().first()

        expect(FirstMedium.contains('first')).toBe(true)
        

        var LastMedium= wrapper.first().first().last()

        expect(LastMedium.contains('last')).toBe(true)


    })

    it('Navigation Medium trigger Click',()=>{
        const pageClick= jest.fn((item)=> console.log(item))

        context.store.dispatch(updateCurrentPage(2))
        context.store.dispatch(updatePageCount(10))

        var wrapper= shallow(<Navigation onPageClick={pageClick} />, {context})

        wrapper.find(Medium).first().prop('onClick')(new Event('click'),'first')

        expect(pageClick).toHaveBeenCalled()
        expect(pageClick).toHaveBeenCalledTimes(1)


    })

    it('Navigation medium props', ()=> {
        const pageClick= jest.fn((item)=> console.log(item))
        var wrapper= shallow(<Navigation onPageClick={pageClick} />, {context})

        expect(wrapper.find(Medium).first().prop('color')).toEqual('#EA7F28')
        expect(typeof wrapper.find(Medium).first().prop('style')).toEqual('object')
        expect(wrapper.find(Medium).first().prop('style') instanceof Object).toBe(true)
        
    })

    it('Paginate car box: rendering loading car box',()=>{
        var wrapper= shallow(<Paginate />, {context})

        chaiExpect(wrapper.find(LoadingCarBox)).to.have.lengthOf(3)
    })

    it('Paginate car box: rendering car boxes',()=> {

        let Cars= [{
            stockNumber: 32131, 
            fuelType: 'Petrol', 
            color: 'green', 
            manufacturerName: 'Mercedez', 
            modelName: 'chrysler',
            mileage : {
                number: 32131, 
                unit: 'km'
            }
        },{
            stockNumber: 32131, 
            fuelType: 'Petrol', 
            color: 'green', 
            manufacturerName: 'Mercedez', 
            modelName: 'chrysler',
            mileage : {
                number: 32131, 
                unit: 'km'
            }
        }]

        context.store.dispatch(updatePageCars(Cars))
        var wrapper= shallow(<Paginate />, {context})

        chaiExpect(wrapper.find(CarBox)).to.have.lengthOf(2)


    })

})