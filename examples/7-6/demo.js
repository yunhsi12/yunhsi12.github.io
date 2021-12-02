//alert('This is an alert!');

function printMsg(){
	console.log('This is a message in the console.');
}

printMsg();

var varFunction = function(){
	console.log('this is a function stored in a variable');
};

varFunction();

//-----------

alwaysDoFirst();

function alwaysDoFirst(){
	console.log('you can call this function anywhere in the script!');

}


var callThisLater = function() {
	console.log('you cna call this function after it is built');
};

callThisLater();