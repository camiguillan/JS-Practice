var checknum = 0;
var tasknum = 0;

(function() { 
    
    var keys = Object.keys(localStorage).filter(key=> key.includes('task')), i ;
 
    // while(i--){
    //     tasks.push(localStorage.getItem("keys[i]"));
    //     document.getElementById('list').textContent = tasks;
    // }

    for(i=0; i<keys.length; i++){
        var value = String(localStorage.getItem(keys[i]));
        console.log(value);
        insertToList(value);
    }
   showChecked();
       

})();  



function addToLocalStorage(todo){
    var keys = Object.keys(localStorage), i ,
    tasks =[], found;

    // NOT ADDING DUPLICATES
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



function keyGenerator(){
    const newKey = 'task' + tasknum;
    tasknum ++;
    return newKey;
}


function checkKey(){

    const keych = 'check' + checknum;
    checknum ++;
    return keych;
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
    var but = createDelete(toDo); 
    var edit = createEdit(toDo);
    var text = createText(toDo);

    item.appendChild(label);
    label.appendChild(checkBox);
    label.appendChild(text); //inside a label
    label.appendChild(but); 
    label.appendChild(edit);
    document.getElementById("list").appendChild(item);
    //window.localStorage.setItem(keyGenerator(), item.innerHTML);
    addToLocalStorage(toDo);
}

function createText(toDo){
    var label = document.createElement('label');
    label.appendChild(document.createTextNode(toDo));
    return label;
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
    check.id = checkKey();
    saveCheck(check);
    check.onclick = function(){
        window.localStorage.setItem(check.id, check.checked);
    }
    return check;
}


function createDelete(todo){
    var buttom = document.createElement("button");
    buttom.appendChild(document.createTextNode('Delete'));
    buttom.className ='delete';
    buttom.onclick = function(){
        var label = buttom.parentNode;
        var itemToDelete = label.parentNode;
        var ul = itemToDelete.parentNode;
        ul.removeChild(itemToDelete);
        const checkID = findCheckfromtask(todo);
        removeCheck(checkID);
        removeLocalstore(todo);
    }
    ;
    //buttom.addEventListener("click",deleteItem(buttom)) ;
    return buttom;
}

function removeCheck(id){
    var checks = Object.keys(localStorage).filter(key => key.includes('check')), check;
    for(var i =0; i< checks.length ; i ++){
        if(id == checks[i]){
            window.localStorage.removeItem(checks[i]);
        }
    }
}

function removeLocalstore(item){
    
    var keys = Object.keys(localStorage), i ;

    // NOT ADDING DUPLICATES
    for(i=0; i<keys.length; i++){
        const val = localStorage.getItem(keys[i]);
        
        if(item == val){
            console.log(keys[i], item, val);
            window.localStorage.removeItem(keys[i]);
        }
    }
    
}

// WE SEARCH FOR THE ANALOG CHECKBOX IN ORDER TO DELETE IT FROM LS
function findCheckfromtask(task){
    var taskId = findId(task); // get the id of the task in LS
    let pattern = /[0-9]/g;
    let id = taskId.match(pattern); //we look for its number
    var checks = Object.keys(localStorage).filter(key => key.includes('check')), checkId;

    //searching for the check which has the same number in its id
    for(var i=0; i < checks.length; i ++){
        if(checks[i].includes(id)){
            checkId = checks[i];
        }
    }
    console.log('check id', checkId);
    return checkId;

}

// LOOKING FOR THE ID OF A CERTAIN TASK
function findId(task){
    var keys = Object.keys(localStorage), taskId;
    for(var i=0; i < keys.length; i ++){
        if((localStorage.getItem(keys[i]) == task)){
             taskId = keys[i];
        }
    }
    console.log('task id', taskId);
    return taskId;
}

function createEdit(todo){
    var buttom = document.createElement("button");
    buttom.appendChild(document.createTextNode('Edit'));
    buttom.className ='edit';
    buttom.onclick = function(){
        var label = buttom.parentNode, task;
        task = searchChild(label, 'LABEL')
        console.log(task);
        task.contentEditable = true;
        task.style.backgroundColor = "#dddbdb";
        addDoneBut(label, task, todo);
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
    removeLocalstore(itemToDelete);
}

function editItem(editBut){
        var label = editBut.parentNode, task;
        task = searchChild(label, 'LABEL')
        console.log(task);
        task.contentEditable = true;
        task.style.backgroundColor = "#dddbdb";
        addDoneBut(label, task);
        //changeButtons(label, 'LABEL');
    
}


function addDoneBut(label,task,oldtask){
    var buttom = document.createElement("button");
    buttom.appendChild(document.createTextNode('Save'));
    buttom.className ='save';
    buttom.onclick = function(){
        task.contentEditable = false;
        task.style.removeProperty("background-color");
        console.log(task.innerHTML, oldtask)
        updateLocalStorage(task.innerHTML,oldtask);
        label.removeChild(buttom);
    }
    label.appendChild(buttom);
}

function updateLocalStorage(newt, old){
    var keys = Object.keys(localStorage), i ;

    for(i=0; i<keys.length; i++){
        const val = localStorage.getItem(keys[i]);
        
        if(old == val){
            console.log(keys[i], old, newt, val);
            //window.localStorage.removeItem(keys[i]);
            //addToLocalStorage(newt);
            window.localStorage.setItem(keys[i],newt);
        }
    }
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


function searchCheck(num){

}

//SAVING CHECKED BOX IN LOCAL STORAGE 
function saveCheck(check){
    console.log(check,check.checked);
    var checks = Object.keys(localStorage).filter(key => key.includes('check')), found;

    for (var i = 0; i < checks.length; i ++){
        if(checks[i] == check.id){
            found = true;
        }
    }

    if(!found){
        window.localStorage.setItem(check.id, check.checked);
    }

   

}

// UPDATE CHECKS
function updateStatus(check){
    window.localStorage.setItem(check.id, check.checked);
}

function showChecked(){
    // Get checked boxes list 
    var checks = Object.keys(localStorage).filter(key => key.includes('check'));
    console.log(checks)
    for(let i = 0; i < checks.length; i++){
          //var checked = JSON.parse(localStorage.getItem(checks[i]));
          var ischecked = window.localStorage.getItem(checks[i]);
          console.log(ischecked, typeof(ischecked));
          if(ischecked == 'false'){
            document.getElementById(checks[i]).checked = false;
          }else{
            document.getElementById(checks[i]).checked = true;
          }
         
          console.log(document.getElementById(checks[i]).checked );
      }
}




// TODO
// when delete, delete also from local storage DONE
// when edit, also edit from local storage DONE
// when check, check on local storage
// fix buttons with css 
// do profile page 
// save users with local storage
// look up save button issue -> it checks the box when you click it
// try to make the to do list page responsive 
