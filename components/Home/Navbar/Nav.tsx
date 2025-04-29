"use client";
import { NAV_LINKS } from "@/constants/nav_links";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
type NavProps = {
  openMobileMenu: () => void;
};

function Nav({ openMobileMenu }: NavProps) {
  const [navbarBg, setNavbarBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 30) setNavbarBg(true);
      if (window.scrollY < 30) setNavbarBg(false);
    };
    window.addEventListener("scroll", handler);

    if (window.scrollY >= 30) setNavbarBg(true);
    if (window.scrollY < 30) setNavbarBg(false);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`${
        navbarBg ? "bg-white shadow-md" : ""
      } py-4 px-2 flex justify-around items-center  navbar fixed top-0 left-0 right-0 z-10`}
    >
      {/* Logo */}
      <div className="font-bold text-3xl">
        <span className="text-[#BE185D]">W</span>ork
        <span className="text-[#BE185D]">N</span>est
      </div>

      {/* Navbar Links */}
      <div className="hidden lg:block">
        <ul className=" flex space-x-8 text-lg font-semibold">
          {NAV_LINKS.map((link, index) => (
            <li className="inline-block  relative nav-link" key={index}>
              <Link href={link.link}>
                <p className="">{link.lable}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Join Now Button */}
      <div className="flex justify-center items-center space-x-4 gap-3">
        <button className="p-2 px-4 rounded-3xl bg-blue-600 hover:bg-blue-900 cursor-pointer text-white transition-all duration-300">
          Join Now
        </button>
        <HiOutlineMenuAlt3
          size={30}
          onClick={openMobileMenu}
          className="cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
}

export default Nav;
