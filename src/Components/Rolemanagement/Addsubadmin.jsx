import React from 'react';
import './Managerole.css';
import {FaCaretDown} from 'react-icons/fa';
import flag from'../Assets/image 1.png';
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
export const Addsubadmin = () => {
  return (
    <>
    <div className='manage_role'>
        <div className='bg-[#FFFFFF] w-[600px] absolute left-[50%] top-[50%] rounded-[16px] grid justify-center items-center -translate-x-1/2 -translate-y-1/2'>
        <Link to={"/rolemanagement"} className='text-[#939191] no-underline'><div className='cursor-pointer absolute right-[3px] top-[3px] bg-[white] flex justify-center items-center rounded-[16px] w-[32px] h-[32px] text-[20px] text-[#93919]'><RxCross2/></div></Link>
            <div className='flex justify-between items-center mt-[20px] w-[536px] '>
                <div className='flex justify-start items-center text-[#1A1C1F] text-[28px] font-semibold font-montserrat'>Add Sub Admin</div>
            </div>
                <div className='absolute h-[4px] rounded-[6px] w-[496px] bg-[#EEF0F3] top-[95px] ml-[40px]'> 
                    <span className='absolute h-[100%] w-[13%] bg-[#E40443]'></span>
                </div>
            <div className='w-[100%] flex justify-between items-center mt-[20px] relative'>
                <span className='w-[32px] h-[32px] rounded-[50%] bg-[#E40443] text-[white] text-[10px] font-semibold flex justify-center items-center'>01</span>
                <span className='w-[32px] h-[32px] rounded-[50%] bg-[#EEF0F3] text-[black] text-[10px] font-semibold flex justify-center items-center'>02</span>
                

            </div>
            <div className='mt-[10px] w-[536px]'>
                <label className='w-[536px] text-[#8D98A4] text-[12px] font-medium font-montserrat '>Name</label>
                <input type="text" name="" id="" placeholder='Admin name' className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[40px] mt-[5px] w-[100%] flex justify-start  text-[#5B6572] text-[14px] font-medium font-montserrat'/>

            </div>
            <div className='mt-[10px] w-[536px]'>
                <label className='w-[536px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Phone Number</label>
                <div className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[40px] mt-[5px] w-[100%] flex justify-start text-center text-[#5B6572] text-[14px] font-medium font-montserrat'>
                    <div className='flex justify-around items-center w-[52px] ml-[10px]'>
                        <img src={flag} alt="" className='flex justify-start items-center '/>
                        < FaCaretDown className='flex justify-end items-center '/>
                    </div>
                <input type="text" name="" id="" placeholder='Enter admin phone number' className='w-[427px] text-[14px] font-medium font-montserrat text-[#5B6572] border-none outline-none '/>
                </div>

            </div>
            <div className='mt-[10px] w-[536px]'>
                <label className='w-[536px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Email</label>
                <input type="text" name="" id="" placeholder='Email Address' className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[40px] mt-[5px] w-[100%] flex justify-start  text-[#5B6572] text-[14px] font-medium font-montserrat'/>

            </div>
            <div className='mt-[10px] w-[536px]'>
                <label className='w-[536px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Assign Role</label>
                <select name="" id="" placeholder='Select Role' className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[40px] mt-[5px] w-[100%] flex justify-start  text-[#5B6572] text-[14px] font-medium font-montserrat'>
                    <option value="">Select Role</option>
                </select>
                

            </div>
            <Link to={"/addsubadmincomplete"} className='no-underline '>
            <button className='bg-[#E40443] h-[44px] w-[162px] rounded-[8px] border-none font-montserrat text-[14px] font-semibold text-[white] flex justify-center items-center ml-[190px] mt-[20px] mb-[20px]'>Next</button>
            </Link>
        </div>
        
    </div>
    </>
  )
}
export default Addsubadmin
