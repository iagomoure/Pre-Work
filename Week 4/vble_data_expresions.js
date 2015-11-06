var isConanABarbarian;
isConanABarbarian
// The console shows undefined because there is no value for `isConanABarbarian` yet.

isConanABarbarian = true; //let’s assign a boolean value to our variable

// You can return the variable to undefined by assigning undefined.
isConanABarbarian = undefined; // Who knew?
// Normally you wouldn't need to do this though...

var conanStrength;
conanStrength = 100;

// You can assign while you declare the variable
var barbarian = { name: 'Conan', strength: 100 }; // Remember what data type this is?
// As you see, objects can have mixed data types for values
// Type in `barbarian` to explore the object barbarian

// They can even contain lists or other objects
var superhero = { name: 'Batman', inventory: ['rope', 'batarang', 'darts'] }; // What data type is the inventory?
superhero

// Combinations between arrays and objects are endless.
var players = [ { name: 'Marc', age: 22 }, { name: 'Sophie', age: 21 } ];
// Explore complex objects inside the console
players

// An array can also store mixed values.
var mixed = [ 12345, 6549, 'ZNN009', { value: 'an object!' } ];
// Even other arrays!
var coordinates = [ [0, 0], [1, 2], [3, 4], [5, 6] ];

// You can use any string as the key but you will need quotes if the key name
// does not match variable naming rules.
var alumniByCity = {
  Miami: 20,
  'New York': 5,
  'San Francisco': 10
};

// You may want to include some special characters in a string  such as tabs, new lines and
// quotes. If you need some of these characters use:
//
//   \n for new lines
//   \t for a tab
//   \' for a single quote
//   \" for a double quote
//   \\ for a back slash
//
var couplet =
  'Whether or not we find what we are seeking\nIs idle, biologically speaking.';
// This breakline is totally legal. We are trying to keep lines under 80
// characters.

// As a challenge try to write a string with a double backslash inside: \\.

// You can declare multiple variables at the same time.
var aVariable = 1,
    anotherOne = 2,
    andAnother = 3
;

// And remember, you can assign different types of values to the same variable.
var number = 1;
number = { real: 5, imaginary: 2 };
number = "Hello world!";

// Notice variable names mean nothing for JavaScript. They are only meaningful
// for humans reading the code so try to give them good names.


var character = {name: 'Conan', str: 100};
character.str;
character.name;

var inventory = []
inventory.push('rope'); //Wil be in index 0
inventory.push('batarang'); //Will be in index 1
inventory.push('darts'); //Wil be in index 2

inventory[1]; //Will print 'batarang' as it is the item under index 1

character['name'];
character['str'];

var alumniByCity = {
	'Miami': 20,
	'New York': 5,
	'San Francisco': 10
};

var city = prompt('Choose a city (San Francisco, New York, Miami) to see the amount of alumni ther.');
var alumniCount = alumniByCity[city]
alert(city + ' has ' + alumniCount + ' alumni!');

var superhero = { name: 'Batman', inventory: [] };
superhero.inventory.push('rope');
superhero.inventory.push('batarang');
superhero.inventory.push('darts'); // Add darts to Batman's inventory

superhero.name.length;
superhero.inventory[2].toUpperCase(); // What do you think this method does?

var emptyArray = []
emptyArray.length;

var anArray = [1,2,3];
anArray.length;

"HELLO".length;

var anArray = [];
anArray.push(1);
anArray.push(2);
anArray

// As with attributes you can use them on literals as well
"   My name is Salva   ".trim();

// With number literals, JavaScript thinks you are trying to write a
// decimal separator so you need to add parentheses or a space
5.toString(); // is invalid
5 .toString(); // will return the string literal "5"
(5).toString(); // like above

var a, b, c = 5; // This is a declaration. A declaration is an expression too.
// We have created three variables that all have the value of 5.
// The declaration always returns undefined.

a = "Hello mister!"; // This is an assignment. The l-value is a and the r-value is “Hello mister!”
// The result is the r-value, hence "Hello mister!"

b = a; // Another assignment. First a is substituted by "Hello mister!"
       // Then, the value is stored in b.

a = b = c; // This is completely valid. What do you think it does?
// The result will be 5. Try to explain to yourself why.

a = b = c = 0; // Convenient to initialize all variables to the same value.

// Consider this:
a = 1;      // Variable a will keep the value 1.
a = a + 1;  // Now the right side is solved and this is equivalent to a = 1 + 1
            // so this is like a = 2 and finally, a will store the value 2.

// Assignments have a very special notation:
a = 1;
a += 1; // this means, add 1 to a and store the result inside a

// The following are valid as well
a = 1;
a -= 1;
a *= 9;
a /= 2;
a %= 7; // this is the remainder of an integer division.

var a = 10;
++a; // pre increment
a++; // post increment

var b = 10;
--b; // pre decrement
b--; // post decrement

var superhero = { name: 'Batman' }; // this is a declaration
superhero.name = 'Superman'; // what is the l-value here and what operators are we using?
superhero;

superhero.superpower; // will print undefined
superhero.superpower = 'flight';
superhero.superpower; // will print 'flight'


var subject = 'Harvey Dent';
var anotherSubject = 'Harvey Dent';
anotherSubject === subject; // will be true

var five = 5;
var result = 2 + 2 + 1;
five === result; // will be true

var subject = { name: 'Harvey Dent', facility: 'Arkham Asylum' };
var foe = { name: 'Harvey Dent', facility: 'Arkham Asylum' };
foe === subject; // will be false

var list = ['rope', 'batarang', 'darts'];
var inventory = ['rope', 'batarang', 'darts'];
list === inventory; // will be false


var aNumber = 7;
var evenOrOdd = (aNumber % 2 === 0) ? 'even' : 'odd'
console.log(aNumber + ' is ' + evenOrOdd);









