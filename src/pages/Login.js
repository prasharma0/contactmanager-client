import React, { useContext } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../context/AuthContext";

const Login = () => {
 
  const {loginUser} = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        email:"",
        password: ""
    });

    const handleInputChange = (event)=>{
        const{name , value} = event.target; //destructuring these name and value from the event.target

        setCredentials({...credentials, [name]:value})
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        // console.log("data", credentials);
        if( !credentials.email || !credentials.password){
          toast.error("please enter all the required fields!");
          return;
         }
         loginUser(credentials); //email and password
    }
    
    
  return (
    <>
    <ToastContainer />
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailInput" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name = "email"
            value = {credentials.email}
            onChange = {handleInputChange}
            placeholder="emailname@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name = "password"
            value = { credentials.password}
            onChange = {handleInputChange}
            placeholder="Enter password"
            required
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn my-3" />
        <p> Don't have an account ? Sign up <Link to = "/register"> here</Link></p>
      </form>
    </>
  );
};
export default Login;
