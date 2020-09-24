const fs = require('fs');
const request = require('request');

const urlAndPath = process.argv.slice(2);
const myUrl = urlAndPath[0];
const myPath = urlAndPath[1];


request(myUrl, (error, response, body) => {
  // console.log(response);
  if(error && error.code === 'ENOTFOUND') {
    console.log('Something wrong with your URL!');
  }

  if(response.statusCode !== 200) {
    console.log(`Your website returned status code: ${response.statusCode}`)
  }

  fs.writeFile(myPath, body, err => {
    if(err && err.code === `ENOENT`) {
      console.log(`directory doesn't exist! try again`);
    }
  });
});



