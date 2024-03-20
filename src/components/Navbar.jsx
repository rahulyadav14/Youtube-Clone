import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";




const Navbar = () => {
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky  text-white">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-2xl">Youtube</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex items-center gap-5 pr-5 ">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none "
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <CiSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>

      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5b3deAMOxN6wzA2EBPRTV2rRFbw8sP6DLA&usqp=CAU"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
