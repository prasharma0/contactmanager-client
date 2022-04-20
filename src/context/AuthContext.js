import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import ToastContext from "./ToastContext";

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{ //takes children as the prop
    const {toast} = useContext(ToastContext);
    const navigate = useNavigate();
    const location = useLocation();


    const [user, setUser] = useState(null);
    // const [error, setError]= useState(null);
 

    useEffect(()=>{   //we want to execute this only once when the page gets load.
     checkIfUserLoggedIn();
    },[])


    //check if the user is logged in
    const checkIfUserLoggedIn = async()=>{
        try {
           const res = await fetch(`http://localhost:5000/api/me`,{
               method: "GET",
               headers: {
                   "Authorization":`Bearer ${localStorage.getItem("token")}`,
               },
           });
           const result = await res.json();
           if(!result.error){

            if(location.pathname === "/login" || location.pathname ==="/register"){
                navigate("/", {replace: true});
            }else{
                navigate(location.pathname ? location.pathname : "/")
            }
               setUser(result); //state gets updated until we log out.
               
               
              
           } else{
            navigate("/login",{replace: true});
           }
        } catch (err) {
            console.log(err); //catching the error occured from the server;
        }
    }


    //loin request
      const loginUser = async(userData)=>{
          try {
              const res = await fetch(`http://localhost:5000/api/login`,{
                  method : "POST",
                  headers: {
                      "Content-Type" : "application/json"
                  },
                  body: JSON.stringify({...userData}), //takes parameter as userData while requesting and then splits 
              });
               const result = await res.json();
             if(!result.error){
        
               localStorage.setItem("token", result.token);
               setUser(result.user);
               toast.success(`Logged in ${result.user.name}`);

               navigate("/", {replace: true});
             }else{
                 toast.error(result.error);
                 
             }
          } catch (err) {

              console.log(err)
          }
      }
    //register request
    const registerUser = async(userData)=>{
        try {
            const res = await fetch(`http://localhost:5000/api/register`,{
                method: "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...userData}),
                
            });
            
            const result = await res.json();
          

            if(!result.error){
                toast.success("user registered successfully !")
                navigate("/login" , {replace :true});

            }else{
                toast.error(result.error);
            }
        } catch (err) {
            console.log(err)
        }
    }
       
    const createContact = async(userData)=>{
        try {
        
        } catch (err) {
            console.log(err);
        }
    }

    return <AuthContext.Provider value ={{loginUser, registerUser, user, setUser} }>{children}</AuthContext.Provider> //returning the props
}
export default AuthContext;