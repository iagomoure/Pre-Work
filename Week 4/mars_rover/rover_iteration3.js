var myRover = {
  position: [5,5], 
  direction: 'N'
};

var command = 'fblrk';
var obstacles = [[0,1],[6,5]]



function goForward(rover) {
  switch(rover.direction) {
    case 'N':
       if (rover.position[0] < 9){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]++;  
        break; 
      } else{
        break;
      }
    case 'E':
      if (rover.position[1] < 9) {
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]++;
        break; 
      } else{
        break;
      }
    case 'S':
        if (rover.position[0] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]--;  
        break; 
      } else{
        break;
      }
    case 'W':
      if (rover.position[1] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]--;  
        break; 
      } else{
        break;
      }
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBack(rover){
  switch(rover.direction){
    case 'N':
      if (rover.position[0] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]--;  
        break; 
      } else{
        break;
      }
    case 'E':
      if (rover.position[1] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]--;  
        break; 
      } else{
        break;
      }
    case 'S':
      if (rover.position[0] < 9) {
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]++;
        break; 
      } else{
        break;
      }
    case 'W':
      if (rover.position[1] < 9) {
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]++;
        break; 
      } else{
        break;
      }
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      if (rover.position[1] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]--;
        break; 
      } else{
        break;
      }
    case 'E':
      if (rover.position[0] < 9) {
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]++;
        break; 
      } else{
        break;
      }
    case 'S':
      if (rover.position[1] < 9) {
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]++;
        break; 
      } else{
        break;
      }
    case 'W':
      if (rover.position[0] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]--;
        break; 
      } else{
        break;
      }
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnRigth(rover){
  switch(rover.direction){
    case 'N':
      if (rover.position[1] < 9) {
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]++;
        break; 
      } else{
        break;
      }
    case 'E':
      if (rover.position[0] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]--;
        break; 
      } else{
        break;
      }
    case 'S':
      if (rover.position[1] > 0){
        var move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[1]--;
        break; 
      } else{
        break;
      }
    case 'W':
      if (rover.position[0] < 9) {
        move = rover.position[0];
        move ++;
        var tmp = transform(obstacles);
          for (var i = 0; i < tmp.length; i++){
            if (move === tmp[i]) {
              alert('Obstacle detection!');
              return console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
            } 
          } 
        rover.position[0]++;
        break; 
      } else{
        break;
      }
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function sequence(array,rover){
  for (var i = 0; i < array.length; i++){
    switch(array[i]){
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBack(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRigth(rover);
        break;
      default:
        alert('Incorrect command sequence. You oly use: f,b,l, or r');
        break;
    };
  }
}

function transform(obstacles){
  var tmp_array = [];
  for(var i = 0; i < obstacles.length; i++){
    tmp_array.push(obstacles[i][0]);
  }
  return tmp_array;
}

sequence(command,myRover);

