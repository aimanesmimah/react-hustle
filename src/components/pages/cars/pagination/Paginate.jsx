import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CarBox,LoadingCarBox} from '../CarBox';
import Navigation from './Navigation';
import {Div} from '../../../../styledComponents/main';
import { getCall } from '../../../../utils/apiCalls';
import {updateCarsLength,updateCurrentPage} from '../../../../redux/actionCreators';

class Paginate extends Component {
    constructor(props){
        super(props)
        this.state={
            loading: false,
            loadingError: false,
            carsList: []
        }

        this.getCars= this.getCars.bind(this)
        this.onPageClick= this.onPageClick.bind(this)
    }

    componentWillMount(){
        const {store}= this.context
        this.getCars().then(done=>{
            store.dispatch(updateCurrentPage(1))
        })
        .catch(err=>{
           console.log('errorororororo')
        })
    }

    getCars(page,manufacturer,color,sort){
        this.setState({loading: true})

        if(!arguments.length){
            const {store}= this.context
            return new Promise((resolve,reject)=>{
                getCall('/cars').then(res=>{
                    console.log('call results: ')
                    console.log(res)
                    this.setState({loading: false,carsList: res.cars})
                    store.dispatch(updateCarsLength(res.totalPageCount))
                    resolve('done')
                })
                .catch(err=>{
                    this.setState({loading:false, loadingError:true})
                    reject('error')
                })
            })
        }
        else{
            let params=[]
            params= page ? params.concat([{name: 'page', value: page }]) : [] 
            params= manufacturer ? params.concat([{name: 'manufacturer', value: manufacturer}]) : []
            params= color ? params.concat([{name: 'color', value: color}]) : [] 
            params= sort ? params.concat([{name: 'color', value: sort}]): []
            getCall('/cars',params).then(res=>{
                console.log('second result')
                console.log(res)

                this.setState({loading: false,carsList: res.cars})
            })
            .catch(err=>{
                this.setState({loading: false, loadingError: true})
            })
        }
    }

    onPageClick(requestedPage){
        const {store}= this.context
        store.dispatch(updateCurrentPage(requestedPage))
        this.getCars(requestedPage)
    }


    render() {
        const {loading,carsList}= this.state
        return (
            <Div>
                {
                    loading || !carsList.length ? 
                        new Array(1,2,3).map((item,index)=> <LoadingCarBox key={index} /> ):
                            carsList.map((item,index)=> <CarBox key={index}  {...item} /> ) 
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