//requireds
const fs = require('fs');
var colors = require('colors');

let createFile = (base, limit = 10) =>{

  return new Promise((resolve, reject) =>{

    if( !Number(base) ){
      reject(`The introduced value ${ base } is not a valid number.`);
      return;
    }
    if(!Number(limit)){
      reject(`The introduced value ${ limit } is not a valid number.`);
      return;
    }

    let data = '';

    for(let i = 1; i <= limit; i++){
      data += `${ base } * ${ i } = ${ base * i }\n`;
    } 
    //const data = new Uint8Array(Buffer.from('Hello Node.js'));

    fs.writeFile(`tables/table-${ base }-to-${ limit }.txt`, data, (err) => {
      if (err) 
        reject(err);
      else
        resolve(`table-${ base }-to-${ limit }.txt`);
    });

  });
}

let listTable = (base, limit = 10) =>{

  return new Promise( (resolve, reject) =>{

    if(!Number(base)){
      reject(`The introduced value ${ base } is not a valid number.`);
      return;
    }
    if(!Number(limit)){
      reject(`The introduced value ${ limit } is not a valid number.`);
      return;
    }

    let data = '';

    for(let i = 1; i <= limit; i++){
      data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    console.log('====================='.green);
    console.log(`Table of ${ base }`.green);
    console.log('====================='.green);
    resolve(console.log(data));

  });
};

module.exports = {
  createFile,
  listTable
}