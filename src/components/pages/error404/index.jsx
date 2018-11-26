import React from 'react';
import AppTemplate from '../../AppTemplate';
import {WrapperDiv} from '../../../styledComponents/main';
import {Huge, BigRegular, BigRegularSpan} from '../../../styledComponents/fonts';
import logo from '../../common/img/logo.png';
import { colors } from '../../../styledComponents/colors';


export default ()=> (
    <AppTemplate>
        <WrapperDiv space={'200px'}  >
            <img src={logo} alt=""  />
            <Huge color={colors.dark_grey} style={{marginTop: '24px' }} >404 - Not Found</Huge>
            <BigRegular style={{marginTop: '24px' }}>Sorry, the page you are looking for does not exist.</BigRegular>
            <BigRegular>You can always go back to the <a href={`#/`} style={{textDecoration: 'none'}}><BigRegularSpan color={colors.light_orange}>homepage</BigRegularSpan></a> </BigRegular>
        </WrapperDiv>
    </AppTemplate>
)