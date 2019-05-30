const hbs = require('hbs');

hbs.registerHelper('getYear',()=>{
	return new Date().getFullYear();
});

hbs.registerHelper('capitalize',(text)=>{
	let letters =  text.split(' ');
	letters.forEach((letter, idx)=>{
		letters[idx] = letter.charAt(0).toUpperCase()+letter.slice(1).toLowerCase();
	});
	return letters.join(' ');
});