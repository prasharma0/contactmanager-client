import { useState } from "react";
import { Link } from "react-router-dom";

const Register=()=>{
    const[credentials, setCredentials]= useState({
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
     }

    return (
        <>
        <h3>Create your account</h3>

<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="emailInput" class="form-label mt-4">
      Email address
    </label>
    <input
      type="email"
      class="form-control"
      id="emailInput"
      aria-describedby="emailHelp"
      name = "email"
      value = {credentials.email}
      onChange ={handleInputChange}
      placeholder="emailname@example.com"
      required
    />
  </div>

  <div class="form-group">
    <label for="passwordInput" class="form-label mt-4">
      Password
    </label>
    <input
      type="password"
      class="form-control"
      id="passwordInput"
      name = "password"
      value = {credentials.password}
      onChange ={handleInputChange}
      placeholder="Enter password"
      required
    />
  </div>

  <div class="form-group">
    <label for="confirmPassword" class="form-label mt-4">
      Password
    </label>
    <input
      type="password"
      class="form-control"
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