
var fs = require('fs')
const superagent = require('superagent')

  function writeFilePromise(fileLocation, result) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, result, (err) => {
        if (err) {
          reject('Not Able to write to the file')
        }
        resolve()
      })
    })
  }
  superagent.get('https://robohash.org/${randomText()}')
   .end((err,res) =>{

     return writeFilePromise('./robot-image.txt', res.request.url)
   .then(() => {
     console.log('Sucessfully written the file')
   })
  .catch((err) => {
    console.log(err)
  })
   })