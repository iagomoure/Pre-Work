var myRover = {
  position: [5,5], 
  direction: 'N'
};

var command = 'fblrrrrk';

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[0] < 9) {
        rover.position[0]++
        break;
      } else{
        break;
      }
    case 'E':
      if (rover.position[1] < 9) {
        rover.position[1]++
        break;
      } else{
        break;
      }
    case 'S':
        if (rover.position[0] > 0){
          rover.position[0]--
          break;  
        } else{
          break;
        }
    case 'W':
      if (rover.position[1] > 0){
        rover.position[1]--
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
        rover.position[0]--;
        break;
      } else{
        break;
      }
    case 'E':
      if (rover.position[1] > 0){
        rover.position[1]--;
        break;
      } else{
        break;
      }
    case 'S':
      if (rover.position[0] < 9) {
        rover.position[0]++;
        break;
      } else{
        break;
      }
    case 'W':
      if (rover.position[1] < 9) {
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
        rover.position[1]--;
        break;
      } else{
        break;
      }
    case 'E':
      if (rover.position[0] < 9) {
        rover.position[0]++;
        break;
      } else{
        break;
      }
    case 'S':
      if (rover.position[1] < 9) {
        rover.position[1]++;
        break;
      } else{
        break;
      }
    case 'W':
      if (rover.position[0] > 0){
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
        rover.position[1]++;
        break;
      } else{
        break;
      }
    case 'E':
      if (rover.position[0] > 0){
        rover.position[0]--;
        break;
      } else{
        break;
      }
    case 'S':
      if (rover.position[1] > 0){
        rover.position[1]--;
        break;
      } else{
        break;
      }
    case 'W':
      if (rover.position[0] < 9) {
        rover.position[0]++;
        break;
      } else{
        break;
      }
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function sequence(array, rover){
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

sequence(command,myRover);




