var fs = require('fs')
const superagent = require('superagent')

function randomText() {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for ( let i = 0; i < 8; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

async function getRoboPic() {
    try {
      const res=await superagent.get('https://robohash.org/${randomText()}')
      console.log(`Robot is`,res.request.url)

      await writeFilePromise('./robo-image.txt', res.request.url)
      console.log('Sucessfully written the file')
    } catch (err) {
      throw err
    }
    console.log('2. complete')
  }
  console.log('1. start')
  ;(async () => {
    try {
      await getRoboPic()
      console.log('3. end')
    } catch (err) {
      console.log('3. end due to error')
    }
  })()
  
  