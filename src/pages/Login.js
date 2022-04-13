import { useState } from "react";
import {Link} from "react-router-dom";
const Login = () => {

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
    }
  return (
    <>
      <h3>Login</h3>

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
            onChange = {handleInputChange}
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
