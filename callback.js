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


       superagent
         .get(`https://robohash.org/${randomText()}`)
        .end((err,res) => {
          console.log('Robo image Link is ', res.request.url)
          fs.writeFile('./robo-image.txt', res.request.url, (err) => {
              if(err){
                  console.log("Not Able to Write Robo Image to the File",err);
                  return;
              }
           console.log('Robo is sucessfully written the file')
         });
       });
     