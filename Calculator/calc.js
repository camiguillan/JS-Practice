(function(){
    document.addEventListener('DOMContentLoaded', start, false);
})();


//CREATING AN EVENT LISTENER

function start(){
    
    document.getElementById("but*").addEventListener("click", function(){addText("*");} );
    document.getElementById("but/").addEventListener("click", function(){addText("/");} );
    document.getElementById("but+").addEventListener("click", function(){addText("+");} );
    document.getElementById("but-").addEventListener("click", function(){ addText("-") ;} );
    document.getElementById("but%").addEventListener("click", function(){ addText("%") ;} );
    document.getElementById("button0").addEventListener("click", function(){addText("0")});
    document.getElementById("button1").addEventListener("click", function(){addText("1")});
    document.getElementById("button2").addEventListener("click", function(){addText("2")});
    document.getElementById("button3").addEventListener("click", function(){addText("3")});
    document.getElementById("button4").addEventListener("click", function(){addText("4")});
    document.getElementById("button5").addEventListener("click", function(){addText("5")});
    document.getElementById("button6").addEventListener("click", function(){addText("6")});
    document.getElementById("button7").addEventListener("click", function(){addText("7")});
    document.getElementById("button8").addEventListener("click", function(){addText("8")});
    document.getElementById("button9").addEventListener("click", function(){addText("9")});
    document.getElementById("equal").addEventListener("click", function(){resolve()});
    document.getElementById("clear").addEventListener("click", function(){clear()});
 
};


function addText(elem) {
    
    if(document.getElementById("input").innerHTML == "SINTAX ERROR"){
        clear();
    }
    document.getElementById("input").innerHTML += elem;

}

function resolve(){
    var ecuacion = document.getElementById("input").innerHTML;
    var result;
    try{
        result = eval(ecuacion);
     }
     catch(err){
        result = "SINTAX ERROR";
     }
    
    document.getElementById("input").innerHTML = result;
}

function clear(){
    document.getElementById("input").innerHTML = null;
}