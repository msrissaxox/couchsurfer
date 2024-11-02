// The landing page component where users can navigate to login or signup.

import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "./SignUpButton";
import communityImage from "../assets/OfficeCommunityArt.jpg";
import hostImage from "../assets/Host.png";
import loginImage from "../assets/LogInImage.png";
import tenentImage from "../assets/Tenent.jpg";
import Header from "./header"

const LandingPage = () => {
  return (
    <div>
    <Header/>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-4xl font-bold text-white mb-6">407 Stays</h1>
        {/* Changed to flex-wrap and added responsiveness */}
        <div className="flex flex-wrap gap-4 justify-center">
          <SignUpButton
            link={"/CommunitySignUp"}
            text={"Communties Sign Up "}
            image={communityImage}
          />
          <SignUpButton
            image={hostImage}
            link={"/HostSignUp"}
            text={"Host Sign Up "}
          />
          <SignUpButton
            image={tenentImage}
            link={"/TenantSignUp"}
            text={"Tenant Sign Up"}
          />
          <SignUpButton
            image={loginImage}
            link={"/login"}
            text={"Login"}
          />
        </div>
      </div>
      <div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />

          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img
              alt="Logo"
              src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
              className="mx-auto h-8"
            />
            <figure className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>
                  “I needed a place to stay for a few weeks until my apartment
                  was ready for move in. Chelly was so welcoming and I felt so
                  at home. I'd recommend Orlando Surf and Stay to everyone!”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mx-auto h-10 w-10 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    Judith Black
                  </div>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-600">Bank Teller</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
