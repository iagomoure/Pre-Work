
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
   
    var valueInput = document.getElementById('todo-input').value;
    var nodeValueInput = document.createTextNode(valueInput);
    var elementValueInput = document.createElement('li');
    var todoList = document.getElementsByClassName('todo-list-items')[0];
    var firsTodoList = todoList.getElementsByTagName('li')[0]; 

    elementValueInput.appendChild(nodeValueInput);
    todoList.insertBefore(elementValueInput,firsTodoList);
  }

  function markAsDone() {
   // doneButton.classList.add('liked');
   // doneButton.innerHTML = "Liked!";
   // document.querySelector('h1').style.color = "red";
  var todoList = document.getElementsByClassName('todo-list-items')[0];
  var doneList = document.getElementsByClassName('done-list-items')[0];
  var removedItemTodoList = todoList.getElementsByTagName('li')[0];
  var addedItemDoneList = doneList.getElementsByClassName('done')[0];

  todoList.removeChild(removedItemTodoList);


  doneList.insertBefore(removedItemTodoList,addedItemDoneList);
  }
  
}



