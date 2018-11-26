import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './DropDown';
import {FilterSortContextConsumer} from '../../pages/cars/FilterSortContext';
import {CustomDiv} from '../../../styledComponents/main';
import {colors} from '../../../styledComponents/colors';
import {BigRegular} from '../../../styledComponents/fonts';
import arrow from '../img/arrow.png';



class Select extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showDropDown: false,
            selectClicked: false
        }

        this.onSelectClick= this.onSelectClick.bind(this)
        this.handleDocumentClick= this.handleDocumentClick.bind(this)
    }

    onSelectClick(e){
        e.preventDefault()
        this.setState({showDropDown: !this.state.showDropDown,selectClicked: true})
    }

    handleDocumentClick(e){
        const {showDropDown,selectClicked}= this.state
        if(showDropDown && !selectClicked){
            this.setState({showDropDown: false})
        }
        else{
            this.setState({selectClicked: false})
        }
    }

    componentDidMount(){
        document.addEventListener('click',this.handleDocumentClick)
    }

    componentWillUnmount(){
        document.removeEventListener('click',this.handleDocumentClick)
    }

    render(){
        const {title,noMarginTop}= this.props 
        const {showDropDown}= this.state

        return (
            <FilterSortContextConsumer>
                {
                    ({currentManufacturer,currentColor,currentSort})=> (
                        <CustomDiv margin={ noMarginTop ? '0 auto' : '12px auto'} textAlign={'left'} >
                            <BigRegular style={{marginBottom: '12px' }} >{title}</BigRegular>
                            <CustomDiv onClick={this.onSelectClick} height={'20px'} cursor={'pointer'}
                                        boxShadow={`0 0 1px 1px ${colors.light_grey}`}  padding={'12px 0'}>
                                <BigRegular className="float-left" style={{marginLeft: '12px'}}>{title === 'Sort by' ? currentSort : title === 'Color' ? currentColor: currentManufacturer } </BigRegular>
                                <img className="float-right" src={arrow} alt="" style={{marginTop: '5px',marginRight: '12px'}}   />
                            </CustomDiv>
                            {
                                !showDropDown ? "" :  <DropDown type={title} /> 
                            }

                        </CustomDiv> 
                    )
                }
            </FilterSortContextConsumer> )
    }
}

Select.contextTypes = {
    store : PropTypes.object
}

export default Select



     