import React from "react";
import NetflixLogo from "../../assets/LogoNetflix.png";

const Header = () => {
  return (
    <div className="bg-black text-white fixed top-0 w-full z-30 h-[10vh]">
      <div className="w-[90%] h-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={NetflixLogo} alt="Netflix Logo" className="w-24 md:w-32" />

          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">TV Shows</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Latest</a>
            </li>
            <li>
              <a href="">My List</a>
            </li>
            <li>
              <a href="">Browse by Languages</a>
            </li>
          </ul>
        </div>

        <ul className="flex items-center gap-4 text-xl">
          <li>
            <i className="ri-search-line"></i>
          </li>
          <li>
            <i className="ri-notification-line"></i>
          </li>
          <li>
            <i className="ri-account-box-fill"></i>
          </li>
          <li>
            <i className="ri-arrow-drop-down-fill"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
