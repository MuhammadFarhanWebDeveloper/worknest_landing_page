import React from "react";
import { FaCheck } from "react-icons/fa";

type PricingCardProps = {
  price: number;
  plan: string;
};
export default function PricingCard({ price, plan }: PricingCardProps) {
  return         <div className="px-5 bg-white py-7">
            <p className="text-lg text-center font-semibold text-blue-600">
              ${plan} Plan
            </p>
            <p className="text-4xl text-center font-semibold py-3">
              $<span className="text-5xl font-extrabold">{price}</span>/mo
            </p>
            <p className="text-center text-gray-500 ">Per User</p>
  
            <ul className="font-semibold">
              <li className="flex items-center gap-3 py-3">
                <div className="p-2 rounded-full w-fit h-fit bg-gray-300 text-green-600">
                  <FaCheck />
                </div>
                <p>Unlimited Connection</p>
              </li>
              <li className="flex items-center gap-3 py-3">
                <div className="p-2 rounded-full w-fit h-fit bg-gray-300 text-green-600">
                  <FaCheck />
                </div>
                <p>Basic Actions & Triggers</p>
              </li>
              <li className="flex items-center gap-3 py-3">
                <div className="p-2 rounded-full w-fit h-fit bg-gray-300 text-green-600">
                  <FaCheck />
                </div>
                <p>Draft Payments</p>
              </li>
              <li className="flex items-center gap-3 py-3">
                <div className="p-2 rounded-full w-fit h-fit bg-gray-300 text-green-600">
                  <FaCheck />
                </div>
                <p>Unlimited Flows & Supports</p>
              </li>
              <li className="flex items-center gap-3 py-3">
                <div className="p-2 rounded-full w-fit h-fit bg-gray-300 text-green-600">
                  <FaCheck />
                </div>
                <p>Lifetime Updates</p>
              </li>
            </ul>
            <button className="w-full bg-blue-900 hover:bg-blue-950 text-white transition-all duration-300 mt-5 font-semibold text-lg text-center cursor-pointer p-5">Start 14 Days Free trail</button>
          </div>;
}
