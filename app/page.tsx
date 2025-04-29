"use client";
import AnalyticsTools from "@/components/Home/AnalyticsTools";
import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing/Pricing";
import Review from "@/components/Home/Review/Review";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Offer from "@/components/Home/Offer";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    (async () => {
      await import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: "ease",
          anchorPlacement: "top-bottom",
        });
      });
    })();
  }, []);

  return (
    <div>
      <div className="bg-[#F7F6FB] lg:px-20 md:px-7  sm:px-2">
        <Hero />
      </div>
      <div className="lg:px-20 md:px-7  sm:px-2">
        <WhyChoose />
      </div>

      <div className="lg:px-20 md:px-7  sm:px-2">
        <AnalyticsTools />
      </div>

      <div className="bg-[#FDF2F8] lg:px-20 md:px-7  sm:px-2">
        <Features />
      </div>
      <div className="bg-[#FDF2F8]">
        <Review />
      </div>
      <div className="bg-[#EDFBFF]">
        <Pricing />
      </div>
      <div className="bg-black">
        <Offer />
      </div>
    </div>
  );
}
