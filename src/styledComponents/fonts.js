import styled,{css} from 'styled-components';
import {colors} from './colors';

const Normalized= styled.p`
    margin:0;
    padding:0;
`

export const Huge= styled(Normalized)`
   font-size: 32px;
   font-weight: bolder;

   ${({color})=> {
        if(color) return css`color: ${color}`
        else return css`color: ${colors.light_grey}`
    }}
`

export const BigBold= styled(Normalized)`
   font-size: 18px;
   font-weight: bold;

   ${({color})=> {
        if(color) return css`color: ${color}`
        else return css`color: ${colors.light_grey}`
    }}
`

export const BigRegular= styled(Normalized)`
    font-size: 18px;
    font-weight: 500;

    ${({color})=> {
        if(color) return css`color: ${color}`
        else return css`color: ${colors.light_grey}`
    }}
`

export const BigRegularSpan= styled.span`
    font-size: 18px;
    font-weight: 500;
`

export const Medium= styled(Normalized)`
    font-size: 14px;
    font-weight: normal;    

    ${({color})=> {
        if(color) return css`color: ${color}`
        else return css`color: ${colors.light_grey}`
    }}
`

export const Small= styled(Normalized)`
    font-size: 12px;
    font-weight: normal;

    ${({color})=> {
        if(color) return css`color: ${color}`
        else return css`color: ${colors.light_grey}`
    }}
`