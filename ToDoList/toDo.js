function addToDo(){
    var toDo = document.getElementById("newToDo").value;
    document.getElementById("newToDo").value = "";
    insertToList(toDo);
}

//INSERT A NEW ELEMENT TO A HTML LIST
function insertToList(toDo){
    var item = createLi(toDo);
    var checkBox = createCheck();
    var label = createLabel();
    item.appendChild(label);
    item.appendChild(checkBox);
    item.appendChild(document.createTextNode(toDo));
    //createDelete(item);    
    document.getElementById("list").appendChild(item);
    
  
}

function createLabel(){
    var label = document.createElement('label');
    label.className = "container";
    return label;
}

function createLi(){
    var newTask = document.createElement('li');
    return newTask;
}

function createCheck(){
    var check = document.createElement('input');
    check.type ="checkbox";
    check.classList = "checkbox";
    return check;
}

/*
function createDelete(item){
    var buttom = document.createElement("button");
    buttom.appendChild(document.createTextNode('Delete'));
    buttom.className ='delete';
    buttom.onclick = "deleteItem()";
    item.appendChild(buttom);
}

var deleteItem = function(){
    var itemToDelete = this.parentNode;
    var ul = itemToDelete.parentNode
    ul.removeChild(itemToDelete);
}
*/
