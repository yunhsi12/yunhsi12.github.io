//console.log('Hi~');

//window : the entire browser window

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

console.log(winWidth);
console.log(winHeight);

//window.location.href ='http://google.com';
//window.location.pathname = '/nosuchpath';

window.onload =function(){
	//alert('Website is ready!');
	//window.document: the entire HTML document
	//document: the entire HTML document
	let siteTitle =document.title;
	//console.log(siteTitle);

	let allDivs =document.getElementsByTagName('div');
	//console.log(allDivs.length);
	//console.log(allDivs[0]);
	//console.log(allDivs[1].innertext);

	let emById=document.getElementsById('div3');
	//console.log(emById);

	let classEms =document.getElementsByClassName('group1');
	//console.log(classEms[0].innertext);

	let emBySelector= document.querySelector('div>p');//first match only
	//console.log(emBySelector);

	let emBySelector=document.querySelectorAll('div>p'); //all matches
	//console.log(emBySelector.length);
};