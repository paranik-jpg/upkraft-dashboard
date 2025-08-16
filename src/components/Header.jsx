import React from 'react';
import { FiBell } from 'react-icons/fi';
import avatar from '../assets/avatar.png'; // Make sure to have an avatar image in src/assets

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-end items-center shadow-sm">
      <div className="flex items-center space-x-6">
        <button className="relative" aria-label="View notifications">
          <FiBell size={24} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>
        <div className="flex items-center space-x-3">
          <img src={avatar} alt="Sherry Wolf" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-sm">Sherry Wolf</p>
            <p className="text-xs text-gray-500">Tutor</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;