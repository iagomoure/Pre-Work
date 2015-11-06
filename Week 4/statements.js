// This computes the distance between the point and the offset
var offset = { x: 1, y: 1 };
var point = { x: 5, y: 3 };
var distanceX = Math.abs(point.x - offset.x);
var distanceY = Math.abs(point.y - offset.y);
var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

var userInput = prompt('Enter a number');
var aNumber = parseFloat(userInput); // convert user input into a Number

if (aNumber % 2 === 0) {
  console.log('The number ' + aNumber + ' is even');
}
else {
  console.log('The number ' + aNumber + ' is odd');
}

var userInput = prompt('Enter a positive number');
var aNumber = parseFloat(userInput);
if (aNumber < 0) {
  console.log('I said a positive number. I’ll fix it for you...');
  aNumber = -aNumber;
}
alert('The square root is ' + Math.sqrt(aNumber));

var userInput = prompt('Enter your age');
var age = parseFloat(userInput);

if (age > 65) {
  console.log('Reduced price: 10$');
}
else if (age > 28) {
  console.log('Normal price: 25$');
}
else if (age > 16) {
  console.log('Younth price: 10$');
}
else {
  console.log('Kid price: 5$');
}

var command = prompt('Show help for command... (prompt, alert, confirm)');

switch (command) {
  case 'prompt':
    alert('Shows a modal dialog asking the user to enter a value.');
  break;

  case 'alert':
    alert('Shows a modal dialog informing about something.');
  break;

  case 'confirm':
    alert('Shows a modal dialog asking the user to confirm an action.');
  break;

  default:
    alert('I don\'t understand your command: ' + command);
  break;
}

var month =
  parseInt(prompt('Enter a month to know how long it is (1..12)'), 10);

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert('31 days');
  break;

  case 2:
    alert('28 / 29 days');
  break;

  default:
    alert('30 days');
  break;
}


var ratings = [1, 3, 1, 1, 5, 4, 3, 2, 2, 2, 3, 3, 1, 1, 2, 4, 5, 1, 2];

var sum = 0, index = 0;
while (index < ratings.length) {
  sum += ratings[index];
  index++;


var sum = 0;
for (var index = 0, length = ratings.length; index < length; index++) {
  sum += ratings[index];
}
var average = sum / length;
}

