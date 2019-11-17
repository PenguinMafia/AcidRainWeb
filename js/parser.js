const Papa = require('papaparse')
const fs = require('fs') // filestream

var inputType = "string";
var stepped = 0, rowCount = 0, errorCount = 0, firstError;
var start, end;
var firstRun = true;
var maxUnparseLength = 10000;

var file = fs.readFileSync('Input.csv', 'utf8');
errorCount = 0;
firstError = undefined;

let results;
let latitude;
let longitude;

/*
39.1963, {3}
-120.2336, {4}
*/

//converts csv to json
const csvData = Papa.parse(file, {
    header: false,
    worker: true,
    complete: function(results) {
        //console.log("Row:", results.data);
        //console.log(results.data[3]) // this is hacky but THIS IS A HACKATHON SO LOL!
        printStats(results.data)
        latitude = results.data[3];
        longitude = results.data[4];


    }
});




function printStats(msg) {
    getLatResults(msg[3])
	if (msg)
		console.log(msg);
    if (errorCount)
        console.log("     Errors:", errorCount);
            if (firstError)
		        console.log("First error:", firstError);
}

function getLatResults(arr) {
    latitude = arr;
}
console.log('-----');
console.log(latitude);


var LatLongArray = [new Array('lat', 'long')];
two1dto2d(LatLongArray, latitude, longitude);

function two1dto2d(c, a, b) {
  for (var i = 0; i < a.length; i++) {
    c.push([a[i], b[i]]);
  }
}

console.log('arr: ')
console.log(LatLongArray[4])


