import { MdOutlineEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

export default function ContactBox(){
    return(
<div className="bg-white rounded-2xl p-8 transform hover:translate-y-2 transition-all duration-300 border border-purple-100 ">
    <div className="flex items-center gap-4 mb-6">
<div className="bg-linear-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center">
<MdOutlineEmail fill="#ffffff" />
</div>
<div>
    <h3 className="text-xl font-bold text-gray-900">Email</h3>
    <p className="text-gray-600 text-sm">Official inquiries</p>
</div>
    </div>

    <a href="" className="text-lg font-semibold text-blue-600 hover:text-blue-700 block mb-2">bitbandyevents@gmail.com</a>
        <p className="text-gray-600 mb-4">Best for account issues, receipts, compliance questions, and detailed troubleshooting.</p>
        <div className="flex items-center gap-4">
            <FaClock fill="#6b7280" />
            <p className="text-sm text-gray-500">Response: Within 24 hours</p>
        </div>
</div>
    )
}