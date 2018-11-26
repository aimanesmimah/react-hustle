import React from 'react';
import {FilterSortContextConsumer} from '../../pages/cars/FilterSortContext';
import {ScrollableDiv,FlexColumn, CustomDiv} from '../../../styledComponents/main';
import './dropDown.css'
import { colors as colours } from '../../../styledComponents/colors';
import { BigRegular } from '../../../styledComponents/fonts';



export default ({type}) => (
    <FilterSortContextConsumer>
           { 
               ({manufacturers,colors,sortList,onChangeItem,onSort})=> {
                   var dropDownItems= type === 'Sort by' ? sortList  : type === 'Color' ? colors: manufacturers 
                   return (
                    <ScrollableDiv className="scrollable-style" maxHeight={'250px'} background={'white'} top={'100px'}  >
                        <FlexColumn>
                            {
                                dropDownItems.map((item,i)=> 
                                        <CustomDiv  key={i} onClick={(e)=> type === 'Sort by' ? onSort(e,item) :  onChangeItem(e,type,item) } 
                                                            height={"32px"} padding={'12px'} textAlign={'left'}
                                                            boxShadow={`0 0 0.5px 0.5px ${colours.light_grey}`} 
                                                            cursor={'pointer'} hoverColor={colours.light_orange} >
                                            <BigRegular>{item}</BigRegular>
                                        </CustomDiv>)
                            }
                        </FlexColumn>
                    </ScrollableDiv> )
               }
           }
    </FilterSortContextConsumer>
)