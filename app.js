var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('voter/seminole.txt');
// var instream = fs.createReadStream('voter/orange.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var count = 0;
rl.on('line', function(line){
  // var results = line.toUpperCase();
  var results = line;

  // if(results.includes('') && results.includes('')){
  if(results.includes('@')){
    count = count + 1;
    results = results.split(/[\t]+/);

    for(var i = 0; i<results.length; i++){
       if(results[i].includes('@')){
         console.log(results[i]);
       }
    }
  }
}).on('close', function(){
// console.log(count);
  console.log('All Done!');
});
