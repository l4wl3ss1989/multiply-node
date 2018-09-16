// const argv = require('yargs')
//   .command('list','Print multiplication table.', {
//     base: {
//       demand: true,
//       alias: 'b'
//     },
//     limit:{
//       alias: 'l',
//       default: 10
//     }
//   })
//   .command('create','Generates multiplication table file.', {
//     base: {
//       demand: true,
//       alias: 'b',
//     },
//     limit:{
//       alias: 'l',
//       default: 10
//     }
//   })
//   .help()
//   .argv;

// const argv = require('./config/yargs');
// argv.argv
// const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
var colors = require('colors');
const { createFile, listTable } = require('./multiply/multiply');

let command = argv._[0];

switch(command){
  case 'list':
    listTable(argv.base, argv.limit)
      .then( file => console.log(file) )
      .catch( err => console.log(err) );
    break;
  case 'create':
    createFile(argv.base, argv.limit)
      .then( file => console.log(`Created file: ${file.green}`) )
      .catch( err => console.log(err));
    break;
  default:
    console.log('Not recognized command.')
}

//console.log(process.argv);
// let argv2 = process.argv;
// let param = argv[2];
// let base = param.split('=')[1];
// console.log(argv);
// console.log(argv.base);
// console.log('Limit: ', argv.limit);

// createFile(base)
//   .then( file => console.log(`Created file: ${file}`) )
//   .catch( err => console.log(err));
