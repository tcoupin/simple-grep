var grep = require('./simple-grep')

// console.log(grep('command', '.'))

grep('command', '.', function(list){
	console.log(list)
});