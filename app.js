var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('voter/seminole.txt');
//var instream = fs.createReadStream('voter/orange.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var count = 0;
rl.on('line', function(line){
   var results = line.toUpperCase();
  // var results = line;
  //count = count + 1;
  // if(results.includes('') && results.includes('')){
  if(results.includes('FERN PARK')){
    //var lastName, firstName, middleName;
    results = results.split(/[\t]+/);
    count = count + 1;
    for(var i = 0; i<results.length; i++){
      var lastName = results[2];
      var firstName = results[3];
      var middleName = results[4];
      //console.log(results[i]);
      var test = results[10];

      if(results[i] === 'FERN PARK'){
        var address = results[i-2];
        var address2 = results[i-1];
      }
    }
     if(count >= 200 && count < 300){
       console.log(count, firstName, lastName, address, address2, test);
    }

    // if(count === 117){
    //   console.log(results);
    // }

    //console.log(count, firstName, lastName, address, address2);
  }
}).on('close', function(){

  console.log('All Done!');
});
