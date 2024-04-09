import React, { useState, createContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormFields from "./FormsFields";

export const FormDataContext = createContext();

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/SetProfile");
  };

  return (
    <FormDataContext.Provider value={{ formData, handleInputChange }}>
      <div className="flex">
        {/* Left Section */}
        <div className="hidden lg:flex lg:h-screen overflow-hidden w-[700px]">
          <div className="absolute top-10 left-10">
            <img
              src="brownlogo.png"
              atl="logo"
              className="h-10 filter border-yellow-700"
            />
            <h1 className="font-bold text-2xl ml-3 mt-5 text-[#8b671b]">
              Discovers the world's top <br /> Designers & Creatives
            </h1>
          </div>
          <img
            src="leftImage.jpg"
            alt="Descriptive Alt Text"
            className="h-full object-cover"
          />
        </div>
        {/* Right Section */}
        <div className="flex flex-col h-screen w-full  mx-auto">
          <nav className="flex justify-end items-center pr-10 h-16 w-full ">
            <p>
              Already a member? <Link to="/login">Sign In</Link>
            </p>
          </nav>
          <main className="flex justify-center items-center w-full">
            <div className="bg-white p-6 w-full max-w-md mx-auto mt-10">
              <h2 className="text-3xl font-bold mb-10">Sign up to Dribbble</h2>
              <form onSubmit={handleSubmit}>
                <FormFields />
                <button
                  type="submit"
                  className="w-1/2 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
                >
                  Create Account
                </button>
              </form>
              <p className="text-gray-600 mt-4 text-xs">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="text-blue-800">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-800">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </main>
        </div>
      </div>
    </FormDataContext.Provider>
  );
};

export default SignupForm;
