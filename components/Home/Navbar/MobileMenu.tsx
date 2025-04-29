import { NAV_LINKS } from "@/constants/nav_links";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
type MobileMenuProps = {
  closeMobileMenu: () => void;
  mobileMenuOpened: boolean;
};
function MobileMenu({closeMobileMenu, mobileMenuOpened}: MobileMenuProps) {
  const menu_class = mobileMenuOpened ? "translate-x-0" : "-translate-x-full";
  return (
    <div className={`lg:hidden fixed z-20 ${menu_class} transition-all top-0 left-0 w-full h-screen `}>
      <div className="fixed w-full h-full bg-black z-20 opacity-70"></div>
      <div className="fixed  flex w-[80%] h-full justify-center items-center z-30 bg-[#312E81] ">
      <IoMdClose onClick={closeMobileMenu} color="white"  size={30} className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:h-8 h-6 w-6"/>
        <ul className="flex flex-col  justify-center items-start h-full space-y-8 text-white text-lg font-semibold">
          {NAV_LINKS.map((link, index) => (
            <li className="inline-block  relative nav-link" key={index}>
              <Link href={link.link}>
                <p className="">{link.lable}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
export default MobileMenu;
