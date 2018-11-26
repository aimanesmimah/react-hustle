import styled from 'styled-components';
import {colors} from './colors';



export const AppButton= styled.button`
    border: none;
    background: ${colors.light_orange};
    width: 128px;
    height: 32px;
    font-size: 18px;
    cursor: pointer;
    color: ${colors.white};

    &:focus{
        background: ${colors.dark_orange};
    }
`

export const AppAnchor= styled.a`
   border: none;
   backgound: none;
   color: ${colors.light_orange};
   text-decoration: none;

   &:hover{
       cursor: pointer;
       text-decoration: underline;
       color: ${colors.dark_orange};
   }
`

export const DefaultAnchor= styled.a`
   margin:0;
   padding:0;
   border: none;
   background: none;
   text-decoration: none;
   color: none;
`