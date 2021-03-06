var myRover = {
  position: [0,0], 
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);

function goBack(rover){
  switch(rover.direction){
    case 'N':
      rover.position[0]--;
      break;
      case 'E':
      rover.position[1]--;
      break;
      case 'S':
      rover.position[0]++;
      break;
      case 'W':
      rover.position[1]++;
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goBack(myRover);

function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.position[1]--;
      break;
      case 'E':
      rover.position[0]++;
      break;
      case 'S':
      rover.position[1]++;
      break;
      case 'W':
      rover.position[0]--;
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

turnLeft(myRover);

function turnRigth(rover){
  switch(rover.direction){
    case 'N':
      rover.position[1]++;
      break;
      case 'E':
      rover.position[0]--;
      break;
      case 'S':
      rover.position[1]--;
      break;
      case 'W':
      rover.position[0]++;
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

turnRigth(myRover);

