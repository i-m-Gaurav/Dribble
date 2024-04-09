import React, { useContext } from "react";
import { FormDataContext } from "./SignupForm";

const FormFields = () => {
  const { formData, handleInputChange } = useContext(FormDataContext);

  return (
    <>
      <div className="flex flex-col  sm:flex-row mb-5">
        <div className="mb-4 sm:mr-5">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2"
            required
          />
        </div>
        
      </div>
      <div className="mb-8">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-gray-100  rounded-md focus:outline-none focus:ring-2 "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="6+ characters"
          className="w-full px-3 py-2 bg-gray-100  rounded-md focus:outline-none focus:ring-2 "
          required
        />
      </div>
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" required />
          <span className="text-gray-600 text-xs sm:text-base">
            Creating an account means you're okay with our{" "}
            <a href="#" className="text-blue-800">
              Terms of Service, Privacy Policy,
            </a>{" "}
            and our default{" "}
            <a href="#" className="text-blue-800">
              Notification Settings.
            </a>
          </span>
        </label>
      </div>
    </>
  );
};

export default FormFields;
