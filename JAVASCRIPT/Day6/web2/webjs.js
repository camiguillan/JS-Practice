var phraseArr = [];

function changeToUpperCase(){
    var phrase = document.getElementById("phrase");
    phrase.value = phrase.value.toUpperCase();
    
}

function submitPhrase(){
    var phrase = document.getElementById("phrase").value;
    document.getElementById("phrase").value = "";
    phraseArr.push(phrase);
    console.log(phraseArr);
}

function showArr(){
    const len = phraseArr.length;

    try{
        if(phraseArr == null){
            throw "CANNOT SHOW ANYTHING, THE ARRAY IS EMPTY";
        }else{
            document.getElementById("phrases").style.display = 'block';
            document.getElementById("phrases").innerHTML = phraseArr.join(", ");
            //for(var i=0; i<len; i ++){
            //    document.getElementById("phrases").innerHTML = phraseArr[i];
           //}
        }
    }catch(err){
        document.getElementById("show").innerHTML = err;
    }
    
    
}


function hideArr(){
    document.getElementById("phrases").style.display = 'none';
}

/*
function nothing(){
    document.getElementById("demo").innerHTML = '-'; 
}

function interv(){
    setInterval(nothing, 100);
}

document.getElementById("demo").innerHTML = interv();


*/