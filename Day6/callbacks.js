let array = ["table", "computer", "keyboard", "chair", "cellphone"];

function apply(myFunction, element){
    myFunction(element);
}

function showElement(element){
    console.log(element.toUpperCase());
}

array.forEach(el => apply(showElement, el));

