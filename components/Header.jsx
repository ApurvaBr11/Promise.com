import React from "react";

const Header = () => {
  return (
    <div className="w-full sticky h-16 flex justify-between px-12 items-center z-50 text-white bg-black ">
      <p className="cursor-pointer">Logo</p>
      <div className="flex items-center justify-center gap-7">
        <p className="cursor-pointer">Menu</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">About Us</p>
      </div>
    </div>
  );
};

export default Header;
