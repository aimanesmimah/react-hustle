import React from 'react';
import DropDown from './DropDown';
import {CustomDiv,Div,ScrollableDiv} from '../../../styledComponents/main';
import {colors} from '../../../styledComponents/colors';
import {Medium,BigRegular} from '../../../styledComponents/fonts';
import arrow from '../img/arrow.png';



class Select extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showDropDown: false,
            selectClicked: false,
            currentItem: this.props.currentValue
        }

        this.onSelectClick= this.onSelectClick.bind(this)
        this.onSuggestionClick= this.onSuggestionClick.bind(this)
    }

    componentWillMount(){
        //this.setState({currentItem: this.props.currentValue})
    }

    onSelectClick(e){
        e.preventDefault()
        this.setState({showDropDown: !this.state.showDropDown,selectClicked: true})
    }

    onSuggestionClick(e,item){ 
        e.preventDefault()
        // cancel state if currentItem === item
        this.setState({currentItem: item})
    }

    componentDidMount(){
        const self=this
        document.addEventListener('click',function(e){
            const {showDropDown,selectClicked}= self.state
            if(showDropDown && !selectClicked){
                self.setState({showDropDown: false})
            }
            else{
                self.setState({selectClicked: false})
            }
        })
    }

    componentWillUnmount(){
        document.removeEventListener('click')
    }

    render(){
        const {title,list}= this.props 
        const {showDropDown,currentItem}= this.state

        return (
            <CustomDiv margin={'12px auto'} width={'90%'} textAlign={'left'} >
                <BigRegular style={{marginBottom: '12px' }} >{title}</BigRegular>
                <CustomDiv onClick={this.onSelectClick} height={'20px'} cursor={'pointer'}
                            boxShadow={`0 0 1px 1px ${colors.light_grey}`}  padding={'12px 0'}>
                    <BigRegular className="float-left" style={{marginLeft: '12px'}}>{currentItem}</BigRegular>
                    <img className="float-right" src={arrow} alt="" style={{marginTop: '5px',marginRight: '12px'}}   />
                </CustomDiv>
                {
                    showDropDown ? <DropDown list={list} onSuggestionClick={this.onSuggestionClick} /> : ""
                }

            </CustomDiv> )
    }
}

export default Select



     