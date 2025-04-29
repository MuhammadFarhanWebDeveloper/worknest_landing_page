import React from "react";
import { FaClock, FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const about = [
    "Support Center",
    "Customer Support",
    "About Us",
    "Careers",
    "Privacy Policy",
  ];
  const ourInformation = [
    "Return Policy",
    "Privacy Policy",
    "Terms & Conditions",
    "Site Map",
    "Store Hours",
  ];
  const constactUs = [
    { icon: <FaLocationDot />, text: "Pakistan, D.I.Khan" },
    { icon: <FaPhoneAlt />, text: "+92 333 1234567" },
    { icon: <FaClock />, text: "Mon - Fri: 9:00 am - 5:00 pm" },
    { icon: <MdEmail />, text: "info.example@gmail.com" },
  ];
  return (
    <div className="px-5 md:px-10 ">
      <div className="pt-20 pb-3 text-gray-700 border-b border-gray-300 font-semibold grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-10 ">
        {/* Logo */}
        <div className="">
          <div className="my-3 font-bold text-3xl">
            <span className="text-[#BE185D]">W</span>ork
            <span className="text-[#BE185D]">N</span>est
          </div>
          <p className="leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet.
          </p>
        </div>
        {/* About */}
        <div>
          <h1 className="font-bold text-2xl">About Us</h1>
          {about.map((item, index) => (
            <p
              key={index}
              className="my-3 cursor-pointer hover:text-[#BE185D] transition-all duration-300"
            >
              {item}
            </p>
          ))}
        </div>
        {/* Our Information */}
        <div>
          <h1 className="font-bold text-2xl">Our Information</h1>
          {ourInformation.map((item, index) => (
            <p
              key={index}
              className="my-3 cursor-pointer hover:text-[#BE185D] transition-all duration-300"
            >
              {item}
            </p>
          ))}
        </div>
        {/* Contact Us */}
        <div>
          <h1 className="font-bold text-2xl">Contact Us</h1>
          {constactUs.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              <p className="my-3 cursor-pointer hover:text-[#BE185D] transition-all duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col md:flex-row text-gray-600 items-center justify-between">
        <p className="text-sm">Copyright &copy; 2024 Webdev. All rights reserved</p>
        <div className="flex items-center gap-3">
          <p>Social:</p>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
