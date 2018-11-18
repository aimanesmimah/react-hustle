import React from 'react';
import {ScrollableDiv,FlexColumn, CustomDiv} from '../../../styledComponents/main';
import './dropDown.css'
import { colors } from '../../../styledComponents/colors';
import { BigRegular } from '../../../styledComponents/fonts';



export default ({list,onSuggestionClick}) => (
    <ScrollableDiv className="scrollable-style" maxHeight={'250px'} background={'white'} top={'100px'}  >
        <FlexColumn>
            {
                list.map((item,i)=> 
                        <CustomDiv  key={i} onClick={(e)=> onSuggestionClick(e,item) } 
                                            height={"32px"} padding={'12px'} 
                                            boxShadow={`0 0 0.5px 0.5px ${colors.light_grey}`} 
                                            cursor={'pointer'} hoverColor={colors.light_orange} >
                            <BigRegular>{item}</BigRegular>
                        </CustomDiv>)
            }
        </FlexColumn>
    </ScrollableDiv>
)