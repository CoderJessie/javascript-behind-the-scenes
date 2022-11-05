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
*/

//The 'this' keyword in practice
console.log(this);

const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	console.log(this);
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
jonas.calcAge(1991);
