import React from "react";
import {
  FaBook,
  FaCog,
  FaDesktop,
  FaHeadset,
  FaInfinity,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: <FaLayerGroup className="text-red-500" />,
      text: "50+ Unique Design Blocks",
    },
    {
      icon: <FaLaptop className="text-blue-500" />,
      text: "Multiple Layouts",
    },
    {
      icon: <FaMobileAlt className="text-yellow-500" />,
      text: "Mobile First Design",
    },

    {
      icon: <FaDesktop className="text-purple-500" />,
      text: "Fully Responsive",
    },
    {
      icon: <FaCog className="text-teal-500" />,
      text: "Customizable Features",
    },
    {
      icon: <FaHeadset className="text-green-500" />,
      text: "Humanly Support",
    },
    {
      icon: <FaInfinity className="text-pink-500" />,
      text: "Lifetime Updates",
    },
    {
      icon: <FaBook className="text-indigo-500" />,
      text: "Rich Documentation",
    },
    {
      icon: <FaShieldAlt className="text-orange-500" />,
      text: "Enhanced Security",
    },
  ];

  return (
    <div className="lg:px-8 md:px-4 px-2 py-10">
      <h1
        data-aos="fade-right"
        className="py-10 font-bold capitalize text-3xl text-center"
      >
        Its Everything you will ever need
      </h1>
      <div className="py-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((item, idex) => (
          <div
            key={idex}
            data-aos="flip-right"
            data-aos-delay={`${idex * 100}`}
            data-aos-anchor-placement="top-center"
          >
            <FeatureCard icon={item.icon} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
}
