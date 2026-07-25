import api from "@/api/api";
import { RegisterUser } from "@/types/user";

export const registerUser = async (data: RegisterUser) => {


    try{
        const response = await api.post("/users/signup", data);
        return response.data;
    }catch(error){
            console.error("Error registering user:", error);
    }
}