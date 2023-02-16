// The throw statement defines a custom error.
try {
    var user_input = 10, limit = 9;

    if(user_input > limit) throw "You should choose a lower value, hence the limit is " + limit; 

}catch(err){
    console.log("Trying throw statement: " , err);
}