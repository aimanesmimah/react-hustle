import styled, {css} from 'styled-components';
//import injectGlobal from 'styled-components'; injectGlobal is no more supported in styled components
import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
   ${ props => {
       if(props && Object.keys(props).length){
            return css`
                margin: ${props=> propertyMapper(props,'margin','0')};
                padding: ${props=> propertyMapper(props,'padding','0') };
                border: ${props=> propertyMapper(props,'border','none') };
                background: ${props=> propertyMapper(props,'background','none')};
                width: ${props=> propertyMapper(props,'width','max-content')};
                height: ${props=> propertyMapper(props,'height','initial')};
                cursor: ${props=> propertyMapper(props,'cursor','text')};
            `
       }
       else{
           return styled(Div)
       }
   }}
`

export const ScrollableDiv= styled(CustomDiv)`
    overflow-y: auto;
    max-height: ${props=> props.maxHeight};
`

export const flexRow= styled(Div)`
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
`

export const flexColumn= styled(Div)`
   display: flex;
   flex-direction: column;
`

