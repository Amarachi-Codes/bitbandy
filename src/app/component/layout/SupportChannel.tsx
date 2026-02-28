import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

export default function SupportChannel(){
return(
    <>
    <div className="space-y-8 container mx-auto px-4 md:px-8 max-w-7xl py-4">
<div className="bg-linear-to-r from white to-purple-50 rounded-2xl overflow-hidden border border-purple-100">
<div className="md:flex">
<div className="md:w-1/4 bg-linear-to-br from-blue-500 to cyan-500 p-8 flex flex-col items-center justify-center text-white">
<div className="text-5xl mb-4">
    <MdEmail />

</div>
<h3 className="text-center text-2xl font-bold">Email Support</h3>
<p className="text-center opacity-90 mt-2">Within 24 hours</p>
</div>
<div className="md:w-3/4 p-8">
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-1">
<h4 className="text-lg font-bold text-gray-900 mb-2">
    bitbandyevents@gmail.com
</h4>
<p className="text-gray-600 mb-6">For detailed inquiries, account issues, and official correspondence.</p>
<h5 className="font-semibold text-gray-900 mb-3">Best For</h5>
<div className="flex flex-wrap gap-2">
    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Technical issues</span>
    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Account problems</span>
    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Legal matters</span>
    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Business inquiries</span>
</div>
</div>
<div className="md:w-52">
    <div className="w-full bg-linear-to-r from-blue-500 to-cyan-500 rounded-full">
    <a href="" className="block w-full rounded-full text-center font-semibold py-3 px-6 text-white hover:opacity-95 transition-opacity">Send Email</a>
    </div>
    
    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
        <FaClock fill="#6b7280"/>
        <span>Within 24 hours</span>
    </div>
</div>
</div>
</div>
</div>
    </div>
    </div>
    </>
)

}