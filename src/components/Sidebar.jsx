import React, { useState } from 'react';
import { FiHome, FiUsers, FiBook, FiCalendar, FiFileText, FiMusic, FiMic, FiDollarSign, FiShare2, FiSettings, FiLogOut, FiSearch } from 'react-icons/fi';

const NavItem = ({ icon, text, active, onClick }) => (
  <li
    className={`flex items-center p-3 my-1 cursor-pointer rounded-lg transition-colors ${
      active ? 'bg-white text-primary-purple' : 'text-white hover:bg-white/20'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-4 font-medium">{text}</span>
  </li>
);

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { icon: <FiHome size={20} />, text: 'Home' },
    { icon: <FiUsers size={20} />, text: 'My Students' },
    { icon: <FiBook size={20} />, text: 'My Courses' },
    { icon: <FiCalendar size={20} />, text: 'Calendar' },
    { icon: <FiFileText size={20} />, text: 'Assignment' },
    { icon: <FiMusic size={20} />, text: 'Music Library' },
    { icon: <FiMic size={20} />, text: 'Practice Studio' },
    { icon: <FiDollarSign size={20} />, text: 'Payment Summary' },
    { icon: <FiShare2 size={20} />, text: 'Refer & Earn' },
    { icon: <FiSettings size={20} />, text: 'Settings' },
  ];

  return (
    <div className="bg-primary-purple text-white w-64 min-h-screen p-6 flex flex-col justify-between fixed lg:relative -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-20">
      <div>
        <h1 className="text-3xl font-bold mb-4">UPKRAFT</h1>
        <div className="relative mb-6">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full bg-white/20 placeholder-white/70 text-white rounded-lg py-2 pl-10 focus:outline-none"
          />
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <NavItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                active={activeItem === item.text}
                onClick={() => setActiveItem(item.text)}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <button className="flex items-center p-3 w-full text-left text-white/80 hover:text-white">
          <FiLogOut size={20} />
          <span className="ml-4 font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;