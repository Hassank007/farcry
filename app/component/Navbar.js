import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="block sm:hidden">
        <div className=" flex flex-row items-center justify-between bg-black w-full h-[5rem]">
          <div className="flex flex-row items-center gap-2">
            <img src="./menu.svg" alt="open" className="pl-4 w-12" />
            <img src="./logo.avif" alt="logo" className="w-16" />
          </div>

          <div className=" flex items-center justify-center bg-[#ffae34] w-28 h-[5rem]">
            <h1 className="font-Gothic font-extrabold  text-black text-xl ">
              {" "}
              BUY NOW
            </h1>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
      <div className="flex flex-row items-center justify-between bg-black w-full h-[5rem]">
        <div className="flex flex-row items-center gap-2">
          <img src="./logo.avif" alt="logo" className="w-64 px-10" />
          <ul className="flex flex-row gap-10">
            <li className="flex flex-row gap-3">
              <h1 className="text-white text-sm font-Gothic font-extrabold pt-2">
                Post Launch
              </h1>
              <IoIosArrowDown className="text-white text-4xl " />
            </li>
            <li className="flex flex-row gap-3">
              <h1 className="text-white text-sm font-Gothic font-extrabold pt-2">
                News & Videos
              </h1>
            </li>
            <li className="flex flex-row gap-3">
              <h1 className="text-white text-sm font-Gothic font-extrabold pt-2">
                Expansion
              </h1>
            </li>
            <li className="flex flex-row gap-3">
              <h1 className="text-white text-sm font-Gothic font-extrabold pt-2">
                Community
              </h1>
              <IoIosArrowDown className="text-white text-4xl " />
            </li>
            <li className="flex flex-row gap-3">
              <h1 className="text-white text-sm font-Gothic font-extrabold pt-2">
                More Games
              </h1>
              <IoIosArrowDown className="text-white text-4xl " />
            </li>
          </ul>
        </div>
        <div className="flex flex-row  items-center  justify-center ">
          <h1 className="flex font-Gothic font-extrabold justify-center items-center bg-[#ed0000] w-28 h-[5rem] text-black text-lg ">
            {" "}
            FREE TRIAL
          </h1>
          <div className=" flex items-center justify-center bg-[#ffae34] w-28 h-[5rem]">
            <h1 className="font-Gothic font-extrabold  text-black text-lg ">
              {" "}
              BUY NOW
            </h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
