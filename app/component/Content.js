import React from "react";

const Content = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('./content1.avif')" }}
    >
      {/* Content over the background */}
      <div className="absolute inset-0 flex flex-row items-center justify-end text-white text-center">
        <p className="text-3xl font-bold"></p>
      </div>
    </div>
  );
};

export default Content;
