import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogin = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = (email,password)=>{
        setIsLoading(true);
        setError(null);
        if(email=="admin@gmail.com" && password=="1234")
        {  
             localStorage.setItem("admin",JSON.stringify({email,password}))
             dispatch({type:"LOGIN",payload:{email,password}})
             setIsLoading(false);

        }
        else{
            setIsLoading(false);
            setError("Email and Password are Incorrect")
        
        }
        
        

    }
    return {login,isLoading,error};

    
}