import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import AppTemplate from '../../AppTemplate';
import {CustomDiv} from '../../../styledComponents/main';
import {updateCurrentCar} from '../../../redux/actionCreators';
import { BigRegular, Huge, BigBold } from '../../../styledComponents/fonts';
import { AppButton } from '../../../styledComponents/controls';
import { colors } from '../../../styledComponents/colors';
import {addCarToFav,removeCarFromFav} from '../../../redux/actionCreators';

class CarIndex extends Component {
    constructor(props){
        super(props)
        this.onSaveClick= this.onSaveClick.bind(this)

        this.existInFavCars= false
    }

    componentWillMount(){
        const {match}= this.props
        const {store}= this.context
        const {CurrentPageCars}= store.getState()
        
        console.log('current page cars')
        console.log(CurrentPageCars)
        var car= CurrentPageCars.find(item=> item.stockNumber === parseInt(match.params.stockNumber) )
        store.dispatch(updateCurrentCar(car || {}))
    }

    onSaveClick(e,action){
        e.preventDefault()
        const {store}= this.context
        const {CurrentCar}= store.getState()
        
        if(action === 'save')
            store.dispatch(addCarToFav(CurrentCar.stockNumber))
        else 
            store.dispatch(removeCarFromFav(CurrentCar.stockNumber))
    }

    render() {
        const {CurrentCar,FavCars} = this.context.store.getState()
        this.existInFavCars= FavCars.includes(CurrentCar.stockNumber)
        
        return (
            CurrentCar.stockNumber ?
                <AppTemplate>
                    <CustomDiv width={'80%'} margin={'200px auto'} >
                        <CustomDiv className="float-left" width={'60%'} textAlign={'left'} >
                            <Huge color={colors.dark_grey} >{CurrentCar.manufacturerName} {CurrentCar.modelName}</Huge>
                            <BigBold color={colors.dark_grey} style={{marginTop: '24px'}} >
                                Stock # {CurrentCar.stockNumber} - {CurrentCar.mileage.number} {CurrentCar.mileage.unit.toUpperCase()} - 
                                {CurrentCar.fuelType} - {CurrentCar.color}
                            </BigBold> 
                            <BigRegular style={{marginTop: '24px' }} >
                                    This car is currently available and can be delivered as soon as tomorrow morning. 
                                    Please be aware that delivery times shown in this page are not definitive and may 
                                    change due to bad weather conditions.
                            </BigRegular>
                        </CustomDiv>
                        <CustomDiv className="float-right" width={'30%'} margin={'24px'} padding={'24px'} textAlign={'left'} boxShadow={`0 0 1px 1px ${colors.light_grey}`} >
                            {
                                this.existInFavCars ?
                                    <BigRegular>This car is included in your list of favourites, click to remove</BigRegular> :
                                        <BigRegular>If you like this car, click the button and save it in your collection of favourite items.</BigRegular>
                            }
                            <CustomDiv height={'32px'}>
                                {
                                    this.existInFavCars ?
                                            <AppButton className="float-right" onClick={(e)=>this.onSaveClick(e,'remove')} >Remove</AppButton> :
                                                <AppButton className="float-right" onClick={(e)=>this.onSaveClick(e,'save')} >Save</AppButton> 
                                }
                            </CustomDiv>
                        </CustomDiv>
                    </CustomDiv>
                </AppTemplate> : <Redirect to='/' />
        );
    }
}

CarIndex.contextTypes= {
    store : PropTypes.object
}


export default CarIndex;