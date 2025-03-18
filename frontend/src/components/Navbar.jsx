import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { TbCategory } from "react-icons/tb";
import { BsChatRight } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content bg-base-100 flex flex-col gap-y-3 items-center rounded-box z-1 mt-3 w-28 p-2 shadow"
          >

<li className="flex flex-col text-gray-600 items-center">
            <HiOutlineHome size={18} />
           
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <TbCategory size={18}/>
         
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <BsChatRight size={18} />
           
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <MdPeopleOutline size={18} />
           
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <IoIosNotificationsOutline size={18} />
           
          </li>
          <li className="flex  rounded-l-3xl rounded-r-3xl p-1.5 border border-gray-200  -mt-0.5 w-[60px]   items-center">
            <p className="rounded-full w-6 bg-gray-300 h-6"></p>
           <BsList />
          </li>
          
          </ul>
        </div>

        <div className="flex gap-x-9 ml-4">
        <a className="text-[16px] mt-2 font-semibold">SimpliTrain</a>
        <label className="input rounded-4xl w-28 md:w-64 lg:w-72" style={{backgroundColor:"rgba(221, 221, 221, 0.5)"}}>
 <FiSearch size={20} />
  <input type="search" required placeholder="What would you like to learn?" style={{color:"rgba(0, 0, 0, 1)"}}/>
</label>

        </div>
      
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex justify-evenly gap-x-10 mr-5 ">
          <li className="flex flex-col text-gray-600 items-center">
            <HiOutlineHome size={18} />
            <a className="text-[10px]">Home</a>
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <TbCategory size={18}/>
            <a className="text-[10px]">Categories</a>
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <BsChatRight size={18} />
            <a className="text-[10px]">Chat</a>
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <MdPeopleOutline size={18} />
            <a className="text-[10px]">Forum</a>
          </li>
          <li className="flex flex-col text-gray-600 items-center">
            <IoIosNotificationsOutline size={18} />
            <a className="text-[10px]">Notifications</a>
          </li>
          <li className="flex  rounded-l-3xl rounded-r-3xl p-1.5 border border-gray-200  -mt-0.5 w-[60px]   items-center">
            <p className="rounded-full w-6 bg-gray-300 h-6"></p>
           <BsList />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
