import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../context/AuthContext";

const Register=()=>{
  const {registerUser} = useContext(AuthContext);
    const[credentials, setCredentials]= useState({
        name : "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange =(event)=>{
        const{ name , value} = event.target;

        setCredentials({...credentials, [name]:value})
    };

     const handleSubmit = (event)=>{
         event.preventDefault();
        //  console.log(credentials);
         if(!credentials.name || !credentials.email || !credentials.password || !credentials.confirmPassword){
          toast.error("please enter all the required fields!")
          return;
         };
         if(credentials.password !== credentials.confirmPassword){
          toast.error("password did not matched!")
          return;
        }
        const userData = {...credentials };
        registerUser(userData);
         
     };
    

    return (
        <>
        <ToastContainer />
        <h3>Create your account</h3>

<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="nameInput" className="form-label mt-4">
      Your Name
    </label>
    <input
      type="text"
      className="form-control"
      id="nameInput"
      name = "name"
      value = {credentials.name}
      onChange ={handleInputChange}
      placeholder="Prashant Sharma"
      required
    />
  </div>

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
      onChange ={handleInputChange}
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
      value = {credentials.password}
      onChange ={handleInputChange}
      placeholder="Enter password"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="confirmPassword" className="form-label mt-4">
      Confirm Password
    </label>
    <input
      type="password"
      className="form-control"
      id="confirmPassword"
      name = "confirmPassword"
      value = {credentials.confirmPassword}
      onChange ={handleInputChange}
      placeholder="Enter password"
      required
    />
  </div>
  <input type="submit" value="Register" className="btn btn-primary btn my-3" />
  <p> Already have an account ? Login <Link to = "/login"> here</Link></p>
</form>
        
        
        </>
    )
};
export default Register;