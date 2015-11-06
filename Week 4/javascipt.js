console.log("Hello, world!");
console.log(  "This needs to be in quotes or it won't work!" );
console.log(  "Help! I'mñ trapped in the computer."  );

console.log(9999);
//This is a commment
//This is a second comment
console.log("This is a message"); //This is a third comment
/* All this will be ignored.
5+2
Until reaching*/

//Adition +
console.log( 10 + 5 );

//Substration -
console.log( 7 - 3 );

//Multiplication *
console.log( 6 * 7 );

//Division /
console.log( 8 / 2 );
console.log( 5 / 2 );

//Remainder %
console.log( 6 % 3 );
console.log( 8 % 3 );

//concatenation +
console.log( "Iron" + "hack" );

var city;
city = "Madrid";
console.log(city);

city = "Barcelona";
console.log(city);

var country = "Spain"; 
console.log(country);

country = "United States";
console.log(country);

country = country + "of America";
console.log(country);

/*You CAN use numbre in your variable name
You CAN'T start a variable name with a number*/
var country13 = "France";
console.log(country13);

//You can initialize more one variable at the same time just a single line
var j = 0, x = 20, number = 10;

//equal
if (number === 10){
	console.log("Number is equal to 10!");
	console.log(number);
}

number = number - 1;

//Not equal
if (number !== 10){
	console.log("Number is  now NOT equal to 10!");
	console.log(number);
}

//Less than
if (number < 10){
	console.log("Number is less than 10!");
	console.log(number);
}

number = number + 2;

//Greater than
if (number > 10){
	console.log("Number is now greater than 10!");
	console.log(number);
}

//Greater than or equal
if (number >= 10){
	console.log("Number is greater o equal to 10!");
	console.log(numbre);
}

number = 10;
if (number >= 10){
	console.log("Number is STILL greater o equal to 10!");
	console.log(numbre);
}

//Less than or equal
if (number <= 10){
	console.log("Number is less than or equal to 10!");
	console.log(number);
}

number = number - 2;
if(number <= 10){
	console.log("Number is STILL less than or equal to 10!");
	console.log(number);
}

//String use alphabetical order for comparison
var country
country = "Australia";

if (country < "Belgium"){
	console.log(country + "is less than Belgium!");
}

country = "australia"

if (country > "Australia") {
	console.log(country + "is greater than Australia!");
};

//You can also combine different comparisons to make a larger, using && and ||

var country, number;

country = "Australia";

//|| represent an OR
if (country == ="Australia" || country === "New Zealand") {
	console.log(country + "is either Australia or New Zeland");
};

country = "New Zealand";

if (country === "Australia" || country === "New Zealand") {
	console.log(country + "is either Australia or New Zealand");
};

number = 15;

//&& represent an AND
if (number > 10 && number < 20) {
	console.log(number + "is between 10 and 20.");
};

number = 21;
//No longer runs because number is greater than 20
if (number > 10 && number < 20) {
	console.log(number + "is between 10 and 20.");
/*To catch cases that don't mathc your if comparison you open a else
or combine else with another if
to make more specific logic*/
} else if (number <= 10) {
	console.log(number + "is less than 10.");
} else {
	console.log(number + "is NOT between 10 and 20.");
};

//Loops ... for

var i;

for (i = 1; i <= 42; i = i +1){
	console.log(i);
}

//Another example
var j = "";

for (var i = 1; i <= 10; i = i +1){
	j = j + "la";
	console.log( j);
}

//Loops ... while

var isTrue = true;
var count = 5;

while (isTrue) {
	console.log(count);
	if (count < 1){
		isTrue = false;
	}
	count --;
}

//function
function claimFormCountry (country,thing){
	var claim;

	claim = "In the name of" + country + "I claim this" + thing + "!";

	return claim;
}

var message;

message = claimFormCountry("Spain", "land");
console.log(message);

message = claimFormCountry("Italy", "pizza");
console.log(message);



function countdown (numero, texto){
	var string = texto;
	var isTrue = true;

	while (isTrue) {
		console.log(numero);
		if (numero <= 0) {
			isTrue = false;
		};
		numero --;
	}
	return string;
}

var message;
message = countdown(3, "Blast off!");
console.log(message);


//Arrays

var countries, i;
countries = ["Russia", "Finland", "Morroco", "Brazil"];
console.log(countries);
console.log("The fisrt country is " + countries[0] + "!");
console.log("The second country is " + countries[1] + "!");

countries.push("Canada");
countries.push("Mexico","Japan");

for (i = 0; i < countries.length; i = i +1){
	console.log(countries[i]);
}


var pais;

pais = {
	name: "Urugay",
	continent: "South America",
	capital: "Montevideo"
};

console.log(pais);

console.log(pais["name"]);
console.log(pais.continent);

pais["lenguage"] = "Spanish";
pais.population = 3324460;
pais.name = "Eastern Republic of Uruguay";

console.log(pais);

for (key in pais){
	console.log("This country's " + key + " is " + pais[key] + ".");
}

/* Exercise function receives an array of names
and returns them in a string with , between them. The final 
two must separated by and.*/
function prepare(names){
	var i;
	var value = "";
	var item = names.length - 1

	for (i = 0; i < names.length; i = i +1){
		if (i === item - 1){
			console.log(names[i] + " and ");
		} else if (i === item){
			console.log(names[i]);
		}else{
			console.log(names[i] + ",");
		}
	}
	return value;
}


var names;

names =["Canada", "Mexico", "Turkey", "Japan"];
console.log(prepare(names));

/*Exercise write a function that recive an 
object and returns an array of its values*/

function objetToArray(paises){
	array = []
	for (key in paises){
		array.push(paises[key]);
	}
	return array;
}
var paises;

paises = {
	nombre: "Andorra",
	continente: "Europa",
	capital: "Andorra la Vella"
};

console.log(objetToArray(paises));




