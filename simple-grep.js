var grep = function(what, where, callback){
	var exec = require('child_process').exec;

	exec("grep " + what + " " + where + " -nrH", function(err, stdin, stdout){
		var list = {}

		var results = stdin.split('\n');

	    // remove last element (it’s an empty line)
	    results.pop();
	    for (var i = 0; i < results.length; i++) {
	    	var eachPart = results[i].split(':') //file:linenum:line
	    	list[eachPart[0]] = []
	    }
	    for (var i = 0; i < results.length; i++) {
	    	var eachPart = results[i].split(':') //file:linenum:line
	    	var details = {}
	    	var filename = eachPart[0]
	    	details['line_number'] = eachPart[1]
	    	
	    	eachPart.shift()
	    	eachPart.shift()
	    	details['line'] = eachPart.join(':')

	    	list[filename].push(details)
	    }


	    var results = []
	    var files = Object.keys(list)
	    for(var i = 0; i < files.length; i++){
	    	results.push({'file' : files[i], 'results' : list[files[i]]})
	    }

	    callback(results)
	});
}

module.exports = grep;
