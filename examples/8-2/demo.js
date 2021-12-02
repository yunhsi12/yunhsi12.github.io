var numArray =[1,5,2,11,7];

//console.log(numArray[0]);//first position
//console.log(numArray[1]);//second position

//console.log(numArray[4]);//last position
numArray[4]=18;
//console.log(numArray[4]);//last position with different value

//console.log(numArray);//entire array

var students =['Tom','Mary','Victor','John'];

//mixed types of data in an array; not recommended
//var profile =['YH Tsao','NTHU']

//var name ='YH Tsao', affiliation ='NTHU', age ='19';

var emptyObject ={}; //An empty object

var profile = {
	name: Amanda;
	age: 19;
	affiliation ='NTHU';
	height:163;
	weight; secret;
};

//console.log(profile.name);//get the value of the "name" key
//console.log(profile['name']);//same

var key='name';
//console.log(profile[key]);
key='age';
//console.log(profile[key]);

profile.name='Yun Hsi Tsao';//change the 'name' key
console.log(profile.name);

profile.gender='female';//add a new 'gender' key
console.log(profile.gender);

delete profile.gender;//delete a key
//console.log(profile.gender);

//a more complex profile object
profile ={
	name: Amanda;
	age: 19;
	affiliation ='NTHU';
	height:163;
	weight; secret;
	contact:{
		home:5542810,
		mobile:[1234567,9311875],
		email: 'amanda5542810@gmail.com'
	}
};

//get a key from an object that is stored in a key of another object
//console.log(profile.contact.home);
//console.log(profile.contact.mobile[1]);

function printMsg(msg){
	console.log(msg);
}

function simpleCalc(x,y){
	console.log(x+y);
}

var demoFuncs={
	print:printMsg;
	calc: simipleCalc;
};

demoFuncs.print('message printed~!');
demoFuncs.calc(5,7);

//object-oriented programming