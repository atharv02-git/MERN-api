import axios from "axios";

// end point
const API_URL = "/api/users";

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // check whether data is present or not
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data
};

const authService = {
    register
}

export default authService