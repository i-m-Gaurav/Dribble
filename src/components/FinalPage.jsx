import React from "react";
import Navbar from "./navbar";
import {
  FaPinterest,
  FaInstagramSquare,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const FinalPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white flex flex-col items-center justify-center">
        <div className="w-full sm:w-1/3 mt-20 mb-32 px-6 sm:px-0">
          <div>
            <h2 className="text-center text-xl sm:text-3xl font-bold text-gray-900 mb-8">
              Please verify your email...
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-full p-3 mb-8">
              <svg
                className="h-8 w-8 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </div>
          <div className="text-center text-gray-600">
            <p className="mb-5 mt-5">
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <span className="font-bold">account@refero.design</span>
            <p className="mt-5">
              Click the confirmation link in that email to begin using Dribbble.
            </p>
            <p className="mt-2">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it, you can{" "}
              <a href="#" className="text-pink-500 hover:underline">
                resend the confirmation email
              </a>
              .
            </p>
            <p className="mt-2">
              Wrong email address?{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Change it
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-100">
        <div className="py-20 px-6 sm:px-0 w-full sm:w-11/12 justify-between mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row">
          <div className="flex flex-col justify-start w-full sm:w-1/6 mb-10 sm:mb-0">
            <div>
              <img
                src="./FooterLogo.png"
                alt="footer logo"
                className="h-10 mb-4"
              />
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                Dribble is the world's leading community for creatives to share,
                grow, and get hired.
              </p>
            </div>
            <div className="flex justify-between mt-10 w-28">
              <img src="./lo.png" alt="footer logo" className="h-4 filter" />
              <FaTwitter />
              <AiFillFacebook />
              <FaInstagramSquare />
              <FaPinterest />
            </div>
          </div>

          <div className="w-full sm:w-2/12 mb-10 sm:mb-0">
            <h1 className="mb-5">For designers</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>Go Pro!</h1>
              <h1>Explore design work</h1>
              <h1>Design blog</h1>
              <h1>Overtime podcast</h1>
              <h1>Playoffs</h1>
              <h1>Weekly Warm-up</h1>
              <h1>Refer a Friend</h1>
              <h1>Code of conduct</h1>
            </div>
          </div>
          <div className="w-full sm:w-2/12 mb-10 sm:mb-0">
            <h1 className="mb-5">Hire designers</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>Post a job opening</h1>
              <h1>Post a freelance project</h1>
              <h1>Search for designers</h1>
            </div>
            <h1 className="mb-4 mt-5">Hire designers</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>Advertise with us</h1>
            </div>
          </div>
          <div className="w-full sm:w-2/12 mb-10 sm:mb-0">
            <h1 className="mb-5">Company</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>About</h1>
              <h1>Careers</h1>
              <h1>Support</h1>
              <h1>Media kit</h1>
              <h1>Testimonials</h1>
              <h1>API</h1>
              <h1>Terms of service</h1>
              <h1>Privacy policy</h1>
              <h1>Cookie policy</h1>
            </div>
          </div>
          <div className="w-full sm:w-2/12 mb-10 sm:mb-0">
            <h1 className="mb-5">Directories</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>Design jobs</h1>
              <h1>Designers for hire</h1>
              <h1>Freelance designers for hire</h1>
              <h1>Tags</h1>
              <h1>Places</h1>
            </div>
            <h1 className="mb-4 mt-5">Design assets</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>Dribble Marketplace</h1>
              <h1>Creative Market</h1>
              <h1>Fontspring</h1>
              <h1>Font Squirrel</h1>
            </div>
          </div>
          <div className="w-full sm:w-2/12 mb-10 sm:mb-0">
            <h1 className="mb-5">Design Resources</h1>
            <div className="text-sm font-light text-gray-600 flex flex-col justify-around space-y-2">
              <h1>Freelancing</h1>
              <h1>Design Hiring</h1>
              <h1>Design Portfolio</h1>
              <h1>Design Education</h1>
              <h1>Creative Process</h1>
              <h1>Design Industry Trends</h1>
            </div>
          </div>
        </div>
        <div className="h-16 px-6 sm:px-0 flex flex-col sm:flex-row justify-between mx-auto w-full border-t max-w-full">
          <div className="flex justify-center items-center text-gray-400 text-xs sm:text-sm ml-9 mb-2 sm:mb-0">
            <FaRegCopyright className="mr-2 text-gray-400 " />{" "}
            {new Date().getFullYear()} dribble . All copyrights reserverd
          </div>
          <div className="flex justify-center items-center ">
            <span className="font-bold text-sm mr-2">52,255,658</span>{" "}
            <p className="text-gray-400 text-sm"> shots Dribbled</p>{" "}
            <img src="./lo.png" className="h-5 ml-2" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinalPage;
