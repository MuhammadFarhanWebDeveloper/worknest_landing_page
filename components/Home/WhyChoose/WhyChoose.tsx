import React from "react";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyChoose() {
  const whychoose = [
    {
      image: "/images/i1.png",
      title: "Create Free Account",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
      linkText: "Start Earning",
    },
    {
      image: "/images/i2.png",
      title: "Monitor User Analytics",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
      linkText: "Sign up your store",
    },
    {
      image: "/images/i3.png",
      title: "Safe & Trusted",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
      linkText: "Get The App",
    },
    {
      image: "/images/i4.png",
      title: "Fast Customer Support",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
      linkText: "Learn more",
    },
  ];

  return (
    <div className="py-10">
      <h1 
      data-aos="fade-right"
      className="text-center font-bold leading-[1.2] text-2xl md:text-3xl">
        Why you choose this application
      </h1>

      <div className="mt-20 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {whychoose.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
            data-aos-anchor-placement="top-center"
          >
            <WhyChooseCard
              image={item.image}
              title={item.title}
              desc={item.desc}
              linkText={item.linkText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
