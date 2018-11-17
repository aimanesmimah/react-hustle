import C from './constants';


// Favourite cars reducers
export const FavCars= (state=[],action)=>{
    switch (action.type) {
        case C.ADD_FAV :
            return [
                ...state,
                FavCar({},action)
            ]
        case C.REMOVE_FAV :
            return state.filter(car=> car.id !== action.id)
        default:
            return state
    }
}

export const FavCar= (state={},action)=>{
    switch (action.type) {
        case C.ADD_FAV :
            return {

            }
        default:
            return state
    }
}

// current car reducers
export const CurrentCar= (state={},action)=>{
    switch(action.type){
        case C.UPDATE_CURRENT_CAR:
            delete action.type
            return {
                ...action
            }
        default:
            return state
    }
}

// Currrent Pagination Page
export const CurrentPage= (state=Number(null),action)=>{
    return state
}