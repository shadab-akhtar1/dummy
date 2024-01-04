import React from 'react';
import './Managerole.css';
import { RiPencilFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Managerole = () => {
  return (
    <>
    <div className='manage_role'>
        <div className='bg-[#FFFFFF] w-[600px] absolute left-[50%] top-[50%] rounded-[16px] grid justify-center items-center -translate-x-1/2 -translate-y-1/2'>
                <Link to={"/addrole"} className='text-[#939191] no-underline'><div className='cursor-pointer absolute right-[3px] top-[3px] bg-[white] flex justify-center items-center rounded-[16px] w-[32px] h-[32px] text-[20px] text-[#93919]'><RxCross2/></div></Link>
            <div className='flex justify-between items-center mt-[20px] w-[540px] '>
                <div className='flex justify-start items-center text-[#1A1C1F] text-[28px] font-semibold font-montserrat '>Manage Role</div>
            </div>
            <div className='manage_role_container_2'>
                <div className='text-[#1A1C1F] mt-[30px] text-[14px] font-montserrat font-medium'>All Roles</div>
                <div className='border-[1px] border-solid border-[#EEF0F3] bg-[#F4F4F4] rounded-[8px] h-[48px] w-[540px] flex justify-between items-center mt-[20px]  '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat flex justify-start items-center ml-[10px]'>Doctor</div>
                    <div className='flex justify-end items-center mr-[10px]'>
                        <div className='mr-[10px]'><RiPencilFill className='text-[#41B079]'/></div>
                        <div className=''><RiDeleteBin5Fill className='text-[#F1614B]'/></div>
                    </div>
                </div>
           
        
                <div className='border-[1px] border-solid border-[#EEF0F3] bg-[#F4F4F4] rounded-[8px] h-[48px] w-[540px] flex justify-between items-center mt-[20px] '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat flex justify-start items-center ml-[10px]'>DHA</div>
                    <div className='flex justify-end items-center mr-[10px]'>
                        <div className='mr-[10px]'><RiPencilFill className='text-[#41B079]'/></div>
                        <div className=''><RiDeleteBin5Fill className='text-[#F1614B]'/></div>
                    </div>
                </div>
            
                <div className='border-[1px] border-solid border-[#EEF0F3] bg-[#F4F4F4] rounded-[8px] h-[48px] w-[540px] flex justify-between items-center mt-[20px] '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat flex justify-start items-center ml-[10px]'>Pharmacy</div>
                    <div className='flex justify-end items-center mr-[10px]'>
                        <div className='mr-[10px]'><RiPencilFill className='text-[#41B079]'/></div>
                        <div className=''><RiDeleteBin5Fill className='text-[#F1614B]'/></div>
                    </div>
                </div>
                <div className='border-[1px] border-solid border-[#EEF0F3] bg-[#F4F4F4] rounded-[8px] h-[48px] w-[540px] flex justify-between items-center mt-[20px] '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat flex justify-start items-center ml-[10px]'>Front Desk</div>
                    <div className='flex justify-end items-center mr-[10px]'>
                        <div className='mr-[10px]'><RiPencilFill className='text-[#41B079]'/></div>
                        <div className=''><RiDeleteBin5Fill className='text-[#F1614B]'/></div>
                    </div>
                </div>
            
                <div className='border-[1px] border-solid border-[#EEF0F3] bg-[#F4F4F4] rounded-[8px] h-[48px] w-[540px] flex justify-between items-center mt-[20px] '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat flex justify-start items-center ml-[10px]'>Hospital Admin</div>
                    <div className='flex justify-end items-center mr-[10px]'>
                        <div className='mr-[10px]'><RiPencilFill className='text-[#41B079]'/></div>
                        <div className=''><RiDeleteBin5Fill className='text-[#F1614B]'/></div>
                    </div>
                </div>
            
            
                <div className='border-[1px] border-solid border-[#EEF0F3] bg-[#F4F4F4] rounded-[8px] h-[48px] w-[540px] flex justify-between items-center mt-[20px] '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat flex justify-start items-center ml-[10px]'>Hospital Sub Admin</div>
                    <div className='flex justify-end items-center mr-[10px]'>
                        <div className='mr-[10px]'><RiPencilFill className='text-[#41B079]'/></div>
                        <div className=''><RiDeleteBin5Fill className='text-[#F1614B]'/></div>
                    </div>
                </div>
            </div>
            <button className='bg-[#E40443] h-[44px] w-[162px] rounded-[8px] border-none font-montserrat text-[14px] font-semibold text-[white] flex justify-center items-center ml-[190px] mt-[20px] mb-[10px]'>Save</button>
            
        </div>
    </div>
    
    </>
  )
}
export default Managerole;