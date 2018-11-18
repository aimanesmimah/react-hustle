import styled from 'styled-components';
import {colors} from './colors';



export const AppButton= styled.button`
    border: none;
    background: ${colors.light_grey};
    width: 128px;
    height: 32px;
    color: ${colors.white}

    &:focus{
        background: ${colors.dark_orange};
    }
`

export const AppAnchor= styled.a`
   border: none;
   backgound: none;
   color: ${colors.light_orange};

   &:hover{
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