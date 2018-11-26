import createStore from '../../../redux/store';
import {addCarToFav,removeCarFromFav} from '../../../redux/actionCreators';


describe('store dispatching action creators',()=>{
    let store;
    beforeAll(()=>{
        store= createStore()
    })

    afterAll(()=>{
        console.log('FINISH SUITE: store dispatching action creators ')
    })


    it('ensure dispatch functionality',()=>{
        expect(store.dispatch).toBeDefined()
        expect(typeof store.dispatch).toBe('function')
    })

    it('state before dispatching',()=>{
        var {FavCars}= store.getState()

        expect(FavCars instanceof Array).toBeTruthy()
        expect(FavCars.length).toBe(0)
    })

    it('dispatch add Car to Fav',()=>{
        var car= {
            id: 23,
            title: 'Mercedez benz',
            color: 'Grey',
            model: '2006'
        }

        store.dispatch(addCarToFav(car.id))

        var {FavCars}= store.getState()

        expect(FavCars.length).toBeGreaterThan(0)
        expect(FavCars.length).toEqual(1)
        expect(typeof FavCars[0] === 'number').toBeTruthy()
    })

    it('dispatch remove car that doesn\'t exist',()=>{
        store.dispatch(removeCarFromFav(10))

        var {FavCars}= store.getState()

        expect(FavCars.length).toBe(1)
        expect(FavCars[0]).toBe(23)
    })

    it('dispatch remove Car from Fav',()=>{
        store.dispatch(removeCarFromFav(23))

        var {FavCars}= store.getState()
        
        expect(FavCars instanceof Array).toBeTruthy()
        expect(FavCars.length).toBe(0)
    })
})