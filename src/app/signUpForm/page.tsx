"use client"
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SignInModal from "../signIn/page";
import { RegisterUser } from "@/types/user";
import { registerUser } from "@/services/userService";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUpForm (){
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
 console.log(email, firstName, lastName, password, confirmPassword)
const clearForm = ()=>{
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmPassword('');
}
const Router = useRouter();
    


    
    
const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
    
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const user:RegisterUser = {
        email,
        firstName,
        lastName,
        password
    }

    try{
        setIsLoading(true);
      const response =  await registerUser(user);
      setSuccessMessage(
        response.message || "User registered successfully!"
    );
      console.log("User registered successfully:", response);
      clearForm();
      setTimeout(() => {
        Router.push("/")
      }, 2000);
    }
    catch(error){
        if(axios.isAxiosError(error)&& error.response){
            setErrorMessage(
                error.response?.data?.message ??
             "An error occurred during registration."
            );
        }else{
            setErrorMessage("Something went wrong.");
        }
        console.error("Error registering user:", error);
        
    }
    finally{
        setIsLoading(false);
    }
    }
    return(
        <>
        <div className="h-screen">
                    <div className="flex flex-row justify-center items-center mx-40 my-14 h-180">
                        <div className="flex flex-col flex-1 gap-4 bg-offwhite border border-gray-500 p-12 rounded-l-3xl h-full">
                            <div className="flex items-center ">
                                <MdKeyboardArrowLeft />
                                <Link href="/"><p>Back home</p></Link>
                            </div>
                            <div className="flex gap-4">
                                <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center">
                                    <p>1</p>
                                </div>
                                <div>
                                    <p>Step 1</p>
                                    <p className="text-xs text-gray-600">Choose your role</p>
                                </div>
                                <div>
                                <div className="w-52 border-t border-purple-500 mt-4"></div>
                                </div>
                                <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center">
                                    <p>2</p>
                                </div>
                                <div>
                                    <p>Step 2</p>
                                    <p className="text-xs text-gray-600">Create your account</p>
                                </div>
        
                                
                            </div>
        
                            <div>
                                <h2 className="text-2xl font-semibold">Create your account</h2>
                                <p className="text-gray-600">Sign up to start discovering curated experiences near you on Bitbandy.</p>
                            </div>

                            <form onSubmit={handleSignUp} >
                            <div>
                                
                            <div className="flex gap-4 my-4 ">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                            </div>
                            <div className="flex gap-4 my-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                
                            </div>

                            <div className="flex gap-4 my-4">
                                
                                <div className="flex flex-col gap-2 w-1/2">
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="password" id="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                
                            </div>
                            </div>

                                {
                                    errorMessage && (
                                        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                                    )
                                }

                                {
                                    successMessage && (
                                        <p className="text-green-500 text-sm mb-4">{successMessage}</p>
                                    )
                                }

                            <button type="submit" className="bg-purple-500 w-full text-white rounded-lg p-2">
                                {isLoading ? (
                                            <>
                                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                            Logging In...
                                            </>):("Register Now")}
                                
                                </button>
                            </form>
                            <div className="text-center">
                                <p>Already have an account? <span onClick={()=> setIsOpen(true)} className="text-purple-500 cursor-pointer">Sign in</span></p>
                                <SignInModal isOpen={isOpen} 
                                          onClose={() => setIsOpen(false)} />
                            </div>
                            <div className="mx-8 my-4"><Link href="/signUp" className="text-purple-500">Back</Link></div>
                            <p className="text-xs text-gray-500">
                                By continuing, you agree to Bitbandy's <span className="text-purple-500 ">Terms of Service</span> and <span className="text-purple-500">Privacy Policy</span>.
                            </p>
                        </div>
                       
                        <div className="flex flex-col flex-1 h-full">
                            <img className=" bg-transparent object-cover h-full w-full" src="	https://bitbandy.com/_next/image?url=%2Fimages%2Fbitbandy-signup.jpg&w=2048&q=75" alt="" />
                        </div>
                    </div>
                </div>
                 
        
        </>

    )
}
