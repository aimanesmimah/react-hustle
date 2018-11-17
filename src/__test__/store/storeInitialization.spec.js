import createStore from '../../redux/store';


describe('store initialization & creation',()=>{
      let store;
      beforeAll(function(){
          store= createStore()
      })

      afterAll(function(){
          console.log('FINISH SUITE: store initialization & creation')
      })


      it('store properties',function(){
          expect(store).not.toBeNull()
          expect(store).toBeDefined()
          expect(store.hasOwnProperty('dispatch')).toBeTruthy()
          expect(store.hasOwnProperty('getState')).toBeTruthy()
          expect(typeof store.getState).toBe('function')
          expect(typeof store.dispatch).toBe('function')
      })

      it('store get state',function(){
          var state = store.getState()

          expect(Object.keys(state).length).toEqual(3)

          expect(state.hasOwnProperty('FavCars')).toBeTruthy()
          expect(typeof state.FavCars).toBe('object')
          expect(state.FavCars.constructor.name).toBe('Array')

          expect(state.hasOwnProperty('CurrentPage')).toBeTruthy()
          expect(state.CurrentPage).toEqual(0)

          expect(state.hasOwnProperty('FavouriteCars')).toBeFalsy()
      })
})