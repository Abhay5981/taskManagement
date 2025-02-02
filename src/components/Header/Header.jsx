import React from "react";
import { BiTask } from "react-icons/bi"; // Importing BiTask icon
import { FaListUl } from "react-icons/fa";
import { CiViewBoard, CiLogout, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Header() {
  const navigate = useNavigate()
  const handleCreateTask = ()=>{
    navigate('/createTask')
  }

  return (
    <header className="p-4 m-10 z-0" >
      {/* Top Section: Logo and Profile */}
      <div className="flex justify-between items-center mb-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#7B1984] flex items-center">
          <span className="mr-2">
            <BiTask size={24} />
          </span>
          TaskBuddy
        </h1>

        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src="profile"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
          />
          <h2 className="text-lg font-medium">Name</h2>
        </div>
      </div>

      {/* Bottom Section: Buttons */}
      <div className="flex justify-between items-center">
        {/* Left Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 text-black rounded-lg shadow-md hover:bg-[#769f9f]">
            <FaListUl className="mr-2" size={16} /> List
          </button>
          <button className="flex items-center px-4 py-2 text-black rounded-lg shadow-md hover:bg-[#769f9f]">
            <CiViewBoard className="mr-2" size={16} /> Board
          </button>
        </div>

        {/* Right Logout Button */}
        <button className="flex items-center px-4 py-2  text-black rounded-lg shadow-md hover:bg-red-600">
          <CiLogout className="mr-2" size={16} /> Logout
        </button>
      </div>

      <div className="filter-section flex justify-between items-center p-4 ">
  {/* Left Section: Filters */}
  <div className="flex items-center space-x-4">
    <span className="font-medium text-gray-700">Filter By:</span>
    <button className="flex items-center px-3 py-1 text-black rounded-full border border-gray-300 hover:bg-[#769f9f] shadow-md space-x-1">
  <span>Category</span>
  <span className="text-lg">
    <IoIosArrowDown />
  </span>
</button>
<button className="flex items-center px-3 py-1 text-black rounded-full border border-gray-300 hover:bg-[#769f9f] shadow-md space-x-1">
  <span>Due Date</span>
  <span className="text-lg">
    <IoIosArrowDown />
  </span>
</button>
  </div>

  {/* Right Section: Search Bar and Add Task */}
  <div className="searchbar relative flex items-center  w-full max-w-sm space-x-4">
  <span className="absolute inset-y-0 left-3 flex items-center text-black">
    <CiSearch />
  </span>
    <input
      type="text"
     
      placeholder="Search"
      className="pl-10 py-2 border inset-y-0  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="px-4 py-2 bg-[#7B1984] text-white rounded-full shadow-md hover:bg-green-600"
    
    >
    <Link to="/createTask">
    ADD TASK
    </Link>
     
    </button>
  </div>
</div>
 <hr />


    </header>
   
  );
}

export default Header;

