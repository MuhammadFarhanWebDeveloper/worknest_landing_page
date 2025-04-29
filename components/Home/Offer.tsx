import React from "react";

export default function Offer() {
  return (
    <div className=" py-10 flex flex-col items-center justify-center text-gray-400 gap-5">
      <h1 className="text-center text-white text-2xl md:text-3xl font-bold">Explore ultimate feature with premium</h1>
      <p className="text-center md:text-lg text-sm">
        Tell us your Apple ID email address so we could send you a TestFlight
        invitation directly.
      </p>
      <button className="transition-all duration-300 md:px-7 md:py-4 px-3 py-1 rounded-4xl bg-blue-500 hover:bg-blue-800 cursor-pointer text-white">Start 14 Days Free Trail</button>
      <p>No credit Card Required</p>
    </div>
  );
}
