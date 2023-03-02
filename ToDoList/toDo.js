(function() { 
    var keys = Object.keys(localStorage), i ,
    tasks =[];
    // while(i--){
    //     tasks.push(localStorage.getItem("keys[i]"));
    //     document.getElementById('list').textContent = tasks;
    // }

    for(i=0; i<keys.length; i++){
        var value = String(localStorage.getItem(keys[i]));
        console.log(value);
        insertToList(value);
    }
       

})();  


function addToLocalStorage(todo){
    var keys = Object.keys(localStorage), i ,
    tasks =[], found;

    for(i=0; i<keys.length; i++){
        const value = localStorage.getItem(keys[i]);
        if(todo == value ){
            found = true;
        }
    }


    if(!found){
        window.localStorage.setItem(keyGenerator(), todo);
    }

}


var task = 0;

function keyGenerator(){
    const newKey = 'task' + task;
    task ++;
    return newKey;
}


function addToDo(){
    var toDo = document.getElementById("newToDo").value;
    document.getElementById("newToDo").value = "";
    insertToList(toDo);
}

//INSERT A NEW ELEMENT TO A HTML LIST
function insertToList(toDo){
    console.log(toDo);
    var item = createLi();
    var checkBox = createCheck();
    var label = createLabel();
    var but = createDelete(); 
    
    item.appendChild(label);
    label.appendChild(checkBox);
    label.appendChild(document.createTextNode(toDo));
    label.appendChild(but); 
    document.getElementById("list").appendChild(item);
    //window.localStorage.setItem(keyGenerator(), item.innerHTML);
    addToLocalStorage(toDo);
 
    
  
}

function createLabel(){
    var label = document.createElement('label');
    label.classList = "container";
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
    // check.id = "check";
    return check;
}


function createDelete(){
    var buttom = document.createElement("button");
    buttom.appendChild(document.createTextNode('Delete'));
    buttom.className ='delete';
    buttom.onclick = function(){
        var label = buttom.parentNode;
        var itemToDelete = label.parentNode;
        var ul = itemToDelete.parentNode;
        ul.removeChild(itemToDelete);
    }
    ;
    //buttom.addEventListener("click",deleteItem(buttom)) ;
    return buttom;
}



function deleteItem(buton){
    var label = buton.parentNode;
    var itemToDelete = label.parentNode;
    var ul = itemToDelete.parentNode;
    ul.removeChild(itemToDelete);
}

function editItem(editBut){
        var label = editBut.parentNode, task;
        task = searchChild(label, 'LABEL')
        console.log(task);
        task.contentEditable = true;
        task.style.backgroundColor = "#dddbdb";
        task.innerHTML = 'hola';
        changeButtons(label, 'LABEL');
    
}


function searchChild(parent, c){
    for (const child of parent.children) {
        console.log(child.tagName);
        if(child.tagName == c){
            task = child;
        }
      }
    
    return task; 
}

// function changeButtons(label){
//     var dele = searchChild(label, 'BUTTON');
//     dele.appendChild(document.createTextNode('Cancel'));
//     var edit = searchChild(label, 'BUTTON');
//     edit.appendChild(document.createTextNode('Save'));
// }
