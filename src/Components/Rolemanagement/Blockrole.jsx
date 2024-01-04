import React from 'react';
import './Managerole.css';
import { Link } from "react-router-dom";
import warning from "../Assets/image 228.png";
import { RxCross2 } from "react-icons/rx";

export const Blockrole = () => {
  return (
    <>
    <div className='manage_role'>
    <div className='w-[550px] h-[340px] bg-[white] flex justify-center items-center absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 relevtive'>
            <Link to={"/rolemanagement"} className='text-[#939191] no-underline'><div className='cursor-pointer absolute right-[-12px] top-[-12px] bg-[white] flex justify-center items-center rounded-[6px] w-[32px] h-[32px] text-[#939191] text-[20px] '><RxCross2/></div></Link>
            <div className='adddha_success_box_block'>
                <div className='flex justify-center items-center'>
                    <img src={warning} alt="" className='w-[117px] h-[112px]'/>

                </div>
                <div className='grid justify-center items-center '>
                    <h4 className='flex justify-center items-center text-[20px] font-montserrat font-bold text-[#1A1C1F]'>Are You Sure You Want To Block Role?</h4>
                    <p className='items-center text-[14px] font-medium font-montserrat text-[#1A1C1F] flex justify-center '>Role Account will be Blocked</p>

                </div>
                <div className='mt-[30px] flex justify-center items-center'>
                    <Link to={"/rolemanagement"}>
                <button className='ml-[1px] mr-[10px] w-[200px] h-[44px] border-none bg-[#DCDCDC] rounded-[8px] text-[#939191] text-[12px] font-montserrat font-semibold'>Cancel</button>
                </Link>
                <Link to={"/blockrolesuccess"} className='blockdhasuccess_link'>
                <button className='ml-[10px] mr-[10px] w-[200px] h-[44px] border-none bg-[#EA1414] rounded-[8px] text-[white] text-[12px] font-montserrat font-semibold'>Block</button>
                </Link>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blockrole