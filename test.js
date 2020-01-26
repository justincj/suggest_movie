var fs = require('fs');


fs.readFile('./array.txt','utf8', function(err, data){

	var marray = data.split('\n')
	var length = marray.length;
	var index = Math.floor(Math.random()*marray.length);	
	console.log(marray[index]);
})
