var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('voters/orange2018.txt');
var instream = fs.createReadStream('voters/sem2018.txt');

var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

var count = 0;

rl.on('line', function(line){
  var results = line.toUpperCase();

  if(results.includes('')){
    results = results.split(/[\t]+/);
    console.log(results);
  }
/*
  var results = line;
  count = count + 1;
  if(results.includes('FERN PARK')){
    var lastName, firstName, middleName;
    results = results.split(/[\t]+/);
    count = count + 1;
    for(var i = 0; i < results.length; i++){
      lastName = results[2];
      firstName = results[3];
      middleName = results[4];
      console.log(results[i]);
      var test = results[10];

      if(results[i] === 'FERN PARK'){
        var address = results[i - 2];
        var address2 = results[i - 1];
      }
    }
    if(count >= 200 && count < 400){
      console.log(count, firstName, lastName, address, address2, test);
    }
    if(count === 296){
      console.log(results);
    }
    console.log(count, firstName, lastName, address, address2);
  }
  */

  // Checking emails by city
  /*
  var email;
  if(results.includes('OCOEE')){
    results = results.split(/[\t]+/);
    for(var i = 0; i < results.length; i++){
      if(results[i].includes('@')){
        console.log(results[i],i);
        count = count + 1;
        email = results[i];
      }
      if(count >= 999){
        if(email !== undefined){
          console.log(email);
        }
      }
    }
  }
  */
}).on('close', function(){
  console.log('All done')
})
