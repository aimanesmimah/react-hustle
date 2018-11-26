const fs = require('fs')

const request = (entity) => new Promise((resolve, reject) => {
  entity = entity.replace('/','')

  fs.readFile(`./src/test/__mockData__/${entity}.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve(JSON.parse(data))
  })
})

export default request