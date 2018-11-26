import React from 'react';
import PropTypes from 'prop-types';
import {getCall} from '../../../utils/apiCalls';
import {getCars,getColors,getManufacturers} from '../../../utils/helpers';
import {filterByColor,filterByManufacturer,updatePageCars, updatePageCount, updateSorting, updateCurrentPage} from '../../../redux/actionCreators';

// initializing create context for unit tests purposes
const Context = React.createContext({currentManufacturer: 'All manufacturers',currentColor:  'All car colors' ,currentSort: 'None',colors: ['green'] })


export class FilterSortContextProvider extends React.Component {
    state= {
        currentSort: 'None',
        currentManufacturer: 'All manufacturers',
        currentColor: 'All car colors',
        sortList: [{id: 'none', displayText: 'None'},{id:'asc', displayText: 'Mileage - Ascending'},{id: 'des', displayText: 'Mileage - Descending' }],
        manufacturers: [],
        colors: [],
        loadingColors: false, 
        loadingManufacturers: false , 
        loadingError: false 
    }

    componentWillMount(){
        this.setState({loadingColors: true, loadingManufacturers: true})

        // loading colors items
        getColors().then(colors=>{
            this.setState({loadingColors: false, colors: ['All car colors'].concat(colors)  })
        })
        .then(err=>{
            this.setState({loadingError: true, loadingColors: false})
        })
        
        // loading manufacturers items
        getManufacturers().then(manufacturers=>{
            this.setState({loadingManufacturers: false, manufacturers: ['All manufacturers'].concat(manufacturers) })
        })
        .catch(err=>{
            this.setState({loadingError: true, loadingManufacturers: false})
        })
    }

    onSort= (e,newValue)=> {
        e.preventDefault()
        const {store}= this.context
        const {Sort,FilterByManufacturer,FilterByColor}= store.getState()
        
        var newSort= this.state.sortList.find(item=> item.displayText === newValue).id
        if(Sort !== newSort){
            this.setState({currentSort: newValue })
            getCars(1, FilterByManufacturer, FilterByColor, newSort).then(res=>{
                store.dispatch(updateSorting(newSort))
                store.dispatch(updatePageCars(res.cars))
                store.dispatch(updateCurrentPage(1))
            })
            .catch(err=>{
                alert(err)
            })
        }
    }

    onFilter= () => {
        const {currentColor,currentManufacturer}= this.state
        const {store}= this.context
        const {FilterByManufacturer,FilterByColor,Sort}= store.getState()

        if(FilterByColor !== currentColor || FilterByManufacturer !== currentManufacturer){

            // get Current cars
            const Manufacturer = currentManufacturer === 'All manufacturers' ? 'all' : currentManufacturer
            const Color= currentColor === 'All car colors' ? 'all' : currentColor
            getCars(1,Manufacturer,Color,Sort).then(res=>{
                    store.dispatch(filterByColor(Color))
                    store.dispatch(filterByManufacturer(Manufacturer))
                    store.dispatch(updatePageCars(res.cars))
                    store.dispatch(updatePageCount(res.totalPageCount))
                    store.dispatch(updateCurrentPage(1))
            })
            .catch(err=>{
                alert(err)
            })
        }

        
    }

    onChangeItem= (e,type,newItem) => {
        e.preventDefault()
        if(type === 'Manufacturer')
            this.setState({currentManufacturer: newItem})
        else 
            this.setState({currentColor: newItem})
    }

    render(){
        return (
            <Context.Provider value={{
                ...this.state,
                sortList: this.state.sortList.map(item=> item.displayText),
                onChangeItem: this.onChangeItem,
                onFilter: this.onFilter, 
                onSort: this.onSort
            }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

FilterSortContextProvider.contextTypes = {
    store : PropTypes.object
}

export const FilterSortContextConsumer= Context.Consumer