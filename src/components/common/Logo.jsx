import React from 'react'
import logo from './logo.png';
import {Div, CustomDiv} from '../../styledComponents/main';


export default React.memo((props)=>{
    const imageStyle= {
        width: '165px',
        height: '35px'
    }
    return(
        <CustomDiv margin={'24px 0 0 24px'}>
            <img src={logo} alt="" style={imageStyle} />
        </CustomDiv>)
})