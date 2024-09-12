import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-12">
      <div className="relative bg-white shadow-lg rounded-xl p-8 max-w-sm w-full">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 text-white flex items-center justify-center rounded-full">
          <i className={`fa-solid ${isSignUp ? 'fa-user-plus' : 'fa-sign-in'} text-3xl`}></i>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mt-16 mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form>
          <div className={`overflow-hidden transition-all duration-500 ${!isSignUp ? 'max-h-0 opacity-0' : 'max-h-40 opacity-100'}`}>
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg mb-4">
              <i className="fa-solid fa-user text-gray-400 pl-4"></i>
              <input type="text" placeholder="Name" className="w-full bg-transparent border-none outline-none py-2 px-4" />
            </div>
          </div>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg mb-4">
            <i className="fa-solid fa-envelope text-gray-400 pl-4"></i>
            <input type="email" placeholder="Email" className="w-full bg-transparent border-none outline-none py-2 px-4" />
          </div>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg mb-4">
            <i className="fa-solid fa-key text-gray-400 pl-4"></i>
            <input type="password" placeholder="Password" className="w-full bg-transparent border-none outline-none py-2 px-4" />
          </div>
          <p className="text-sm text-gray-500 mb-6">
            <a href="#" className="text-blue-500">{isSignUp ? 'Password Suggestions' : 'Forgot Password?'}</a>
          </p>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className={`w-full py-2 px-4 rounded-lg text-white transition-colors duration-500 ${isSignUp ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'}`}
              onClick={isSignUp ? null : handleToggle}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`w-full py-2 px-4 rounded-lg text-white transition-colors duration-500 ml-4 ${!isSignUp ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'}`}
              onClick={!isSignUp ? null : handleToggle}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;


