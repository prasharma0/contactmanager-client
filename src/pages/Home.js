import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Home=()=>{
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
   useEffect(()=>{
    !user && navigate("/login",{replace:true});
   },[]);
   return <>This is Home Page !</>
};
export default Home;