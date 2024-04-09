import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <nav className="flex justify-start items-center  w-full p-5">
      <img src="logo.png" alt="FakeImage" className="h-10 " />
      <button
        className=" p-5 w-8 h-8 flex justify-center  items-center bg-[#f2f2f2] rounded rounded-md"
        onClick={goBack}
      >
        <span className="logo text-xl mb-1">&lt;</span>
      </button>
    </nav>
  );
};

export default Navbar;
// To use the "<" symbol as a logo in your React code, you can directly include it in your JSX like so:
