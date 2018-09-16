const opts = {
  base: {
      demand: true,
      alias: 'b'
    },
  limit:{
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('list','Print multiplication table.', opts)
  .command('create','Generates multiplication table file.', opts)
  .help()
  .argv;

module.exports = {
  argv
}