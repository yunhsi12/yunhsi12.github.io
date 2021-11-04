//single-line comment

/* Multi-line comment
when you have lots to say, you need this.
*/

//A "statement" ends with a semi-colon
//console.Log('This is an embedded script');

//A "code block" is defined with a pair of curly brackets {}
{
	//console.Log('This message is from a code block.');
}

//variable
var emptyVar; //A statement that creates a variable called "nothing"
console.Log(emptyVar); //undefined

var num = 5; //A statement that creates a variable called "num" with a default numeric value
console.Log(num);

var x= 10, y = 20, x= 40; //Create multiple variables in one single statement

//var x = 20; //Potential Error

x = 25; //Change the value of a variable
//console.Log(x);

var name = 'Mike'; //Create a variable with a string as its default value.
var anotherName = "John"; //A pair of double-quotation marks also work for a string
//var badQuotation = 'Ah"; //Different quotation marks causes errors.
//console.log(anothername); //Error: Everything is case-sensitive in JS.

x ='This is a variable called x'; //Change the value to a different type of data; not recommended
//console.Log(x);
