

function submitUser(){


    if(document.getElementById("pass").value != document.getElementById("repass").value){
        window.alert("Password and repeat must be the same!");
        return 0;
    }
    
    var users = JSON.parse(window.localStorage.getItem('Users')) || [];

    // var userData = 
    // [{Name:document.getElementById("name").value},
    // {Surname:document.getElementById("surn").value},
    // {Photo:document.getElementById("photo").value},
    // {Gender:document.getElementById("gender").value},
    // {Address:document.getElementById("address").value},
    // {Email:document.getElementById("email").value},
    // {Username:document.getElementById("user").value},
    // {Password:document.getElementById("pass").value}];

    var userData = 
    {Name:document.getElementById("name").value,
    Surname:document.getElementById("surn").value,
    Photo:document.getElementById("photo").value,
    Gender:document.getElementById("gender").value,
    Address:document.getElementById("address").value,
    Email:document.getElementById("email").value,
    Username:document.getElementById("user").value,
    Password:document.getElementById("pass").value};

    console.log(userData);

    users.push(userData);
    window.localStorage.setItem('Users', JSON.stringify(users));

    window.location.href = './signin.html';
}