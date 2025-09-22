import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = userOnlineStatus();

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 shadow-lg p-4 flex-wrap">
      {/* Left - Logo */}
      <div className="flex items-center w-20">
        <img src={LOGO_URL} alt="Logo" />
      </div>

      {/* Center - Company Name */}
      <div className="flex-1 text-center text-white text-6xl font-bold truncate">
        Snap Food
      </div>

      {/* Right - Navigation & Login Button */}
      <div className="flex items-center space-x-4 flex-wrap">
        <span className="text-white font-semibold">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>
        <Link to="/" className="text-white hover:text-yellow-300 transition-colors font-semibold">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-300 transition-colors font-semibold">
          About Us
        </Link>
        <Link to="/contact" className="text-white hover:text-yellow-300 transition-colors font-semibold">
          Contact Us
        </Link>
        <Link to="/grocery" className="text-white hover:text-yellow-300 transition-colors font-semibold">
          Grocery
        </Link>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
          onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
