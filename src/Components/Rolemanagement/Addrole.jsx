import React from 'react';
import './Managerole.css';
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export const Addrole = () => {
  return (
    <>
    <div className='manage_role'>
        <div  className='bg-[#FFFFFF] w-[600px] absolute left-[50%] top-[50%] rounded-[16px] grid justify-center items-center -translate-x-1/2 -translate-y-1/2'>
        <Link to={"/rolemanagement"} className='text-[#939191] no-underline'><div className='cursor-pointer absolute right-[3px] top-[3px] bg-[white] flex justify-center items-center rounded-[16px] w-[32px] h-[32px] text-[20px] text-[#93919]'><RxCross2/></div></Link>
            <div className='flex justify-between items-center mt-[20px] w-[540px]'>
                <div className='flex justify-start items-center text-[#1A1C1F] text-[28px] font-semibold font-montserrat'>Add Role</div>
                <Link to={"/managerole"} className='no-underline'>
                <div className='flex justify-end items-center text-[#E40443] text-[14px] font-semibold font-montserrat'>Manage</div>
                </Link>
            </div>

            <form className='addrole_form'>
                <div className='w-[540px] items-center'>
                    <label className='text-[#8D98A4] w-[540px] text-[12px] font-medium font-montserrat'>Role Name</label>
                    <select className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[44px] w-[540px] mt-[5px] ml-[10px] mr-[10px] text-[14px] font-medium font-montserrat text-[#5B6572]' placeholder='Enter Role Name'>
                        <option>Doctor</option>
                        <option>DHA</option>
                        <option>Pharmacy</option>
                        <option>Lab</option>
                        <option>Front Desk</option>
                        <option>Hospital Admin</option>
                        <option>Hospital Sub Admin</option>
                    </select>
                </div>

                <div className='mt-[10px] w-[540px] items-center'>
                    <label className='w-[540px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Additional Note</label>
                    <input type="text" className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[88px] mt-[5px] w-[100%] text-[14px] font-medium font-montserrat text-[#5B6572]' placeholder='Write here'/>

                </div>
                <div className='w-[540px] mt-[20px] items-center rounded-[12px] border-[1px] border-solid border-[#E1E5E8]'>
                    <div className='border-b-[px] border-b-solid border-b-[#E1E5E8] bg-[#E1E5E8] h-[46px] flex justify-start pl-[10px] items-center font-montserrat text-[#1A1C1F] text-[16px] font-medium border-t-none'>General Permission</div>
                    <div className='flex justify-between items-center border-b-[px] border-b-solid border-b-[#E1E5E8] h-[50px] pl-[10px] pr-[10px] text-[#5B6572] text-[14px] font-normal font-montserrat '>
                        <p>Permission 1</p>
                        <label >
                            <input type="checkbox" className='text-[#5B6572]'/>
                        </label>
                    </div>
                    <div className='flex justify-between items-center border-b-[px] border-b-solid border-b-[#E1E5E8] h-[50px] pl-[10px] pr-[10px] text-[#5B6572] text-[14px] font-normal font-montserrat'>
                        <p>Permission 2</p>
                        <label >
                            <input type="checkbox" className='text-[#5B6572]'/>
                        </label>
                    </div>
                    <div className='flex justify-between items-center border-b-[px] border-b-solid border-b-[#E1E5E8] h-[50px] pl-[10px] pr-[10px] text-[#5B6572] text-[14px] font-normal font-montserrat'>
                        <p>Permission 3</p>
                        <label >
                            <input type="checkbox" className='text-[#5B6572]'/>
                        </label>
                    </div>
                    <div className='border-b-[px] border-b-solid border-b-[#E1E5E8] bg-[#E1E5E8] h-[46px] flex justify-start pl-[10px] items-center font-montserrat text-[#1A1C1F] text-[16px] font-medium border-t-none'>User Permission</div>
                    <div className='flex justify-between items-center border-b-[px] border-b-solid border-b-[#E1E5E8] h-[50px] pl-[10px] pr-[10px] text-[#5B6572] text-[14px] font-normal font-montserrat'>
                        <p>Permission 4</p>
                        <label >
                            <input type="checkbox"  className='bg-[#E40443]'/>
                        </label>
                    </div>
                    <div className='flex justify-between items-center border-b-[px] border-b-solid border-b-[#E1E5E8] h-[50px] pl-[10px] pr-[10px] text-[#5B6572] text-[14px] font-normal font-montserrat'>
                        <p>Permission 5</p>
                        <label >
                            <input type="checkbox" />
                        </label>
                    </div>

                </div>
                <button className='bg-[#E40443] h-[44px] w-[162px] rounded-[8px] border-none font-montserrat text-[14px] font-semibold text-[white] flex justify-center items-center ml-[190px] mt-[20px] mb-[10px]'>Add Role</button>
                

            </form>

        </div>

    </div>
    </>
  )
}
export default Addrole