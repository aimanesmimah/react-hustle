import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../common/Logo.jsx';
import {CustomDiv,Div,FlexRow} from '../../styledComponents/main';
import {BigBold} from '../../styledComponents/fonts';
//import {DefaultAnchor} from '../../styledComponents/controls';
import {colors} from '../../styledComponents/colors';

export default ()=> (
    <CustomDiv height={'80px'} width={'100%'} boxShadow={`0 1.3px 3px ${colors.light_grey}`} >
        <Div className="float-left">
            <Logo />
        </Div>
        <Div className="float-right" >
            <Menu />
        </Div>
    </CustomDiv>
)



const Menu = (props,{store})=>{
    const {NavMenu} = store.getState()
    
    const onItemClick= (e,item)=>{
        e.preventDefault()
        alert(item)
    }

    return (
    <FlexRow margin={'24px 0 0 0'}>
        {
            NavMenu.map((item,index)=> <MenuItem key={index} item={item} onItemClick={onItemClick} /> )
        }
    </FlexRow> )
}

const MenuItem= ({item,onItemClick})=> (
    <CustomDiv margin={'0 24px 0 0'} cursor={'pointer'} width={'max-content'} >
        <BigBold color={colors.dark_grey} onClick={(e)=> onItemClick(e,item)}>{item}</BigBold>
    </CustomDiv>
)

Menu.contextTypes = {
    store : PropTypes.object
}