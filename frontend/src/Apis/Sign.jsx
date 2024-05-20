import React from "react";
import axios from "axios";
const Sign = () => {
  const base = "http://localhost:5000";
  async function signUp(value) {
    try {
      const URL = `${base}/api/register`;
      console.log(URL);
      const response = await axios.post(URL, value);
      console.log(response);
      const data = await response.data.message;
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }

  async function SignIn() {}

  return { signUp, SignIn };
};

export default Sign;
