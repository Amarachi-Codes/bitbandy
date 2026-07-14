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
                    <div className="flex flex-row justify-center items-center mx-40 my-14 h-140">
                        <div className="flex flex-col flex-1 gap-4 bg-offwhite border border-gray-500 p-12 rounded-l-3xl h-full">
                            <div className="flex items-center ">
                                <MdKeyboardArrowLeft />
                                <Link href="/signUp"><p>Back home</p></Link>
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
                            <div className="flex gap-4 my-4">
                                
                            </div>
                            <Link href="/signUpForm"><button className="bg-purple-500 w-full text-white rounded-lg p-2" >Register now</button></Link>
                            <div className="text-center">
                                <p>Already have an account? <span onClick={()=> setIsOpen(true)} className="text-purple-500 cursor-pointer">Sign in</span></p>
                                <SignInModal isOpen={isOpen} 
                                          onClose={() => setIsOpen(false)} />
                            </div>
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