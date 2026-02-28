export default function Help(){
    return(
<>
<section className="bg-linear-to-br from-[#9139f6] via-[#a855f7] to-[#c084fc] py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
            <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Still Need Help?</h2>
            <p className="mb-10 text-xl text-purple-100">We’ll help you resolve issues fast—use the chat bot for instant answers or email for official support.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/">
                <button className="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#9139f6] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100]">Email Our Team</button>
                </a>
                <a href="" className="hidden">
                <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">Contact Sales</button>
            </a>
            </div>
            <p className="mt-6 text-sm text-purple-200">Response within 24 hours • Dedicated support team • 24/7 automated assistance</p>
           </div>     
        </div>

        </div>

        </section>
</>
    )
}