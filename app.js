var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('voter/orange.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
rl.on('line', function(line){
  var results = line.toUpperCase();
  if(results.includes('@')){
    console.log(line);
  }
}).on('close', function(){
  console.log('All Done!');
});
