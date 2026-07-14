import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Signup (){
     
    return(
        <>
        <div className="h-screen">
            <div className="flex flex-row h-screen gap-8 justify-center items-center">
                <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center ">
                        <MdKeyboardArrowLeft />
                        <p>Back home</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="rounded-full bg-amber-300 w-8 h-8 flex items-center justify-center">
                            <p>1</p>
                        </div>
                        <div>
                            <p>Step 1</p>
                            <p>Choose your role</p>
                        </div>
                        <div>
                        <p> ----------------</p>
                        </div>
                        <div className="rounded-full bg-amber-300 w-8 h-8 flex items-center justify-center">
                            <p>2</p>
                        </div>
                        <div>
                            <p>Step 2</p>
                            <p>Create your account</p>
                        </div>

                        
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Create your Bitbandy account</h2>
                        <p className="text-gray-400">Tell us how you plan to use Bitbandy so we can tailor your experience</p>
                    </div>
                    <div>
                        <div>
                            <p>For ticket buyers</p>
                            <p>I want to discover and attend events</p>
                            <p>Save favourites, manage tickets and check in seamlessly.</p>
                        </div>
                         <div>
                            <p>For ticket buyers</p>
                            <p>I want to discover and attend events</p>
                            <p>Save favourites, manage tickets and check in seamlessly.</p>
                        </div>
                    </div>
                    <button>Continue</button>
                    <p>By continuing, you agree to Bitbandy's <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
                </div>
                <div className="">
                    <img className=" bg-transparent max-h-100" src="	https://bitbandy.com/_next/image?url=%2Fimages%2Fbitbandy-signup.jpg&w=2048&q=75" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}