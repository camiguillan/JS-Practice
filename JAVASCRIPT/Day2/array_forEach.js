let text = ""
function listItems(item, array){
    index = findIndex(item, array)
    text += index + '. ' + item + "\n"; // Text must be a global variable, we add the elements to it 
}

function findIndex(item, array){
    let index
    length = array.length;
    for(i=0; i<length; i++){
        if (item == array[i])
            index = i;
    }
    return index;
}

const items = ["chair", "table", "computer", "fridge", "microwave"];

items.forEach(item => listItems(item,items));
console.log(text);


