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
            return state.filter(current=> current !== action.id)
        default:
            return state
    }
}

export const FavCar= (state={},action)=>{
    switch (action.type) {
        case C.ADD_FAV :
            return action.id
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
    switch (action.type) {
        case C.UPDATE_CURRENT_PAGE :
            return action.current 
        default:
            return state
    }
}

// Navigation Menu
export const NavMenu= (state=[],action)=>{
    return state
}

// Cars length 
export const PageCount= (state=Number(null),action)=>{
    switch (action.type) {
        case C.UPDATE_PAGE_COUNT  :
            return action.length
        default:
            return state
    }
}


// Filter By manufacturer
export const FilterByManufacturer= (state='',action)=>{
    switch (action.type) {
        case C.FILTER_BY_MANUFACTURER :
            return action.manufacturer 
        default:
            return state
    }
}

// Filter By color 
export const FilterByColor= (state='',action)=>{
    switch (action.type) {
        case C.FILTER_BY_COLOR:
            return action.color 
        default:
            return state
    }
}

// Page cars reducer
export const CurrentPageCars= (state=[],action)=>{
    switch (action.type) {
        case C.UPDATE_PAGE_CARS  :
            return action.cars 
        default:
            return state
    }
}

// Sorting ASC/ DESC
export const Sort= (state='none',action)=>{
    switch (action.type) {
        case C.UPDATE_SORT :
            return action.sort
        default:
            return state
    }
}