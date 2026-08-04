"use client"

import { loginUser } from "@/services/userService";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";

import { useState } from "react";



export default function SignInModal ({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
    if(!isOpen) return null;
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [successMessage, setSuccessMessage] = useState('')
   const [isLoading, setIsLoading] = useState(false);
   const clearForm= ()=>{
    setEmail('');
    setPassword('');
   }
   const Router = useRouter();

   const handleSignIn= async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setErrorMessage('');
    setSuccessMessage('');
    const loginData = {
  email,
  password,
}

try{
setIsLoading(true)

const {accessToken, refreshToken, user} = await loginUser(loginData)
{setSuccessMessage("User logged in successfully!")};
localStorage.setItem("accessToken", accessToken);
localStorage.setItem("refreshToken", refreshToken);
localStorage.setItem("user", JSON.stringify(user));
clearForm(); 

setTimeout(() => {
  onClose();
  Router.push("/")
}, 2000);
}catch(error){
  if (axios.isAxiosError(error) && error.response) {
    setErrorMessage(
      error.response.data.message ??
      "Login Failed."
    );
  } else {
    setErrorMessage("An error occurred during login.");
  }
}finally{
  setIsLoading(false)
}
   }
  return (
    <div onClick={onClose} className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
      <div onClick={(e)=> e.stopPropagation()} className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <button onClick={onClose} className="absolute right-145 top-38 text-black ">X</button>
     <div className="text-center mb-6">
      <h2 className="text-3xl font-semibold">Welcome Back</h2>
      <p className="text-gray-400 ">We've missed you so much</p>
      </div>
      <form onSubmit={handleSignIn} className="space-y-6">
        <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange ={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="border border-gray-300 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange ={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="border border-gray-300 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <p className="text-purple-500 hover:underline cursor-pointer absolute left-210 bottom-62 ">Forgot Password?</p>
        
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button type="submit" className="bg-purple-500 text-white py-2 px-4 my-8 w-full rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
          
        {isLoading ? 
        (
        <>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        Logging In...
        </>
        )
        :
        ("Sign In")
      }
        
        </button>
        <p className="text-black text-sm text-center">Don't have an account? <span className="text-purple-500 hover:underline cursor-pointer">Sign Up</span></p>
      </form>
    </div>
     </div>
  )
}


