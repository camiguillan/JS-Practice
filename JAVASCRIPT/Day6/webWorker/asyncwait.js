async function fetchUserData(userId) {
  let response;
  response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await response.json();
  console.log(response);
  console.log(user);
  return user;

}



async function displayUserData(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log(`User ${userId}: ${user.name} (${user.email})`);
    const element = document.createElement("p");
    element.innerHTML = `User ${userId}: ${user.name} (${user.email})`;
    document.getElementById('cont').appendChild(element);
  } catch (error) {
    console.error(`Failed to fetch user data: ${error}`);
  }
}

async function displayUsers(){
  for(var i=1; i<=10;i++ ){
   await displayUserData(i);
  
  }
  
}

displayUsers();

  
  
  