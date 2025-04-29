import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className=" flex justify-center lg:flex-row flex-col-reverse  lg:h-[95vh] py-5 md:py-5 lg:py-20 px-3 md:px-5 items-center">
      <div className="w-full flex flex-col  h-full  lg:pt-10 gap-5 lg:w-1/2">
        <div className="bg-white md:px-3 text-sm md:flex hidden flex-row  justify-center items-center p-2 md:py-2 text-center shadow-lg rounded-3xl w-fit">
          <span className="rounded-3xl px-2 p-1 md:w-fit w-full bg-blue-700 mx-3 text-white">
            New
          </span>
          <p>We have updated our term & condition policy</p>
        </div>
        <h1
          data-aos="fade-up"
          className="font-bold leading-[1.2] md:text-3xl text-2xl lg:text-5xl"
        >
          Your essential companion for a more productive and seamless workday.
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          ipsam laudantium qui velit assumenda commodi laboriosam cumque laborum
          perferendis totam.
        </p>

        <div className="flex justify-center  w-fit items-center gap-3">
          <Image
            src={"/images/gp.png"}
            width={150}
            height={46}
            className="w-1/2"
            alt="Google Play"
          />
          <Image
            src={"/images/as.png"}
            width={150}
            height={46}
            className="w-1/2"
            alt="Apple Store"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay={"200"}
        className="flex w-full  h-full md:w-1/2  justify-start "
      >
        <Image
          src={"/images/hero.png"}
          alt="Hero Image"
          width={500}
          height={500}
          className="md:w-[500px] w-[300px] mx-auto md:h-[500px] object-cover"
        />
      </div>
    </div>
  );
}
