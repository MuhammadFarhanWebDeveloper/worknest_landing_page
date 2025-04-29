import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AnalyticsTools() {
  return (
    <div className="h-fit md:px-8 flex lg:flex-row flex-col justify-center py-10 gap-12">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className=""
      >
        <Image
          src={"/images/a.jpg"}
          width={500}
          height={500}
          alt="Analytics Tools"
          className="object-contain w-[500px]  lg:w-[1000px] "
        />
      </div>
      <div className="px-4">
        <p className="text-orange-500 font-semibold text-lg">
          Audience tracking and insights
        </p>
        <h1 className="font-bold text-2xl md:text-3xl text-gray-800 mt-4 mb-4">
          Powerful analytics tools that put you in control and are fully
          customizable.
        </h1>
        <p className="leading-[2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi
          dolorem, sint ipsa voluptate maiores quidem. Velit tempora minus
          tempore aperiam enim, voluptate laborum doloremque.
        </p>
        <ul>
          <li className="flex gap-3 font-semibold items-center py-3 ">
            <FaCheckCircle className="text-green-600" />
            <p>Chat prompt module supported</p>
          </li>
          <li className="flex gap-3 font-semibold items-center py-3 ">
            <FaCheckCircle className="text-green-600" />
            <p>Enjoy unlimited features by paid plan</p>
          </li>
          <li className="flex gap-3 font-semibold items-center py-3 ">
            <FaCheckCircle className="text-green-600" />
            <p>Manage ultimate conversation</p>
          </li>
        </ul>
        <button className="p-2 px-4 rounded-3xl bg-gray-200 hover:bg-blue-900 cursor-pointer hover:text-white font-semibold transition-all duration-200 text-black flex justify-center items-center  gap-2">
          Explore More
          <span className="pt-[4px]">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}
