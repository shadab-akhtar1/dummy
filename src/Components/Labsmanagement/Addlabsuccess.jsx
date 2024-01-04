import React from 'react';
import './Blocklab.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";

export const Addlabsuccess = () => {
  return (
    <>
    <div className='blocklab_hero_block'>
         
    <div className='w-[550px] h-[340px] bg-[white] flex justify-center items-center absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 relevtive'>
          <Link to={"/labmanagement"} className='text-[#939191] no-underline'><div className='cursor-pointer absolute right-[-12px] top-[-12px] bg-[white] flex justify-center items-center rounded-[6px] w-[32px] h-[32px] text-[#939191] text-[20px] '><RxCross2/></div></Link>
          <div className='adddha_success_box_block'>
              <div className='flex justify-center items-center'>
                  <img src={Done} alt="" className='w-[117px] h-[112px]'/>

              </div>
              <div className='grid justify-center items-center '>
                  <h4 className='flex justify-center items-center text-[20px] font-montserrat font-bold text-[#1A1C1F]'>Successful</h4>
                  <p className='items-center text-[14px] text-center font-medium font-montserrat text-[#1A1C1F] flex justify-center '>Your account is created successfully.
Your profile is under review, We will inform you once your account is approved</p>

              </div>
              <div className='flex justify-center items-center'>
                <button className='bg-[#FCE6EC] w-[410px] h-[40px] rounded-[8px] border-none text-[#E40443] text-[12px] font-semibold font-montserrat mt-[20px] flex justify-center items-center'>Continue</button>
             </div>
          </div>
          
      </div>
         
     </div>
    </>
  )
}
export default Addlabsuccess
