import React from "react";
import axios from "axios";
const SignApi = () => {

  const base = "https://bca-file-backend.onrender.com";


  async function SignInApi(value) {
    try {
      const URL = `${base}/login`;
      console.log(URL);
      const response = await axios.post(URL, value);
      console.log(response);
      const data = await response.data.token;
      console.log(data);
      return data;
    } catch (error) {
      // Throw the error response if it exists, otherwise throw the error itself
        throw new Error(error.message);
      }
    
  }

  async function signUpAPI() {}

  return { signUpAPI, SignInApi };
};

export default SignApi;
