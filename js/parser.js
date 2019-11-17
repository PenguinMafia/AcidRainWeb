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

/*
39.1963, {3}
-120.2336, {4}
*/

//converts csv to json
const csvData = Papa.parse(file, {
    header: false,
    worker: true,
    step: function(results) {
        //console.log("Row:", results.data);
        console.log(results.data[3]) // this is hacky but THIS IS A HACKATHON SO LOL!
        //printStats(results.data)
        results = results.data;

    }
});


function printStats(msg) {
	if (msg)
		console.log(msg);
    if (errorCount)
        console.log("     Errors:", errorCount);
            if (firstError)
		        console.log("First error:", firstError);
}

console.log("test:")
console.log(results);


