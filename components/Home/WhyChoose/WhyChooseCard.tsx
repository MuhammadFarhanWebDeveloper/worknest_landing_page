import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
type WhyChooseCardProps = {
  image: string;
  title: string;
  linkText: string;
  desc: string;
};
export default function WhyChooseCard({
  image,
  title,
  linkText,
  desc,
}: WhyChooseCardProps) {
  return (
    <div className="shadow-lg">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-lg mt-4 mb-4 font-semibold text-gray-800 ">
        {title}
      </h1>
      <p className="text-center">{desc}</p>
      <div className="font-semibold text-center text-lg text-blue-700 hover:text-blue-950 transition-all duration-200 cursor-pointer  h-fit my-3 flex justify-center items-center gap-2 ">
        <p className="">{linkText}</p>
        <span className="pt-[5.5px]">
          <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
}
