//import {getColors} from '../../utils/helpers';

import request from '../../request';

jest.mock('../../request.js')

const getColors= ()=> request('/colors')

describe('make call to get colors api',()=>{
    it('get colors resolves',async ()=>{
        await expect(getColors()).resolves.toBeTruthy()
    })

    it('get colors',()=>{
        expect.assertions(5)

        return getColors()
        .then(res=>{
            try{
                var colors= res.colors
                expect(typeof res).toEqual('object')
                expect(colors instanceof Array).toBe(true)
                expect(colors.length).toBeGreaterThan(0)
                expect(colors).toContain('green')
                expect(colors).toContain('black')
            }catch(err){

            }
        })
    })
})