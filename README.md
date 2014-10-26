#A Simpler Grep
easy grepping in node.js

##How to get it
```
npm install simple-grep
```
##How to use it
```
var grep = require('simple-grep');
grep('search string', 'a directory or file', function(list){
  console.log(list);
});
```
Output
```
[
  {
    file: filename, 
    results:  [
                {line_number: 'n', line: 'text'},
                {line_number: 'n', line: 'text'}
              ]
  },
  {
    file: filename, 
    results:  [
                {line_number: 'n', line: 'text'},
                {line_number: 'n', line: 'text'}
              ]
  }
]
```