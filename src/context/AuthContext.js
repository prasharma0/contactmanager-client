import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{ //takes children as the prop
    const [user, setUser] = useState(null);
    const [error, setError]= useState(null);
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
             }else{
                //  setError(result.error);
                //  toast.error(error);
                //  setError(null);
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
                console.log(result);
            }else{
                console.log("error",result);
            }
        } catch (err) {
            console.log(err)
        }
    }
    return <AuthContext.Provider value ={{loginUser, registerUser} } ><ToastContainer />{children}</AuthContext.Provider> //returning the props
}
export default AuthContext;