import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Signup (){
     
    return(
        <>
        <div className="h-screen">
            <div className="flex flex-row justify-center items-center mx-40 my-14 h-140">
                <div className="flex flex-col flex-1 gap-4 bg-offwhite border border-gray-500 p-12 rounded-l-3xl h-full">
                    <div className="flex items-center ">
                        <MdKeyboardArrowLeft />
                        <p>Back home</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center">
                            <p>1</p>
                        </div>
                        <div>
                            <p>Step 1</p>
                            <p className="text-sm text-gray-600">Choose your role</p>
                        </div>
                        <div>
                        <div className="w-52 border-t border-gray-300 mt-4"></div>
                        </div>
                        <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center">
                            <p>2</p>
                        </div>
                        <div>
                            <p>Step 2</p>
                            <p className="text-sm text-gray-600">Create your account</p>
                        </div>

                        
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Create your Bitbandy account</h2>
                        <p className="text-gray-600">Tell us how you plan to use Bitbandy so we can tailor your experience</p>
                    </div>
                    <div className="flex gap-4 my-4">
                        <div className="bg-gray-100 px-4 py-8 rounded-lg border border-gray-300 w-70 cursor-pointer hover:bg-purple-50 hover:border-purple-500">
                            <p className="text-gray-600 text-sm border rounded-lg px-2 w-30 bg-white">For ticket buyers</p>
                            <p className="font-semibold leading-tight py-2">I want to discover and attend events</p>
                            <p className="text-gray-600 text-sm">Save favourites, manage tickets and check in seamlessly.</p>
                        </div>
                         <div className="bg-gray-100 px-4 py-8 rounded-lg border border-gray-300 w-70 cursor-pointer hover:bg-purple-50 hover:border-purple-500">
                            <p className="text-gray-600 text-sm border rounded-lg px-2 w-40 bg-white">For event organizers</p>
                            <p className="font-semibold leading-tight py-2">I want to host events and sell tickets</p>
                            <p className="text-gray-600 text-sm">Publish events, track sales and manage guests in one dashboard.</p>
                        </div>
                    </div>
                    <Link href="/signUpForm"><button className="bg-purple-500 w-35 text-white rounded-lg p-2" >Continue</button></Link>
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