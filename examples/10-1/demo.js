function  changeDivCSS(){
	let buttonId =this.id;
	let divs =document.getElementsByTagName('div');
	if(buttonId==='changeDiv1'){
		div[0].style.cssText='background-color:red; width: 100px; height:40px;';
	}
	else if(buttonId==='changeDiv2'){
		div[1].style.cssText='background-color:black; width: 60px; height: 150px;';
	}
	else{
		div[2].style.cssText='background-color:gold; width:200px; height: 200px;';
	}
};

window.onload=function(){
	if(true){
		//alert('true!');
	}
	else{
		//alert('false!');
	}

	//Real Condition
	if(1 === 1){
		//alert('true!');
	}
	/*else{//else is optional
		alert('false!');
	}*/

	//!== means 'not equivalent to'
	if(1!==2){
		//alert('true!!');
	}


	//Mutiple separate conditions
	if(2==1){
		//alert('Condition 1 is true~');
	}
	else if('a'==='b'){
		//alert('Condition 1 is true~');
	}
	else{
		//alert('Neither is true QQ');
	}

	if(2===2&& 15===10){//&& means And
		//alert('condition 1 is true.');
	}
	else if(2===2||15===10){// || means Or
		//alert('condition 2 is true.');
	}
	else {
		//alert('neither is true.');
	}
	document.getElementById('changeDiv1').addEventListener('click',changeDivCSS);
	document.getElementById('changeDiv2').addEventListener('click',changeDivCSS);
	document.getElementById('changeDiv3').addEventListener('click',changeDivCSS);
};
