function signin(){
       
    var users = JSON.parse(window.localStorage.getItem('Users')) || [];

    var userOrEmail = document.getElementById("user").value;
    var password = document.getElementById("psw").value;
    var session = true;

    users.forEach(user => {
        
        if((user.Username == userOrEmail || user.Email == userOrEmail) && user.Password == password){         
            window.localStorage.setItem("currentUser",user.Username);
            window.location.href = './toDo.html';
        }else{
            session = false;
        }
    });
    
    if(!session){
        window.alert("Password or username is wrong");   
    }
    
    
}