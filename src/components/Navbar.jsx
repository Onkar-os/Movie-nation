import React from "react";
import movie from "../assets/movie.png";
import { Link } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
function Navbar() {
    const { openSignIn } = useClerk()
  const { user } = useUser();
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="shadow py-4 bg-black">
      <div className="container px-4 sm:px-6 md:px-10 lg:px-16 mx-auto flex justify-between items-center ">
        <img
          className="bg-black w-16 sm:w-20 md:w-28 h-auto p-1 rounded cursor-pointer"
          src={movie}
          alt=""
        />
       {
          user ? (
            <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-end">
            <div>
              <Link to="/bollywood" className="text-white text-sm sm:text-base mr-6">Bollywood </Link>
              <Link to="/hollywood" className="text-white text-sm sm:text-base mr-6">Hollywood</Link>
              <Link to="/southmovie" className="text-white text-sm sm:text-base mr-6">South-Movies</Link>
              <Link to="/ottseries" className="text-white text-sm sm:text-base mr-6">OttSeries</Link>
              </div>
            {/* Dropdown Section */}
            <div className="relative">
              <button
                className="text-white text-sm sm:text-base flex items-center gap-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Others ▾
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-gray-900 text-white w-40 rounded shadow-md py-2">
                  <Link
                    to="/bollywood"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Sports
                  </Link>
                  <Link
                    to="/hollywood"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    News
                  </Link>
                  <Link
                    to="/south"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                   TV Serials
                  </Link>
                  <Link
                    to="/web-series"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Cartoons
                  </Link>
                </div>
              )}
            </div>

            <p className="text-white text-sm sm:text-base">
              Welcome, {user.firstName}
            </p>
            <UserButton />
          </div>
          ) : (
            <div className='flex gap-4 max-sm:gap-2 max-sm:flex-col max-sm:items-end max-sm:text-xs'>
              <button className='recruiter text-white border border-white px-3 py-1 rounded sm:px-4 sm:py-2'>
                Recruiter Login
              </button>
              <button
                onClick={e => openSignIn()}
                className='login text-white border border-white px-3 py-1 rounded sm:px-4 sm:py-2'
              >
                Login
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
