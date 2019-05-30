// se requieren los modulos necesarios para funcionar
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/partials');


app.set('view engine', 'hbs');

const port =process.env.PORT || 3000;

app.get('/', function(req,res){

	let salida = {
		nombre:'Ruben',
		edad:'22'
	};

	res.render('home',{nombre: 'Rubén'});

	//res.send("Hola mundo");
});

app.get('/about', function(req,res){

	res.render('about');

	//res.send("Hola mundo");
});

app.listen(port);