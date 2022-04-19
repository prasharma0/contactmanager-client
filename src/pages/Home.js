import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Home=()=>{
  
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
   useEffect(()=>{
    !user && navigate("/login",{replace:true});
   },[]);
   return <>
        <div className="jumbotron">
  <h3 >Welcome {user? user.name : null}</h3>
  <p className="lead">This is your dashboard</p>
  <hr className="my-4"/>
  
  <a className="btn btn-info" href="#" role="button">add contact</a>
</div>
   
   
   </>
};
export default Home;