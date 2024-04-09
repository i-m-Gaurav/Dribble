import React, { useState } from "react";
import Navbar from "./navbar";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNextClick = () => {
    navigate("/FinalPage");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col justify-center items-center bg-white">
        <div className="mb-16 flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold mb-5 text-center mt-8 sm:px-0">
            What brings you to Dribbble?
          </h1>
          <p className="text-gray-500 mb-10 px-4 text-center sm:px-0">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 w-full px-4 sm:px-2    ">
          <div
            className={`relative p-16 w-[calc(100%-120px)] p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-all  sm:w-[calc(33.33%-24px)] ${
              selectedOptions.includes("designer")
                ? "border-4 border-pink-500"
                : "bg-white"
            }`}
            onClick={() => handleOptionClick("designer")}
          >
            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2 w-40 h-40 pb-8">
              <img src="/1.svg" alt="Designer" className="w-full h-full" />
            </div>
            <div className="pt-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">
                I'm looking to hire a designer
              </h3>
              <p className="text-gray-500 text-sm">
                Find the perfect designer for your next project
              </p>
              <div className="flex justify-center mt-4">
                {selectedOptions.includes("designer") ? (
                  <FaCheckCircle
                    size={20}
                    className=" text-pink-500 bg-white rounded-full"
                  />
                ) : (
                  <FaCheckCircle
                    size={20}
                    className="text-white border rounded rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`relative p-10 w-[calc(100%-120px)] p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-all w-full sm:w-[calc(33.33%-24px)] ${
              selectedOptions.includes("work")
                ? "border-4 border-pink-500"
                : "bg-white"
            }`}
            onClick={() => handleOptionClick("work")}
          >
            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2 w-40 h-40 pb-8">
              <img
                src="/2.svg"
                alt="Designer's Work"
                className="w-full h-full"
              />
            </div>
            <div className="pt-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">
                I'm a designer looking to share my work
              </h3>
              <p className="text-gray-500 text-sm">
                Showcase your design portfolio and get discovered
              </p>
              <div className="flex justify-center mt-4">
                {selectedOptions.includes("work") ? (
                  <FaCheckCircle
                    size={20}
                    className=" text-pink-500 bg-white rounded-full"
                  />
                ) : (
                  <FaCheckCircle
                    size={20}
                    className="text-white border rounded rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`relative p-10 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-all w-[calc(100%-120px)] sm:w-[calc(33.33%-32px)] ${
              selectedOptions.includes("inspiration")
                ? "border-4 border-pink-500"
                : "bg-white"
            }`}
            onClick={() => handleOptionClick("inspiration")}
          >
            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2 w-40 h-40 pb-8">
              <img src="/3.svg" alt="Inspiration" className="w-full h-full" />
            </div>
            <div className="pt-16 flex justify-center items-center text-center flex-col">
              <h3 className="text-lg font-bold mb-2">
                I'm looking for design inspiration
              </h3>
              <p className="text-gray-500 text-sm">
                Explore the latest design trends and creative work
              </p>
              <div className="flex justify-center mt-4">
                {selectedOptions.includes("inspiration") ? (
                  <FaCheckCircle
                    size={20}
                    className=" text-pink-500 bg-white rounded-full"
                  />
                ) : (
                  <FaCheckCircle
                    size={20}
                    className="text-white border rounded rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="font-bold text">
            Anything else? You can select multiple
          </h1>
          <button
            className="px-6 py-3 mt-5 mb-2 w-48 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition-colors"
            onClick={() => {
              console.log(selectedOptions);
              handleNextClick();
            }}
          >
            Next
          </button>
          <h1
            onClick={goBack}
            className="  cursor-pointer text-sm font-bold text-gray-400"
          >
            or Press RETURN
          </h1>
        </div>
      </div>
    </>
  );
};

export default ChooseRole;
