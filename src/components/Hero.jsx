import React from 'react';
import SignUpButton from "./SignUpButton";
import communityImage from "../assets/OfficeCommunityArt.jpg";
import hostImage from "../assets/Host.png";
import loginImage from "../assets/LogInImage.png";
import tenentImage from "../assets/Tenent.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative">
            <section className="bg-yellow-50 overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                        </div>

                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-xl font-bold text-black sm:text-6xl xl:text-7xl">
                                Spare Couches<br />Safe Havens<br />
                            </h1>
                            <p className="mt-8 text-xl text-black">At 407 Stays, we're committed to addressing housing challenges in Orlando by connecting those in need with trusted community organizations that provide temporary accommodations. Through our platform, community members and organizations can come together to offer vital support, safe shelter, and housing resources to individuals facing homelessness. Every participant is verified through a background check, ensuring a secure and supportive environment for all. Join us in creating a stronger, more compassionate Orlando—one stay at a time.</p>
                        </div>

                        <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0">
                            <div className="p-4 sm:p-6 lg:p-8">
                                <div className="flex items-center">
                                    <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                                    </svg>
                                    <h2 className="font-bold text-white text-7xl ml-2.5">80%</h2>
                                </div>
                                <p className="max-w-xs mt-1.5 text-xl text-white">of those facing homelessness can regain stability with the assistance of a short-term stay. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Hero;