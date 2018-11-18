import C from './constants';


export const addCarToFav = (car)=>
({
    type: C.ADD_FAV,
    ...car
})

export const removeCarFromFav= (id)=>
({
    type: C.REMOVE_FAV,
    id
})

export const updateCarsLength= (length)=>
({
    type: C.UPDATE_CURRENT_CAR,
    length
})