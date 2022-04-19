import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import ToastContext from '../context/ToastContext';

export const CreateContact = () => {

    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const {toast} = useContext(ToastContext);

    const [userDetails , setUserDetails] = useState({
        name:"",
        address:"",
        email: "",
        phone: "",
    });
    

    const handleInputChange = event =>{
        const {name , value} = event.target;
        setUserDetails({...userDetails , [name]: value});
    }
       
    const handleSubmit = async (event) =>{
        event.preventDefault();
       
        const res = await fetch(`http://localhost:5000/api/contact`, {
            method: "POST",
           headers:{
              
               "Authorization": `Bearer ${localStorage.getItem("token")}`,
           },
           body: JSON.stringify(userDetails),
        });
         const result = await res.json();
         if(!result.error){
             toast.success(`contact ${userDetails.name} created`)
             setUserDetails({name: "", address:"", email:"",phone:""});
         }else{
             toast.error(result.error);
         }
    }

  return (
    <div>
        <h2> Create your contact here</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput" className="form-label mt-4">
            Name 
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name = "name"
            value = { userDetails.name}
            onChange = {handleInputChange}
            placeholder="Prashant Sharma"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressInput" className="form-label mt-4">
            Address 
          </label>
          <input
            type="text"
            className="form-control"
            id="addressInput"
            name = "address"
            value = { userDetails.address}
            onChange = {handleInputChange}
            placeholder="New Baneshwor-10, LakkhechaurMarga"
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
            value = {userDetails.email}
            onChange = {handleInputChange}
            placeholder="emailname@example.com"
            required
          />
        </div>
          
        <div className="form-group">
          <label htmlFor="phoneInput" className="form-label mt-4">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneInput"
            aria-describedby="emailHelp"
            name = "phone"
            value = {userDetails.phone}
            onChange = {handleInputChange}
            placeholder="9845128551"
            required
          />
        </div>
        <input type="submit" value="add contact" className="btn btn-info my-3" />

        
        


        </form>
    </div>
  )
}
export default CreateContact;