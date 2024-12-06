import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        {/* Logo Section */}
        <div>
          <Logo w={100} h={50} />
        </div>

        {/* Search Section */}
        <div className="flex items-center w-full justify-between max-w-sm">
          <input type="text" placeholder="Search Products here....." />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* User Icons and Cart Section */}
        <div className="flex items-center space-x-4">
          <div>User Icon</div>
          <div>Cart Icon</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
