const http = require('http');

http.createServer((req,res)=>{

	res.writeHead(200,{'Content-Type':'application/json'});
	let salida = {nombre:'Ruben',edad:'22'};
	res.write(JSON.stringify(salida));
	res.end();

}).listen(8080);

console.log('escuchando el puerto 8080');

