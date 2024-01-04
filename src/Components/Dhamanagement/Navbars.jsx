import React from 'react';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';


export const Navbars = () => {
  return (
    <>
    

    <nav className='flex justify-between items-center  h-[120px] py-[] px-[] ml-[70px] mr-[50px] border-b-1 gap-[8px] bg-white border-solid border-[#E3E6E8]'>
        <div className=' mb-[] h-[25px] w-[100px]'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='flex justitfy-end items-center pl-[10px] '>
        <Link to={"/dhamanagement"} className='no-underline'>
            <li  className='ml-[5px] pr-[10px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid'><p className='text-center'>DHA</p> <span className='mt-[-10px]'>Management</span></li>
            </Link>
            <Link to={"/doctormanagement"} className='navbars_link_tag'>
            <li  className='ml-[5px] pr-[10px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid'><p className='text-center'>Doctor</p> <span className='mt-[-10px]'>Management</span></li>
            </Link>
            <li className='ml-[5px]  pr-[20px] no-underline list-none text-[#8D98A4] cursor-pointer text-[14px] font-montserrat font-medium flex items-center'>Our Network < FaCaretDown className='ml-[5px]'/></li>
            <Link to={"/pharmacymanagement"} className='navbars_link_tag'>
            <li  className='ml-[5px] pr-[10px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid'><p className='text-center'>Pharmacy</p> <span className='mt-[-10px]'>Management</span></li>
            </Link>
            <Link to={"/labmanagement"} className='navbars_link_tag'>
            <li  className='ml-[5px] pr-[10px] no-underline list-none text-[#8D98A4] font-montserrat text-[14px] font-medium cursor-pointer grid'><p className='text-center'>Lab</p> <span className='mt-[-10px]'>Management</span></li>
            </Link>
            <li className='ml-[5px]  pr-[20px] no-underline list-none text-[#8D98A4] cursor-pointer text-[14px] font-montserrat font-medium flex items-center'>Join Us With <FaCaretDown className='ml-[5px]'/></li>
            <Link to={"/profile"} className='navbars_link'>
            <li className='mr-[10px] p-[5px] no-underline list-none bg-[#F5F6F7] border-1 borde-solid border-[#F5F6F7] rounded-[8px] flex justify-center items-center text-[14px] font-montserrat font-medium'><img src={profile} alt="" className='pr-[3px]'/>Jaydeep Sakhiya <FaCaretDown/></li>
            </Link>
            <Link to={"/notification"} className='navbars_link_tag'>
            <li className='mr-[10px] p-[5px] no-underline list-none bg-[#F5F6F7] border-1 borde-solid border-[#F5F6F7] rounded-[8px] flex justify-center items-center text-[14px] font-montserrat font-medium'><FaBell className='w-[25px] h-[25px] text-[#8D98A4]'/></li>
            </Link>
            <li className='bg-[#E40443] rounded-[8px] mr-[15px]  p-[5px] no-underline list-none border-1 border-solid border-[#F5F6F7] flex justify-center items-center text-[14px] font-medium font-montserrat'>< BsTelephone className='h-[20px] w-[20px] fill-white '/></li>
        </ul>

    </nav>
    </>
  )
}
export default Navbars