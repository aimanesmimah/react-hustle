import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CustomDiv,FlexRow } from '../../../../styledComponents/main';
import {Small,Medium} from '../../../../styledComponents/fonts';
import { colors } from '../../../../styledComponents/colors';

class Navigation extends Component {
    constructor(props){
        super(props)

        this.items=['first','previous','','next','last']
        this.itemsPerPage= 10
        this.pageCount= 0


        this.onClick= this.onClick.bind(this);
        this.getPageCount= this.getPageCount.bind(this)
    }

    onClick(e,item){
        e.preventDefault()
        const {CurrentPage,CarsLength}= this.context.store.getState()
        const {onPageClick}= this.props
        
        this.pageCount= this.getPageCount(CarsLength)
        switch (item) {
            case 'first' :
                if(CurrentPage > 1)
                    onPageClick(1)
                break;
            case 'previous' : 
                if(CurrentPage > 1)
                    onPageClick(CurrentPage - 1)
                break
            case 'next' : 
                if(CurrentPage < this.pageCount)
                    onPageClick(CurrentPage + 1)
                break
            case 'last' :
                if(CurrentPage < this.pageCount)
                    onPageClick(this.pageCount)
                break
            default:
                break;
        }
    }

    getPageCount(CarsLength){
        var pages= CarsLength/ this.itemsPerPage
        if(parseInt(pages) === pages)
           return pages
        else 
           return pages+1
    }





    
    render() {
        const {CurrentPage, CarsLength}= this.context.store.getState()
        this.pageCount= this.getPageCount(CarsLength)

        return (
            <CustomDiv margin={'24px auto'} width={'max-content'} >
                <FlexRow>
                    {
                        this.items.map((item,i)=> {
                            if(i === 2){
                                return <Medium key={i} color={colors.dark_grey} style={{marginRight: '24px'}} >Page {CurrentPage} of {this.pageCount}</Medium> 
                            }

                            return <Medium key={i} style={{cursor: 'pointer',marginRight: i !== 4 ? '24px': '0'}}  onClick={(e)=> this.onClick(e,item)}  >{item}</Medium>
                        })
                    }
                </FlexRow>
            </CustomDiv>
        );
    }
}

Navigation.contextTypes = {
    store : PropTypes.object
}

export default Navigation;