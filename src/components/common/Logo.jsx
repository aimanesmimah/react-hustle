import React from 'react'
import logo from './img/logo.png';
import {CustomDiv} from '../../styledComponents/main';


export default React.memo((props)=>{
    const imageStyle= {
        width: '165px',
        height: '35px'
    }

    const anchorStyle={
        margin:0,
        padding:0
    }
    
    return(
        <CustomDiv margin={'24px 0 0 24px'}>
            <a href="#/" style={anchorStyle} ><img src={logo} alt="" style={imageStyle} /></a>
        </CustomDiv>)
})