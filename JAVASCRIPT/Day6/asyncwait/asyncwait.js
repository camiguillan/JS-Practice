async function fetchUserData(userId) {
  let response;
  response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  let responsepost = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
  const userInfo = await response.json();
  const postInfo = await responsepost.json();
 

  let postUser= {
    user: userInfo,
    post: postInfo,
  }


  return postUser;

}



async function displayUserData(userId) {
  try {
    const postUser = await fetchUserData(userId);
    console.log(`User ${userId}: ${postUser.user.name} (${postUser.user.email})`);
    appendToDom(postUser,userId);

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

var id = 0;

function createId(){
  return id++;
}

function appendToDom(postUser, userId){

  const container = document.createElement('label');
  container.id = createId();
  container.className = 'container';
  document.getElementById('cont').appendChild(container);

  //appending user
  const pUser = document.createElement("h3");
  pUser.innerHTML = `User ${userId}: ${postUser.user.name} (${postUser.user.email})`;
  document.getElementById(container.id).appendChild(pUser);

  //appending post 

  //apending title 
  const postTitle = document.createElement('h4');
  postTitle.innerHTML = `Post ${postUser.post.id}: Title: ${postUser.post.title} `;
  document.getElementById(container.id).appendChild(postTitle);

  //appending body
  const p2 = document.createElement('p');
  p2.innerHTML = ` Body:(${postUser.post.body})`;
  document.getElementById(container.id).appendChild(p2);

}

  
  
  