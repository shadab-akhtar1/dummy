import React, { useState } from 'react';

import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export const Navbar = () => {
  const [isActive, setIsActive]= useState(false);
  return (
    <div>
    <nav className='flex justify-between items-center h-[120px] border-b-1 gap-[8px] bg-[white] border-solid border-[#E3E6E8] ml-[70px] mr-[70px] '>
        <div className='h-[36px] w-[123px]'>
        <img src={Weblogo} alt="logo" />
        </div>

        <ul className='flex justify-end items-center text-center pl-[10px]'>
            <Link to={"/dhamanagement"} className='no-underline'>
            <li className='ml-[5px] pr-[20px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid items-center'><p>DHA</p> <span className='mt-[-10px]'>Management</span></li>
            </Link>
            <Link to={"/doctormanagement"} className='no-underline'>
            <li className='ml-[5px] pr-[20px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid items-center'><p>Doctor</p> <span  className='mt-[-10px]'>Management</span> </li>
            </Link>
            <li className='ml-[5px] pr-[20px]  no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer flex items-center'>Our Network < FaCaretDown className='ml-[5px]'/></li>
            <Link to={"/pharmacymanagementmain"} className='no-underline'>
            <li className='ml-[5px] pr-[20px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid items-center'><p>Pharmacy </p><span  className='mt-[-10px]'>Management</span></li>
            </Link>
            <Link to={"/labmanagement"} className='no-underline'>
            <li className='ml-[5px] pr-[20px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid items-center'><p>Lab</p> <span  className='mt-[-10px]'>Management</span></li>
            </Link>
            <li className='ml-[5px] pr-[20px]  no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer flex item-center'>Join Us With <FaCaretDown className='ml-[5px]'/></li>
            
            <li className='ml-[5px] mr-[20px] pl-[5px] pr-[5px] no-underline list-none bg-[#F5F6F7] border-1 border-solid border-[#F5F6F7] rounded-[8px] flex justify-center items-center cursor-pointer text-[14px] font-montserrat font-medium text-[#38404A]'>
    
              <div className='flex justify-between items-center text-[#333] cursor-pointer p-[5px]' onClick={(e)=> setIsActive(!isActive)}>Hospital Name
              <FaCaretDown/>
              </div>
              {isActive &&(
              <div className='absolute top-[100px] p-[10px] bg-[white] '>
               
                <Link to="/rolemanagement" className='no-underline'>
                <div className='p-[10px] cursor-pointer text-[#1A1C1F] text-[15px] font-montserrat font-medium'>Role Access Management</div>
                </Link>
                
                
                
                <Link to="/bookingrequestdha" className='no-underline'>
                <div className='p-[10px] cursor-pointer text-[#1A1C1F] text-[15px] font-montserrat font-medium'>Booking Request</div>
                </Link>
                <Link to="/bookingpendingdha" className='no-underline'>
                <div className='p-[10px] cursor-pointer text-[#1A1C1F] text-[15px] font-montserrat font-medium'>Booking Pending</div>
                </Link>
                <Link to="/dhahospital" className='no-underline'>
                <div className='p-[10px] cursor-pointer text-[#1A1C1F] text-[15px] font-montserrat font-medium'>Booking Completed</div>
                </Link>
                <Link to="/rejectdhahospital" className='no-underline'>
                <div className='p-[10px] cursor-pointer text-[#1A1C1F] text-[15px] font-montserrat font-medium'>Booking Rejected</div>
                </Link>

              </div>
              )}
              
              </li>
              <Link to="/notification" className='no-underline'>
            <li className='ml-[5px] mr-[20px] pl-[5px] pr-[5px] no-underline list-none bg-[#F5F6F7] border-1 border-solid border-[#F5F6F7] rounded-[8px] flex justify-center items-center cursor-pointer text-[14px] font-montserrat font-medium text-[#38404A]'><FaBell className='h-[32px] w-[20px] text-[#8D98A4]'/></li>
            </Link>
        </ul>

    </nav>




    </div>
  )
}

export default Navbar
