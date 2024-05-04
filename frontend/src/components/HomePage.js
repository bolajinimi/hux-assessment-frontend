// src/components/Homepage.js

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { duration: 1000 },
  });

  return (
    <div className="homepage bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 min-h-screen flex flex-col justify-center items-center text-white">
      <animated.h1 style={props} className="text-5xl font-bold text-center mb-8">
        Welcome to My
        <span className="text-pink-400">Web</span>
        <span className="text-yellow-300">App</span>
      </animated.h1>
      <p className="text-lg text-center mb-4">This is a simple web application built with React.</p>
      <p className="text-lg text-center mb-8">It allows users to manage their contacts.</p>
      <div className="flex justify-center">
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
          Sign Up
        </Link>
        <Link to="/login" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
