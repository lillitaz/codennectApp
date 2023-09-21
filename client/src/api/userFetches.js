const baseUrl = 'http://localhost:8080';

function encodeCredentials(username, password) {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);
  return `Basic ${encodedCredentials}`;
}

async function fetchAllUsers() {
    const url = `${baseUrl}/api/user/allUsers`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function fetchUserByUsername(username, password, targetUsername) {
    const url = `${baseUrl}/api/user/${targetUsername}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': encodeCredentials(username, password),
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async function signUp(newUser) {
    const url = `${baseUrl}/api/user/signup`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async function login(userLoginRequest) {
    const url = `${baseUrl}/api/user/login`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userLoginRequest),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
async function updateUserById(username, password, userId, userUpdateRequest) {
    const url = `${baseUrl}/api/user/${userId}`;
  
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Authorization': encodeCredentials(username, password),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userUpdateRequest),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async function deleteUser(username, password, userId) {
    const url = `${baseUrl}/api/user/delete/${userId}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': encodeCredentials(username, password),
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

export {fetchAllUsers, fetchUserByUsername, login, signUp, deleteUser, updateUserById};