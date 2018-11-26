import { createStore, combineReducers, applyMiddleware } from 'redux';
import {NavMenu, FavCars,CurrentCar, CurrentPage, PageCount, FilterByManufacturer, FilterByColor, Sort, CurrentPageCars} from './reducers';


const initialState = {
    NavMenu: ['Purchase','My Orders','Sell'],
    FavCars: [],
    CurrentCar: null,
    CurrentPage: 0,
    PageCount: 0,
    FilterByManufacturer: 'all',
    FilterByColor: 'all',
    Sort: "none",
    CurrentPageCars: []
}

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
}


export default () => {
        return applyMiddleware(logger)(createStore)(
            combineReducers({NavMenu, FavCars, CurrentCar, CurrentPage, PageCount, FilterByManufacturer, FilterByColor, Sort, CurrentPageCars }),
            localStorage['auto1-fav-cars'] ? {...initialState, FavCars: JSON.parse( localStorage['auto1-fav-cars']).FavCars } :  initialState
        )
}