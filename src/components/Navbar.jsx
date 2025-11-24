import React from "react";
import movie from "../assets/movie.png";
import { Link } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 shadow-[0_0_15px_rgba(255,255,255,0.1)] py-4 border-b border-white/10">
      <div className="container px-4 sm:px-6 md:px-10 lg:px-16 mx-auto flex justify-between items-center">

        {/* LOGO */}
        <img
          className="w-16 sm:w-20 md:w-28 h-auto cursor-pointer 
          transition-transform duration-300 hover:scale-110 
          drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          src={movie}
          alt=""
        />

        {/* IF USER LOGGED IN */}
        {user ? (
          <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-end">

            {/* MENU LINKS */}
            <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
              {[
                { to: "/bollywood", label: "Bollywood" },
                { to: "/hollywood", label: "Hollywood" },
                { to: "/southmovie", label: "South-Movies" },
                { to: "/ottseries", label: "OttSeries" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white text-sm sm:text-base relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* OTHERS DROPDOWN */}
            <div className="relative">
              <button
                className="text-white text-sm sm:text-base flex items-center gap-1 
                hover:text-red-400 transition"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Others ▾
              </button>

              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-44 bg-black/90 border border-white/10 
                  rounded-xl shadow-xl p-2 animate-fadeIn"
                >
                  {[
                    { to: "/sports", label: "Sports" },
                    { to: "/news", label: "News" },
                    { to: "/tvserials", label: "TV Serials" },
                    { to: "/cartoons", label: "Cartoons" },
                  ].map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* WELCOME + ACCOUNT BUTTON */}
            <p className="text-white text-sm sm:text-base font-light">
              Welcome, {user.firstName}
            </p>

            <div className="hover:scale-110 transition-transform">
              <UserButton />
            </div>
          </div>
        ) : (
          /* IF USER NOT LOGGED IN */
          <div className="flex gap-4 max-sm:gap-2 max-sm:flex-col max-sm:items-end">

            <button className="text-white border border-white/30 px-4 py-2 rounded-lg
              hover:bg-white/10 hover:border-white transition-all
              active:scale-95 backdrop-blur-lg shadow-md">
              Recruiter Login
            </button>

            <button
              onClick={() => openSignIn()}
              className="text-white border border-white/30 px-4 py-2 rounded-lg
              hover:bg-white/10 hover:border-white transition-all
              active:scale-95 backdrop-blur-lg shadow-md"
            >
              Login
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
