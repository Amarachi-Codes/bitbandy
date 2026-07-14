"use client"
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SignInModal from "../signIn/page";

export default function SignUpForm (){
    const [isOpen, setIsOpen] = useState(false)
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
                            <div>
                            <div className="flex gap-4 my-4 ">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Enter your email" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id="firstname" placeholder="Enter your first name" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                            </div>
                            <div className="flex gap-4 my-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id="lastname" placeholder="Enter your last name" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter your password" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                
                            </div>

                            <div className="flex gap-4 my-4">
                                
                                <div className="flex flex-col gap-2 w-1/2">
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="password" id="confirmpassword" placeholder="Confirm your password" className="border border-gray-300 rounded-lg p-2 placeholder:px-4 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500" />
                                </div>
                                
                            </div>
                            </div>
                            <Link href="//signUp"><button className="bg-purple-500 w-full text-white rounded-lg p-2" >Register now</button></Link>
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