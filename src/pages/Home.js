import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home=()=>{
    const notify = () => toast("You are in the Home Page!");
    return (<>
    This is Home page
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
    
    </>);
};
export default Home;