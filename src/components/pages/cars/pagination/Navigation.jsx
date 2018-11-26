import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CustomDiv,FlexRow } from '../../../../styledComponents/main';
import {Medium} from '../../../../styledComponents/fonts';
import { colors } from '../../../../styledComponents/colors';

class Navigation extends Component {
    constructor(props){
        super(props)
        this.items=['first','previous','','next','last']
        this.onClick= this.onClick.bind(this);
    }

    onClick(e,item){
        e.preventDefault()
        const {CurrentPage,PageCount}= this.context.store.getState()
        const {onPageClick}= this.props
        
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
                if(CurrentPage < PageCount)
                    onPageClick(CurrentPage + 1)
                break
            case 'last' :
                if(CurrentPage < PageCount)
                    onPageClick(PageCount)
                break
            default:
                break;
        }
    }
    
    render() {
        const {CurrentPage, PageCount }= this.context.store.getState()

        return (
            <CustomDiv margin={'24px auto'} width={'max-content'} >
                <FlexRow>
                    {
                        this.items.map((item,i)=> {
                            if(i === 2){
                                return <Medium key={i} color={colors.dark_grey} style={{marginRight: '24px'}} >Page {CurrentPage} of {PageCount}</Medium> 
                            }

                            return <Medium key={i} color={colors.light_orange} style={{cursor: 'pointer',marginRight: i !== 4 ? '24px': '0'}}  onClick={(e)=> this.onClick(e,item)}  >{item}</Medium>
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