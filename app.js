var list = document.getElementById("list");
function addTodo(){
  //Add item
  var todo_item= document.getElementById("todo-item");
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);
  li.appendChild(liText);
  li.setAttribute("class","lis");
  //Edit Button creation
  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("class","btn");
  editBtn.setAttribute("onclick","editItem(this)");
  li.appendChild(editBtn);

  //Delete Button creation
  var delBtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delBtn.setAttribute("class","btn");
  delBtn.setAttribute("onclick","deleteItem(this)");
  delBtn.appendChild(delText);
  li.appendChild(delBtn);
  
  list.appendChild(li);
  todo_item.value = "";
}

function deleteItem(e){
  e.parentNode.remove();
}

function deleteAll(){
  list.innerHTML = "";
}

function editItem(e){
  var val = e.parentNode.firstChild.nodeValue ;
  var editValue = prompt("Enter edit value", val);
  e.parentNode.firstChild.nodeValue = editValue ;
}