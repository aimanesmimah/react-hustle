import C from './constants';


export const addCarToFav = (id)=>
({
    type: C.ADD_FAV,
    id
})

export const removeCarFromFav= (id)=>
({
    type: C.REMOVE_FAV,
    id
})

// set current car 
export const updateCurrentCar= item=>
({
    type: C.UPDATE_CURRENT_CAR, 
    ...item
})

export const updateCurrentPage= (current)=>
({
    type: C.UPDATE_CURRENT_PAGE,
    current
})

export const updatePageCount= (length)=>
({
    type: C.UPDATE_PAGE_COUNT,
    length
})

// filters
export const filterByManufacturer= (manufacturer)=>
({
    type: C.FILTER_BY_MANUFACTURER,
    manufacturer
})

export const filterByColor= (color)=>
({
    type: C.FILTER_BY_COLOR,
    color
})

// update current cars 
export const updatePageCars= cars=> 
({
    type: C.UPDATE_PAGE_CARS,
    cars
})

// sorting 
export const updateSorting= sort=> 
({
    type: C.UPDATE_SORT, 
    sort
})