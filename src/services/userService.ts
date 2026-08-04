import api from "@/api/api";
import { LoginUser, RegisterUser } from "@/types/user";

export const registerUser = async (data: RegisterUser) => {


    try{
        const response = await api.post("/users/signup", data);
        return response.data;
    }catch(error){
            console.error("Error registering user:", error);
            // throw error;
    }
}


export const loginUser = async (data:LoginUser) =>{
    try{
        const response = await api.post("/auth/login", data);
        return response.data
    }catch(error){
            console.error("Error Logging in User:", error);
    }
}