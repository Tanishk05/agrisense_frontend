"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import Loader from './Loader';

const Loading = () => {
  const [loading, setLoading] = useState(true); // State to control loading screen visibility
  const [thought, setThought] = useState(""); // State to store the random thought
  const router = useRouter(); // Initialize the router

  // Array of plant-care thoughts
  const thoughts = [
    "Always use good water for plants, which helps to reduce risks and prolongs plant life.",
    "Plants need enough sunlight for optimal growth—try to keep them near a sunny window.",
    "Regularly pruning helps your plants stay healthy and encourages new growth.",
    "Water your plants in the morning to help them absorb nutrients throughout the day.",
    "Avoid over-watering; most plants only need watering once or twice a week.",
  ];

  useEffect(() => {
    // Select a random thought from the array
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    setThought(randomThought);

    // Simulate loading and navigate to the upload page after 10 seconds
    const timer = setTimeout(() => {
      setLoading(false); // After 10 seconds, hide the loading page
      router.push('/upload'); // Redirect to '/upload' after loading
    }, 3000); // 10000 ms = 10 seconds

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, [router, thoughts]);

  if (loading) {
    // Render the loading page only while loading is true
    return (
      <div className="loader w-screen h-screen bg-[#1C1C1C] absolute top-0 left-0 z-50">
        <div className="top w-full h-[10vh] bg-[#BFFE3A]"></div>
        <div className="middle overflow-hidden w-full h-[80vh]">
          <h1 className='texico text-[12vh] absolute left-[-25vh] top-[39vh] rotate-[-90deg] text-white'>AGRISENSE</h1>
          <div className="top_elem absolute top-[20%] w-full h-[60vh]">
            <h1 className='text-[15vh] font-bold ml-[20%] text-white'>AI</h1>
            <p className='text-white ml-[32%] text-xl font-bold leading-[1]'>
              Intelligent Solutions for <br /> Thriving Gardens
            </p>

            <Loader /> {/* Loading spinner */}
            <p className='text-white ml-[35%] mt-[10%] text-[14px] font-bold leading-[1]'>
              {thought}
            </p>
          </div>
        </div>
        <div className="bott w-full h-[10vh] bg-[#BFFE3A]"></div>
      </div>
    );
  }

  // Don't render anything after the loading phase (no main content shown here)
  return null;
};

export default Loading;
