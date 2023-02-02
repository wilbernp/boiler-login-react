import localStorageUtils from "@/utils/localStorage.utils";
import { useEffect } from "react";

export default function useAuth(){
    useEffect(() => {
      localStorageUtils.getItem("token")
      
    }, [])
    
}