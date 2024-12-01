import React from "react";

const Hero = () => {
  return (
    <>
      <div className="block sm:hidden">
        <div className="relative ">
          {/* Hero Background */}
          <img
            src="./hero-bg.avif"
            alt="Hero Background"
            className="w-full h-[61rem] object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-start text-center">
            <div className="flex flex-col items-start justify-start">
              <img
                src="./hero.avif"
                alt="Hero Image"
                className="mb-8 mt-9 w-full h-auto"
              />
            </div>

            {/* Heading */}
            <h1 className="text-black text-5xl font-extrabold font-sans -mb-2">
              WELCOME
            </h1>
            <div className="bg-black w-full h-1 "></div>
            <p className="text-black text-4xl font-extrabold font-sans  ml-10 -mt-3">
              TO YARA
            </p>

            {/* Description */}
            <p className="mt-8 text-black font-Gothic text-base text-center font-bold w-64">
              Embrace the gritty experience of an improvised modern-day
              guerrilla and take down a Dictator and his son to free Yara.
            </p>

            {/* Trailer Section */}
            <div className="relative mt-10">
              {/* Trailer Image */}
              <img src="./trailer.avif" className="w-72" alt="Trailer" />
              {/* Pause Button */}
              <img
                src="./playbutton.svg"
                alt="Pause Button"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 cursor-pointer"
              />
            </div>
            <button className="py-3 px-16 text-black text-xl font-extrabold font-sans bg-[#ed0000] mt-4 ">
              WATCH TRAILER
            </button>
          </div>
        </div>
        <div className="bg-[#1c1c1c] h-16 w-full flex flex-row items-center justify-center gap-5">
          <img src="./twitter.avif" className="w-9" />

          <img src="./facebook.avif" className="w-9" />
          <img src="./instagram.avif" className="w-9" />
          <img src="./twitch.avif" className="w-9" />
          <img src="./youtube.avif" className="w-9" />
        </div>
      </div>
      {/* PC DESKTOP */}

      <div className="hidden sm:block">
        <div className="relative">
          <img
            src="./heroPC.avif"
            alt="Hero Background"
            className="w-full h-[65rem] object-cover"
          />
          <div className="absolute inset-0 flex flex-row items-center justify-end text-center">
            <div className="flex flex-col ">{/* Heading */}

            <h1 className="text-black text-9xl font-extrabold font-sans mr-40 -mb-3">
              WELCOME
            </h1>
            <div className="bg-black w-full h-1.5  "></div>
            <p className="text-black text-7xl font-extrabold font-sans pl-96  -mt-4 ">
              TO YARA
            </p>
            <p className="mt-8 text-black font-Gothic text-xl text-center font-bold w-[39rem] ml-20">
              Embrace the gritty experience of an improvised modern-day
              guerrilla and take down a Dictator and his son to free Yara.
            </p>
            <div className="relative  flex flex-col items-center justify-center">
              {/* Trailer Image */}
              <img src="./trailer.avif" className="  w-72 pt-10 " alt="Trailer" />
              {/* Pause Button */}
              <img
                src="./playbutton.svg"
                alt="Pause Button"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 cursor-pointer "
              />
              <button className="py-3 px-16 text-black text-xl font-extrabold font-sans bg-[#ed0000] mt-4 ">
              WATCH TRAILER
            </button>
            </div>
            
            </div>
            
          </div>
        </div>
        <div className="bg-[#1c1c1c] h-20 w-full flex flex-row items-center justify-center gap-10">
          <img src="./twitter.avif" className="w-12" />

          <img src="./facebook.avif" className="w-12" />
          <img src="./instagram.avif" className="w-12" />
          <img src="./twitch.avif" className="w-12" />
          <img src="./youtube.avif" className="w-12" />
        </div>
      </div>
    </>
  );
};

export default Hero;
