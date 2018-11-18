const config= Object.freeze({
    POST_METHOD: 'POST',
    GET_METHOD: 'GET',
    URL_BASE: 'http://localhost:3001',
    HEADERS: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' }
})




export const getCall= (url,params=null)=>{
    
    url= params && params.length? url + params.reduce((acc,current)=> { return acc + '&'+ current.name + '='+ current.value  },'?') : url

    return new Promise((resolve,reject)=> {
        fetch(url  ,{method: config.GET_METHOD ,
                headers: config.HEADERS
                    })
               .then(res =>{  console.log(res); return  res.json(); })
               .then(data => {
                       resolve(data)
               })
               .catch(err => {
                     reject(err)
               })
    })
}

export const postCall= (url,body)=> {
    return new Promise((resolve,reject)=> {
        fetch(url  ,{method: config.POST_METHOD ,
                headers: config.HEADERS,
                body: JSON.stringify(body) 
                    })
               .then(res =>{  console.log(res); return  res.json(); })
               .then(data => {
                       resolve(data)
               })
               .catch(err => {
                     reject(err)
               })
    })
}