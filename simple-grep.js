var grep = function(what, where, callback){
	var exec = require('child_process').exec;

	exec("grep " + what + " " + where + " -nr", function(err, stdin, stdout){
		var list = {}

		var results = stdin.split('\n');

	    // remove last element (it’s an empty line)
	    results.pop();

	    for (var i = 0; i < results.length; i++) {
	    	var eachPart = results[i].split(':') //file:linenum:line
	    	// console.log(eachPart)
	    	list[eachPart[0]] = []
	    	list[eachPart[0]].push({'line_number' : eachPart[1], 'line' : eachPart[2]})
	    }
	    var results = []
	    var files = Object.keys(list)
	    for(var i = 0; i < files.length; i++){
	    	console.log(files[i])
	    	results.push({'file' : files[i], 'results' : list[files[i]]})
	    }

	    callback(results)
	});
}

module.exports = grep;