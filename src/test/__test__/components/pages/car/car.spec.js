import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import {Redirect} from 'react-router-dom';
import Car from '../../../../../components/pages/car'; 
import {Wrapper,Store} from '../../../../contextProvider';
import {updateCurrentCar,updatePageCars} from '../../../../../redux/actionCreators';
import {BigRegular} from '../../../../../styledComponents/fonts';
import {AppButton} from '../../../../../styledComponents/controls';


describe('Car component',()=>{
    let context, store= Store()

    let CurrentCar= {
        stockNumber: 32131, 
        fuelType: 'Petrol', 
        color: 'green', 
        manufacturerName: 'Mercedez', 
        modelName: 'chrysler',
        mileage : {
            number: 32131, 
            unit: 'km'
        }
    }
    beforeAll(()=>{
        context= {store}
        store.dispatch(updateCurrentCar(CurrentCar))
        store.dispatch(updatePageCars([CurrentCar]))
    })

    it('rendering without problems',()=>{
        var params= {stockNumber: 32131}
        const wrapper= shallow(<Car match={{params}} /> , {context} )

        chaiExpect(wrapper.find('.float-right')).to.have.lengthOf(2)
        expect(wrapper.contains(<BigRegular style={{marginTop: '24px' }} >
                            This car is currently available and can be delivered as soon as tomorrow morning. 
                            Please be aware that delivery times shown in this page are not definitive and may 
                            change due to bad weather conditions.
                    </BigRegular>)).toBe(true)

        chaiExpect(wrapper.find(AppButton)).to.have.lengthOf(1)
    })

    it('rendering without problem while passing param different of Current car stockNumber',()=>{
          var params= {stockNumber: 434343}
          const wrapper= shallow(<Car match={{params}} />,{context})

          chaiExpect(wrapper.find(Redirect)).to.have.lengthOf(1)
          expect(wrapper.contains(<Redirect to="/" />))
    })


    it('trigering onSave button ==> FavCars length === 1 ',()=>{
        var params= {stockNumber: 32131}
        const wrapper= shallow(<Car match={{params}} /> , {context} )
        
        wrapper.find(AppButton).prop('onClick')(new Event('click'))

        var {FavCars}= context.store.getState()
        expect(FavCars.length).toBe(1)  

    })

    it('trigering onRemove button ==>  FavCars length === 0',()=>{
        var params= {stockNumber: 32131}
        const wrapper= shallow(<Car match={{params}} /> , {context} )
        
        wrapper.find(AppButton).prop('onClick')(new Event('click'))

        var {FavCars}= context.store.getState()
        expect(FavCars.length).toBe(0)  
    })

    it('trigering onSave button ==>  FavCars length === 1',()=>{
        var params= {stockNumber: 32131}
        const wrapper= shallow(<Car match={{params}} /> , {context} )
        
        wrapper.find(AppButton).prop('onClick')(new Event('click'))

        var {FavCars}= context.store.getState()
        expect(FavCars.includes(32131)).toBeTruthy()
    })
})