import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CarBox,LoadingCarBox} from '../CarBox';
import Navigation from './Navigation';
import {Div} from '../../../../styledComponents/main';
import {getCars} from '../../../../utils/helpers';
import {updateCurrentPage,updatePageCount,updatePageCars} from '../../../../redux/actionCreators';

class Paginate extends Component {
    constructor(props){
        super(props)
        this.state={
            loading: false,
            loadingError: false
        }

        this.onPageClick= this.onPageClick.bind(this)
    }

    componentWillMount(){
        const {store}= this.context
        const {CurrentPageCars}= store.getState()

        if(!CurrentPageCars.length){
            this.setState({loading: true})
            getCars().then(res=>{
                store.dispatch(updateCurrentPage(1))
                store.dispatch(updatePageCount(res.totalPageCount))
                store.dispatch(updatePageCars(res.cars))
                this.setState({loading: false})
            })
            .catch(err=>{
                    this.setState({loading:false, loadingError:true})
            })
        }
    }

    onPageClick(requestedPage){
        const {store}= this.context
        const {FilterByManufacturer, FilterByColor, Sort}= store.getState()

        this.setState({loading: true})
        getCars(requestedPage,FilterByManufacturer,FilterByColor,Sort).then(res=>{
            this.setState({loading: false})
            store.dispatch(updateCurrentPage(requestedPage))
            store.dispatch(updatePageCars(res.cars))
        })
        .catch(err=>{
            this.setState({loading: false, loadingError: true})  
        })
    }


    render() {
        const {loading}= this.state
        const {CurrentPageCars}= this.context.store.getState()
 
        return (
            <Div style={{marginRight: '24px'}}>
                {
                    loading || !CurrentPageCars.length ? 
                        new Array(1,2,3).map((item,index)=> <LoadingCarBox key={index} /> ):
                            CurrentPageCars.map((item,index)=> <CarBox key={index}  {...item} /> ) 
                }
                <Navigation onPageClick={this.onPageClick}  />
            </Div>
        );
    }
}

Paginate.contextTypes = {
    store : PropTypes.object
}

export default Paginate;