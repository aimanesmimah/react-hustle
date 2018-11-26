import styled, {css} from 'styled-components';
//import injectGlobal from 'styled-components'; injectGlobal is no more supported in styled components
import {createGlobalStyle} from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
    html{
        position: relative;
        min-height:100%
    }
    body {
        font-family: 'Roboto';
        text-align: center;
    }

    .undisplayed{
        display: none
    }
    
    .unvisible{
        visibility: hidden;
    }

    .float-right{
        float: right;
    }

    .float-left{
        float: left;
    }
`

const propertyMapper= (props,prop,defaultProperty)=> props.hasOwnProperty(prop)? (props)=> props[prop]: defaultProperty

export const Div= styled.div`
   margin: 0;
   padding: 0;
   border: none;
   background: none;
` 

export const CustomDiv= styled.div`

    &:hover{
        ${({hoverColor})=> hoverColor && css`background: ${hoverColor}` };
    }

   ${ props => {
       if(props && Object.keys(props).length){
            return css`
                margin: ${props=> propertyMapper(props,'margin','0')};
                padding: ${props=> propertyMapper(props,'padding','0') };
                border: ${props=> propertyMapper(props,'border','none') };
                background: ${props=> propertyMapper(props,'background','none')};
                width: ${props=> propertyMapper(props,'width','100%')};
                ${({height}) => height && css`height: ${height}` };
                box-shadow: ${props=> propertyMapper(props,'boxShadow','none') };
                cursor: ${props=> propertyMapper(props,'cursor','text')};
                position: ${props=> propertyMapper(props,'position','relative')};
                bottom: ${props=> propertyMapper(props,'bottom','auto')};
                top: ${props=> propertyMapper(props,'top','auto')};
                left: ${props=> propertyMapper(props,'left','auto')};
                right: ${props=> propertyMapper(props,'right','auto')};
                text-align: ${props=> propertyMapper(props,'textAlign','center')};
            `
       }
       else{
           return styled(Div)
       }
   }}
`

export const ScrollableDiv= styled(CustomDiv)`
    position : absolute;
    z-index: 99;
    overflow-y: auto;
    overflow-x:hidden;
    max-height: ${props=> props.maxHeight};
    box-shadow: 0 0 1px 1px ${colors.light_grey};

    ${({top}) => top && css`top: ${top}`  }
`

export const WrapperDiv= styled.div`
    position: relative;
    ${({space})=> space && css`margin: ${space} auto` };
`

export const FlexRow= styled(Div)`
    display: flex;
    flex-direction: row;
    ${props=> { 
        if(props && props.hasOwnProperty('align'))
         switch (props.align) {
            case 'content-center' :
                return css`justify-content: center;`
            case 'space-between' :
                return css`justify-content: space-between;`
            case 'space-around': 
                return css`justify-content: space-around`;
            default:
                return css`justify-content: flex-start` ;
         }
        else{
            return css`justify-content: flex-start`
        }
         
    }}

    ${(props)=> props.margin && css`margin: ${props.margin}`}
`

export const FlexColumn= styled(Div)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   ${({height})=> height && css`height: ${height}`}
`

