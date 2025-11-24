import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-20 py-6 text-center">
      <div className="container mx-auto px-4 2xl:px-20">

        <h1 className="text-gray-400 text-sm sm:text-base 
          tracking-wide
          bg-white/5 backdrop-blur-lg 
          mx-auto w-fit px-6 py-3 
          rounded-xl border border-white/10
          shadow-[0_0_15px_rgba(255,255,255,0.1)]
          hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
          transition-all duration-300">
          © 2024 Movies-Nation. All rights reserved.
        </h1>

      </div>
    </footer>
  );
}

export default Footer;
