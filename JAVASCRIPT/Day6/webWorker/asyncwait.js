async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    return user;
  }
  
  async function displayUserData(userId) {
    try {
      const user = await fetchUserData(userId);
      console.log(`User ${userId}: ${user.name} (${user.email})`);
    } catch (error) {
      console.error(`Failed to fetch user data: ${error}`);
    }
  }
  
  displayUserData(1);
 

  
  
  