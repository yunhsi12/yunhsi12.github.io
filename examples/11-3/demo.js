window.onload=function(){
	//Mixed jQuery codes with JavaScipt codes: Bad!
	let pa=$('body > p');
	console.log(ps[0]);

	//Get the last element in Js and jQuery
	//Plain JS
	let psJS= document.querySelector('body >p');
	let emLengthJS= psJS.length;
	let lastPosJS=emLengthJS-1;
	//console.log(psJS[lastPosJS]);

	//jQuery, eq()= equal or equivalent
	let psJQ= $('body>p');
	//console.log(psJQ.eq(-1));//Negative number: counting from the end.
	//console.log(psJQ.eq(0));//0 or Positive number =counting from the beginning.

	//Get HTML from an element: innerHTML vs. html()
	//console.log(psJS[lastPosJS].innerHTML);//Plain JS
	//console.log(psJQ.eq(-1).html());//jQuery
	//console.log(psJQ.eq(-1).innerHTML);//Mixing jQuery with Js ='undifined'

	//change the HTML contents of an element
	//psJS[lastPosJS].innerHTML='Content Changed!!';//plain JS
	psJQ.eq(-1).html('Content Changed~~');//jQuery
}