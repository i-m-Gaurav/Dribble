import React, { useState } from "react";
import Navbar from "./navbar";
import { FaCamera, FaGreaterThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SetProfile = () => {
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState("");

  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNextClick = () => {
    // Perform any additional validation or processing here
    // Then, navigate to the next page
    navigate("/ChooseRole");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[1240px] mx-auto px-10 sm:px-32 mt-10 ">
        <h1 className="text-xl sm:text-4xl font-bold mb-4">
          Welcome! Let's create your profile
        </h1>
        <p className="text-gray-500 text-base mb-6">
          Let others get to know you better! You can do these later
        </p>

        <div className="mb-6 mt-14">
          <label
            htmlFor="avatar"
            className="block text-xl mb-5 text-gray-700 font-bold mb-2"
          >
            Add an avatar
          </label>
          <div className=" sm:flex items-center justify-start">
            {avatar ? (
              <img
                src={URL.createObjectURL(avatar)}
                alt="Avatar"
                className="w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 sm:w-40 sm:h-40 border-2 border-dashed border-gray-400   rounded-full  flex items-center justify-center">
                <FaCamera className="text-gray-400" />
              </div>
            )}
            <div className="mt-10 sm:ml-14">
              <label
                htmlFor="avatar"
                className="text-black text-center p-3 font-bold text-sm border border-gray-200  rounded-lg bg-white  cursor-pointer "
              >
                {avatar ? "Change image" : "Choose image"}
              </label>
              <input
                type="file"
                id="avatar"
                className="hidden"
                accept="image/*"
                onChange={handleAvatarUpload}
              />

              <button className="text-gray-400 mt-5 font-bold flex justify-center items-center  text-xs  p-2 rounded-md bg-white hover:text-blue-700  cursor-pointer mt-2">
                <FaGreaterThan className="mr-2 text-sm" /> Or choose one of our
                defaults
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 mt-16">
          <label
            htmlFor="location"
            className="block text-gray-700 mb-5 font-bold mb-2"
          >
            Add your location
          </label>
          <input
            type="text"
            id="location"
            className="w-1/2  py-2 border-b border-gray-300 focus:outline-none "
            placeholder="Enter a location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className="flex flex-col  justify-start">
          <button
            className="w-28 sm:w-1/6 mt-10 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none "
            onClick={handleNextClick}
          >
            Next
          </button>
          <h1
            className="w-[200px] cursor-pointer sm:w-1/6 cursor-pointer mt-2 text-gray-400 font-bold text-sm py-2 rounded focus:outline-none "
            onClick={goBack}
          >
            or Press RETURN
          </h1>
        </div>
      </div>
    </>
  );
};

export default SetProfile;
