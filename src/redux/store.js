import { createStore, combineReducers, applyMiddleware } from 'redux';
import { FavCars,CurrentCar, CurrentPage} from './reducers';


const initialState = {
    FavCars: [],
    CurrentCar: null,
    CurrentPage: 0
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
            combineReducers({FavCars, CurrentCar, CurrentPage }),
            (localStorage['auto1-fav-cars'])?JSON.parse(localStorage['auto1-fav-cars']):initialState
        )
}