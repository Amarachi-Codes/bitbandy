import { FaRegLightbulb } from "react-icons/fa";
import { PiFishSimpleBold } from "react-icons/pi";
import { FaCrown } from "react-icons/fa";
import Link from "next/link"
import { MdCatchingPokemon } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { RiUserCommunityLine } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { MdBusiness } from "react-icons/md";
import { GiTheater } from "react-icons/gi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";

export default function AboutPage(){
    return(
        <>
        <div className="flex flex-col items-center justify-center bg-[#a34ff7] w-full h-screen">
        <div className="rounded-2xl py-2 px-4 bg-[#b471f9] flex items-center gap-2 mb-4">
            <FaCrown fill="#facc15" />
        <p className=" text-white  ">#1 Event Platform in Nigeria</p>
        </div>
        <div className="mb-6 inline-flex items-center gap-2 max-w-4xl text-center">
        <h1 className="mb-8 text-4xl font-bold leading-tight md:text-7xl text-white">Redefining 
            <span className="text-yellow-300"> Event Experiences </span>
            Across Africa</h1>
            </div>
        <p className="md:w-4xl leading-relaxed text-xl mb-10 text-purple-100 md:text-2xl text-center">Bitbandy is Africa's premier event management platform, 
        blending cutting-edge technology with deep cultural understanding to 
        transform how events are created, managed, and experienced.</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="">
        <button className="flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#9139f6] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 " type="button">Start Your Journey</button>
        </a>
        <a href="">
        <button className="rounded-full border-2 border-white bg-transparent px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10" type="button">Explore Categories</button>
        </a>
        </div>
        </div>

        <div className="p-6 text-center grid grid-cols-2 md:grid-cols-4 px-4 md:px-20 py-12">
            <div className="p-6">
                <h2 className="mb-2 text-4xl font-semibold text-[#9139f6] md:text-5xl">10K+</h2>
            <p className="text-gray-600">Events Hosted</p>
            </div>
            <div className="p-6">
                <h2 className="mb-2 text-4xl font-semibold text-[#9139f6] md:text-5xl">500K+</h2>
            <p className="text-gray-600">Tickets Sold</p>
            </div>
            <div className="p-6">
                <h2 className="mb-2 text-4xl font-semibold text-[#9139f6] md:text-5xl">2K+</h2>
            <p className="text-gray-600">Organizers</p>
            </div>
            <div className="p-6">
                <h2 className="mb-2 text-4xl font-semibold text-[#9139f6] md:text-5xl">50+</h2>
            <p className="text-gray-600">Cities Nationwide</p>
            </div>
        </div>

        <div className="text-center bg-linear-to-b from-[#9139f6] via-[#a855f7] to-[#c084fc] py-24 text-white">
            <h2 className="font-semibold text-4xl md:text-5xl">Our Journey</h2>
            <p className="text-xl py-4">From a simple idea to Nigeria's most trusted event platform</p>
            <div className="flex flex-wrap md:flex-nowrap items-center  gap-4 md:gap-12 lg:flex-2 mx-8 md:mx-40">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <Image
                    src="/ourjourney_Img1.jpeg"
                    alt="Our journey"
                    width={300}
                    height={200}
                    />
                    <Image
                    src="/ourjourney_Img4.jpeg"
                    alt="Our journey"
                    width={300}
                    height={200}
                    />
                    <Image
                    src="/ourjourney_Img3.jpeg"
                    alt="Our journey"
                    width={300}
                    height={200}
                    />
                    <Image
                    src="/ourjourney_Img2.jpeg"
                    alt="Our journey"
                    width={300}
                    height={200}
                    />
                
                </div>

                <div>
                <div className="">
                    <div className="bg-white text-black w-75 md:w-150 rounded-lg p-8 my-8 ">
                        <div className="flex items-center gap-8 py-6">
                        <FaRegLightbulb />
                        <h2 className="font-semibold text-2xl">The Beginning</h2>
                        </div>
                        <p className="text-start text-gray-600">Born in Port Harcourt in 2023, Bitbandy started with a vision to solve the complex challenges of event management in Nigeria. 
                        Our founders witnessed firsthand the struggles organizers faced with ticketing, payments, and audience engagement.</p>
                    </div>
                    <div className="bg-white text-black w-75 md:w-150 rounded-lg p-8 my-8" >
                        <div className="flex items-center gap-8 py-6">
                        <PiFishSimpleBold />
                        <h2 className="font-semibold text-2xl">The Evolution</h2>
                        </div>
                        <p className="text-start text-gray-600">We pioneered Africa's first dual - currency event platform, introducing cryptocurrency payments alongside traditional Naira options. 
                        This innovation opened doors for international artists and businesses while maintaining accessibility for local audiences.</p>
                    </div>
                    <div className="bg-white text-black w-75 md:w-150 rounded-lg p-8 my-8">
                        <div className="flex items-center gap-8 py-6">
                        <FaCrown />
                        <h2 className="font-semibold text-2xl">Today & Beyond</h2>
                        </div>
                        <p className="text-start text-gray-600">Today, Bitbandy powers events across Nigeria and is expanding throughout Africa. We're not 
                            just a platform—we're a movement empowering creators, connecting communities, and redefining 
                            entertainment across the continent.
                        </p>
                    </div>
                </div>
                </div>
            </div>

        </div>

        <div className="flex flex-col items-center pt-24 px-4">
            <h1 className="text-[#ab63f9] font-semibold text-4xl">Events For Every Passion</h1>
            <p className="text-gray-600 text-xl py-8">From intimate gatherings to massive festivals, we support every type of event imaginable</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8  m-4 md:mx-30 md:my-20">
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <FaMusic fill="#ffffff" className="bg-[#d04dbf] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Music Concerts</h2>
                    <p className="text-gray-600">From local gigs to international festivals</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <MdBusiness fill="#ffffff" className="bg-[#1f9de4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Business Conferences</h2>
                    <p className="text-gray-600">Networking and professional development events</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <GiTheater fill="#ffffff" className="bg-[#f66523] w-16 h-16 p-4 rounded-lg"/>
                    <h2 className="py-4 font-bold">Arts & Theatre</h2>
                    <p className="text-gray-600">Plays, exhibitions, and cultural performances</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <MdOutlineSportsTennis fill="#ffffff" className="bg-[#16bd76] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Sports Events</h2>
                    <p className="text-gray-600">Tournaments, matches, and sporting competitions</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <FaGraduationCap fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Educational Workshops</h2>
                    <p className="text-gray-600">Learning sessions and skill development</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <RiUserCommunityLine fill="#ffffff" className="bg-[#f1a60a] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Community Events</h2>
                    <p className="text-gray-600">Local gatherings and community initiatives</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <FaBusinessTime fill="#ffffff" className="bg-[#36404e] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Corporate Events</h2>
                    <p className="text-gray-600">Company meetings, launches, and retreats</p>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <IoMdHeart fill="#ffffff" className="bg-[#ef4583] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Charity & Fundraisers</h2>
                    <p>Non-profit events and fundraising activities</p>
                </div>
            </div>
        </div>


         <div className="flex flex-col items-center px-4 pt-24 bg-[#fbf6ff]">
            <h1 className="text-[#ab63f9] font-semibold text-4xl">Complete Event Solutions</h1>
            <p className="text-gray-600 text-xl py-8">Everything you need to create, manage, and grow successful events</p>

            <div className="grid grid-col-1 md:grid-cols-3 gap-8 m-4 md:mx-30 md:my-20">
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <FaMusic fill="#ffffff" className="bg-[#d04dbf] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Dual Payment System</h2>
                    <p className="text-gray-600">Accept both Naira and cryptocurrency payments seamlessly</p>
                    <div className="flex items-center gap-2">
                    <Link className="text-[#9139f6] font-semibold" href={"/"}>Learn more </Link>
                    <FaArrowRight fill="#9139f6" />
                    </div>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <MdBusiness fill="#ffffff" className="bg-[#1f9de4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Smart Ticketing</h2>
                    <p className="text-gray-600">Advanced ticket management with QR codes and validation</p>
                    <div className="flex items-center gap-2">
                    <Link className="text-[#9139f6] font-semibold" href={"/"}>Learn more </Link>
                    <FaArrowRight fill="#9139f6" />
                    </div>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <GiTheater fill="#ffffff" className="bg-[#f66523] w-16 h-16 p-4 rounded-lg"/>
                    <h2 className="py-4 font-bold">Real-time Analytics</h2>
                    <p className="text-gray-600">Track sales, attendance, and revenue in real-time</p>
                    <div className="flex items-center gap-2">
                    <Link className="text-[#9139f6] font-semibold" href={"/"}>Learn more </Link>
                    <FaArrowRight fill="#9139f6" />
                    </div>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <MdOutlineSportsTennis fill="#ffffff" className="bg-[#16bd76] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Enterprise Security</h2>
                    <p className="text-gray-600">Bank-level security with multi-factor authentication</p>
                    <div className="flex items-center gap-2">
                    <Link className="text-[#9139f6] font-semibold" href={"/"}>Learn more </Link>
                    <FaArrowRight fill="#9139f6" />
                    </div>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <FaGraduationCap fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Global Reach</h2>
                    <p className="text-gray-600">Access international audiences with crypto payments</p>
                    <div className="flex items-center gap-2">
                    <Link className="text-[#9139f6] font-semibold" href={"/"}>Learn more </Link>
                    <FaArrowRight fill="#9139f6" />
                    </div>
                </div>
                <div className="bg-[#fdfbff] p-6 rounded-lg border border-purple-100">
                    <RiUserCommunityLine fill="#ffffff" className="bg-[#f1a60a] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Recurring Events</h2>
                    <p className="text-gray-600">Manage multiple dates on a single event page</p>
                    <div className="flex items-center gap-2">
                    <Link className="text-[#9139f6] font-semibold" href={"/"}>Learn more </Link>
                    <FaArrowRight fill="#9139f6" />
                    </div>
                </div>
                
            </div>
        </div>



        
        

        <div className="bg-linear-to-r from-[#9139f6] to-[#c084fc] p-8 text-white md:p-16 m-4 md:m-30 rounded-2xl">
            <div>

            <div className=" mb-6 inline-flex items-center gap-3 rounded-full bg-white/20 px-4 py-2">
            <MdCatchingPokemon />
            <h5 className="font-semibold">CORPORATE AFFAIRS COMMISSION</h5>
            </div>

            </div>
            <div className="flex flex-wrap items-start ">
            <div className=" w-full md:w-1/2">
            <h1 className="mb-6 text-3xl font-bold md:text-4xl">Fully Registered & Licensed</h1>
            <p className="mb-6 text-lg opacity-90 ">
                Bitbandy is officially registered 
                with the Corporate Affairs Commission (CAC) of Nigeria, ensuring 
                full legal compliance and operational transparency.
            </p>
            </div>
            <div className="flex justify-center w-full md:w-1/2">
                <div className="relative flex h-60 w-60 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-8xl opacity-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
                <div className="absolute inset-0 animate-pulse rounded-2xl border-4 border-white/30">
                </div>
                    
                </div>
            </div>
            </div>
            
        </div>

        <div className="bg-white py-24">
            <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-[#9139f6] text-3xl font-semibold md:text-5xl">Empowering Every Role</h2>
            <p className="mx-auto mt-6 max-w-3xl md:text-xl text-gray-600">We build solutions for everyone involved in the event ecosystem</p>
            </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4 md:mx-30 md:my-20">
                <div className="bg-[#fdfbff] p-8 rounded-lg border border-purple-100">
                    <IoIosPeople fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Event Organizers</h2>
                    <ul className="text-gray-600">
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Complete event management tools
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Real-time sales analytics
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Marketing and promotion features
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Revenue management and payouts
      </li>
    </ul>
                    
                </div>

                <div className="bg-[#fdfbff] p-8 rounded-lg border border-purple-100">
                    <MdOutlineSettingsSystemDaydream   fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Attendees</h2>
                    <ul className="text-gray-600">
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Seamless ticket purchasing
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Digital wallet integration
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Ticket transfer and resale
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Event discovery and recommendations
      </li>
    </ul>
                    
                </div>

                <div className="bg-[#fdfbff] p-8 rounded-lg border border-purple-100">
                    <BsGraphUpArrow  fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    <h2 className="py-4 font-bold">Entertainment Industry</h2>
                    <ul className="text-gray-600">
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Venue and artist management
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Sponsorship integration
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Cross-border payment solutions
      </li>
      <li className="flex items-center gap-1">
        <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        Industry analytics and insights
      </li>
    </ul>
                    
                </div>


                </div>
                </div>

           

        <div className="bg-linear-to-b from-[#9139f6] via-[#a855f7] to-[#c084fc] py-24">
            <div className="mb-16 text-center">
            <h2 className="bg-linear-to-r from-white to-[#c084fc] bg-clip-text text-transparent text-4xl font-bold md:text-5xl">Why Bitbandy Stands Out</h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white">We're not just a platform—we're your partner in creating unforgettable experiences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 md:mx-30 md:my-20">
                <div className="flex flex-wrap items-start gap-6 bg-[#ffffff] rounded-2xl border border-purple-100 p-8">
                    <div>
                     <IoIosPeople fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    </div>
                    <div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Innovative Technology</h3>
                        <p className="mb-6 text-gray-600">We combine cutting-edge technology with user-friendly design</p>
                         <div className="flex flex-wrap gap-2">
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Blockchain integration</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Real-time processing</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Scalable infrastructure</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-start gap-6 bg-[#ffffff] rounded-2xl border border-purple-100 p-8">
                    <div>
                     <IoIosPeople fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    </div>
                    <div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Customer Focus</h3>
                        <p className="mb-6 text-gray-600">We combine cutting-edge technology with user-friendly design</p>
                        <div className="flex flex-wrap gap-2">
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">24/7 Support</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Personal onboarding</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Success guarantee</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-start gap-6 bg-[#ffffff] rounded-2xl border border-purple-100 p-8">
                    <div>
                     <IoIosPeople fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    </div>
                    <div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Transparent Pricing</h3>
                        <p className="mb-6 text-gray-600">No hidden fees with clear, competitive pricing</p>
                        <div className="flex flex-wrap gap-2">
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Lowest fees</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">No setup costs</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Volume discounts</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-start gap-6 bg-[#ffffff] rounded-2xl border border-purple-100 p-8">
                    <div>
                     <IoIosPeople fill="#ffffff" className="bg-[#7d60f4] w-16 h-16 p-4 rounded-lg" />
                    </div>
                    <div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Creative Freedom</h3>
                        <p className="mb-6 text-gray-600">Customize every aspect of your event experience</p>
                        <div className="flex flex-wrap gap-2">
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Brand customization</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Flexible ticketing</div>
                            <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-[#9139f6]">Merchandise integration</div>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>


        <div className="bg-white p-4 md:py-24 md:px-30">
            <div className="mb-16 text-center">
            <h2 className="bg-linear-to-r from-[#9139f6] to-[#c084fc] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">Events Powered by Bitbandy</h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">Capturing memorable moments from events across Nigeria</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110" src="moments_1.jpeg" alt="" />
                </div>
                <div className="rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110" src="moments_5.png" alt="" />
                </div>
               <div className="rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110" src="moments_2.png" alt="" />
                </div>
                <div className="rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110" src="moments_3.png" alt="" />
                </div>
                <div className="rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110" src="moments_4.png" alt="" />
                </div>
                <div className="rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110" src="moments_5.png" alt="" />
                </div>
                
            </div>
        </div>
 <section className="bg-[#fbf6ff] py-24">

 
        <div className="mx-auto max-w-7xl px-4 md:px-8 ">
           <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#9139f6] to-[#c084fc] px-4 py-2 text-white">
                <IoStar fill="#facc15"/>
                <p className="font-semibold">RATED 4.9/5 STARS</p>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">See What People Are Saying About Us</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">Real voices from organizers and attendees across Nigeria</p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>

<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>


<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>


<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>


<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>


<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>


<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>


<div className="rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-md">

                    
                    <div className="flex gap-8 ">
                    <div>
                    <img className="rounded-full w-20 h-20" src="rated_1.png" alt="" />
                    </div>


                    <div className="">
                    <p>Treasure</p>
                    <p>Event Organizer</p>
                    
                    <div className="flex ">
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    <IoStar fill="#facc15"/>
                    </div>
                    </div>
                    </div>
                    <p>Bitbandy has simplified ticketing for our events and helped us reach more people across Nigeria.</p>
                </div>

            </div>
            </div>
        </div>
</section>
        <div className="my-16 mx-4 md:mx-30 rounded-3xl border border-purple-100 bg-white p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
                <p className="mb-2 text-3xl font-bold text-[#9139f6]">98%</p>
                <p className="text-gray-600">Satisfaction Rate</p>
            </div>

            <div className="text-center">
                <p className="mb-2 text-3xl font-bold text-[#9139f6]">99.9%</p>
                <p className="text-gray-600">Platform Uptime</p>
            </div>

            <div className="text-center">
                <p className="mb-2 text-3xl font-bold text-[#9139f6]">24/7</p>
                <p className="text-gray-600">Support Available</p>
            </div>

            <div className="text-center">
                <p className="mb-2 text-3xl font-bold text-[#9139f6]">100+</p>
                <p className="text-gray-600">Events Monthly</p>
            </div>
            </div>
        </div>

<section className="bg-linear-to-br from-[#9139f6] via-[#a855f7] to-[#c084fc] py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
            <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready to Transform Your Events?</h2>
            <p className="mb-10 text-xl text-purple-100">Join thousands of successful organizers and attendees already using Bitbandy</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/">
                <button className="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#9139f6] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100]">Get Started Free</button>
                </a>
                <a href="">
                <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">Contact Sales</button>
            </a>
            </div>
            <p className="mt-6 text-sm text-purple-200">No credit card required • Free setup • 24/7 support</p>
           </div>     
        </div>

        </div>

        </section>
        </>
    )
}