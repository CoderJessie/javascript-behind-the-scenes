'use strict';
/*
function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			//Creating NEW variable with same name as outer scope's variable
			const firstName = 'Steven';

			//Reassigning outer scope's variable
			output = 'NEW OUTPUT!';

			const str = `Oh, and you're a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		// console.log(str);
		console.log(millenial);
		// console.log(add(2, 3));
		console.log(output);
	}
	printAge();

	return age;
}

const firstName = 'Jonas';
calcAge(1991);


//Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Hoisting with functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addExpr);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
	return a + b;
}

var addExpr = function (a, b) {
	return a + b;
};
const addArrow = (a, b) => a + b;

// Example of Hoisting bug
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//The 'this' keyword in practice
// console.log(this);

const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	// console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
	console.log(2037 - birthYear);
	console.log(this);
};
calcAgeArrow(1980);

//Using the 'this' keyword inside a method
const jonas = {
	year: 1991,
	calcAge: function () {
		console.log(this);
		console.log(2037 - this.year);
	},
};
jonas.calcAge();

const matilda = {
	year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// const f = jonas.calcAge;
// f(); The 'this' keyword here is undefined so this variable would only display 'undefined' in the console.


// Regular functions vs Arrow functions
// var firstName = 'Matilda';

const jonas = {
	firstName: 'Jonas',
	year: 1991,
	calcAge: function () {
		// console.log(this);
		console.log(2037 - this.year);

		// Solution 1
		// const self = this; // self or that
		// const isMillenial = function () {
		// 	console.log(self);
		// 	console.log(self.year >= 1981 && self.year <= 1996);
		// };

		// Solution 2 Arrow function uses the 'this' keyword from the parent scope.
		const isMillenial = () => {
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => {
		console.log(this);
		console.log(`Hey ${this.firstName}`);
	},
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
	console.log(arguments);
	return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
	console.log(arguments);
	return a + b;
};
addArrow(2, 5, 8); // argument keyword doesnt exist in arrow function

*/

//Primitives Vs Objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
	name: 'Jonas',
	age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
