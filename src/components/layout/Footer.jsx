import React from 'react';
import {CustomDiv} from '../../styledComponents/main';
import {BigBold} from '../../styledComponents/fonts';
import {colors} from '../../styledComponents/colors';

export default ()=> 
    <CustomDiv height={'80px'} width={'100%'} 
                boxShadow={`0 -1px 3px ${colors.light_grey}`} position={'absolute'} bottom={'0'}  >
        <CustomDiv margin={'24px auto'} > <BigBold color={colors.dark_grey} >© AUTO1 Group 2018</BigBold> </CustomDiv>
    </CustomDiv>