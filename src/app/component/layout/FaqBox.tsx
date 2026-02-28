import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqBox(){
    return(
        <>
        
                <div className="space-y-4 max-w-4xl mx-auto my-4">
                <div className="group border border-purple-100 rounded-2xl bg-white hover:shadow-md transition-shadow duration-700 overflow-hidden">
                    <button className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-purple-50/60 transition-colors duration-200">
<div className="flex items-start gap-4">
    <div className="p-2.5 rounded-xl border bg-blue-50 text-blue-700 border-blue-100 mt-0.5">
<div className="text-lg">
    <FaCircleQuestion />
</div>
    </div>
    <div className="min-w-0">
        <h3 className="font-bold text-lg text-gray-900 leading-snug">
            What is Bitbandy?
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 ">
                General
            </span>
            <span className="text-xs text-gray-500">
                Click to expand
            </span>
        </div>
    </div>
</div>
<div className="shrink-0 pt-1">
    <IoIosArrowDown />
</div>
                    </button>
                </div>

                </div>
        </>
    )
}