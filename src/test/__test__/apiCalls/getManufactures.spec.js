//import {getManufacturers} from '../../utils/helpers';
import request from '../../request';

jest.mock('../../request.js')

const getManufacturers= ()=> request('/manufacturers')

describe('make call to backend api to get manufacturers list',()=>{
    it('get manufactures resolves',async ()=>{
            await expect(getManufacturers()).resolves.toBeTruthy()
    })


    it('get manufacturers call',()=>{
        expect.assertions(6);
        return getManufacturers()
        .then(res=>{
            try{
                var manufacturers= res.manufacturers.map(item=> item.name)
                expect(typeof manufacturers).toEqual('object')
                expect(manufacturers.length).toBeGreaterThan(0)
                expect(manufacturers instanceof Array).toBe(true)
                expect(manufacturers).toContain('Dodge')
                expect(manufacturers).toContain('BMW')
                expect(manufacturers).toContain('Chrysler')
            }catch(err){

            }
        })
        .catch(err=>{
            //expect(Object.getPrototypeOf(err)).toEqual(Function)
        })
    })
})