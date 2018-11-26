import {getCall} from './apiCalls';

export const getCars= function(page,manufacturer,color,sort){
    return new Promise((resolve,reject)=>{
        if(!arguments.length){
            getCall('/cars').then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject('error')
            })
        }
        else{
            let params=[]

            params= page ? params.concat([{name: 'page', value: page }]) : params
            params= manufacturer && manufacturer !== 'all' ? params.concat([{name: 'manufacturer', value: manufacturer}]) : params
            params= color && color !== 'all' ? params.concat([{name: 'color', value: color}]) : params  
            params= sort && sort !== 'none' ? params.concat([{name: 'sort', value: sort}]): params

            console.log(params)
            getCall('/cars',params).then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject('error')
            })
        }
    })
}

export const getColors= ()=> {
    return new Promise((resolve,reject)=>{
        getCall('/colors').then(res=>{
            resolve(res.colors)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export const getManufacturers= ()=> {
    return new Promise((resolve,reject)=>{
        getCall('/manufacturers').then(res=>{

            resolve(res.manufacturers.map(item=> item.name))
        })
        .catch(err=>{
            reject(err)
        })
    })
}