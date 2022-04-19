import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';


const AllContact= ()=>{
    const [contacts , setContacts] = useState([]);
  useEffect(async()=>{
   try {
       const res = await fetch(`http://localhost:5000/api/mycontacts`, {
           method: "GET",
           headers:{
               "Authorization":`Bearer ${localStorage.getItem("token")}`,

           }
       });
       const result = await res.json();
       if(!result.error){
        setContacts(result);
       }else{
           console.log(result)
       }
   } catch (err) {
       console.log(err);
   }
  },[]);
    
  
   return <>
        <div >
  <h3 >Your Contact list</h3>
  <hr className="my-4"/>
   
  <table className="table table-hover">
  <thead>
    <tr className='table-active'>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Phone number</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-success">
      <th scope="row">Active</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    
  </tbody>
</table>




</div>
   
   
   </>
};
export default AllContact;