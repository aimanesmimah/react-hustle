import React from 'react';
import {CustomDiv,FlexRow,FlexColumn} from '../../../styledComponents/main';
import {colors} from '../../../styledComponents/colors';
import {BigBold,Medium} from '../../../styledComponents/fonts';
import {AppAnchor} from '../../../styledComponents/controls';


const Thumbnail= ({src})=> (
    <CustomDiv width={'90px'} height={'78px'} background={colors.light_grey} >
        {
            src ? <img src={src} alt="" style={{width: '90px', height: '78px'}} />: ""
        }
    </CustomDiv>
)

const Content= (props)=> (
    <CustomDiv height={'78px'} margin={'0 0 0 24px'} textAlign={'left'} >
        <FlexColumn height={'78px'} >
            <BigBold color={colors.dark_grey}>{props.manufacturerName}</BigBold>
            <Medium color={colors.dark_grey} >Stock # {props.stockNumber} - {props.mileage.number} {props.mileage.unit} - {props.fuelType} - {props.color}</Medium>
            <Medium>
                <AppAnchor >View details</AppAnchor>
            </Medium>
        </FlexColumn>
    </CustomDiv>
)

const EmptyContent= ()=> (
    <CustomDiv height={'78px'} margin={'0 0 0 24px'} >
        <CustomDiv height={'26px'} width={'200px'} background={colors.light_grey} margin={'0 0 8px 0'} ></CustomDiv>
        <CustomDiv height={'16px'} width={'200px'} background={colors.light_grey} margin={'0 0 12px 0'} ></CustomDiv>
        <CustomDiv height={'16px'} width={'50px'} background={colors.light_grey} ></CustomDiv>
    </CustomDiv>
)

const Box = (props)=> (
    <CustomDiv width={'95%'} boxShadow={`0 0 1px 1px ${colors.light_grey}`} padding={'12px'} margin={'0 0 12px 0'} height={'90px'} >
        <FlexRow>{ props.children }</FlexRow>
    </CustomDiv>
) 

export const CarBox= React.memo( (props) =>
    <Box>
       <Thumbnail />
       <Content {...props} />
    </Box>
)


export const LoadingCarBox= ()=> 
    <Box>
        <Thumbnail />
        <EmptyContent />
    </Box>