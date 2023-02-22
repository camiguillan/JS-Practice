onmessage = function(e){
    var limit = e.data;
    
    for(var i = 0; i < limit; i++){
        document.getElementById("result").innerHTML = i;
    }

    postMessage("Counting numbers till" , limit.toString());
  }

