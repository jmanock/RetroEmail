var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('voter/seminole.txt');
// var instream = fs.createReadStream('voter/orange.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
rl.on('line', function(line){
  var results = line.toUpperCase();
  if(results.includes('') && results.includes('')){
    results = results.split(/[\t]+/);
    console.log(results);
  }
}).on('close', function(){
  console.log('All Done!');
});
