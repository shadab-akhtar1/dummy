import React from 'react';
import './Managerole.css';
import profile_logo from '../Assets/Ellipse 2.svg';
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Editpermision = () => {
  return (
    <>
    <div className='manage_role'>
      <div className='bg-[#FFFFFF] w-[600px] absolute left-[50%] top-[50%] rounded-[16px] grid justify-center items-center -translate-x-1/2 -translate-y-1/2'>
      <Link to={"/rolemanagement"} className='text-[#939191] no-underline'><div className='cursor-pointer absolute right-[3px] top-[3px] bg-[white] flex justify-center items-center rounded-[16px] w-[32px] h-[32px] text-[20px] text-[#93919]'><RxCross2/></div></Link>
            <div className='flex justify-between items-center mt-[20px] w-[536px] '>
                <div className='flex justify-start items-center text-[#1A1C1F] text-[28px] font-semibold font-montserrat'>Edit Permision</div>
            </div>
            <div className='flex justify-between items-center w-[536px] mt-[20px]'>
              <div className='flex justify-start items-center '>
                <div className=''><img src={profile_logo} alt="" className='w-[40px] h-[40px]'/></div>
                <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat '>Jacob Jones</div>
              </div>
              <div className=''>
                <select name="" id="" placeholder='Booking Manager' className='flex justify-end items-center w-[200px] h-[40px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] text-[#1A1C1F] text-[16px] font-normal font-montserrat'>
                  <option value="">Booking Manager</option>

                </select>
              </div>
            </div>
            <form action="" className='editpermision_form'>
            <div className='w-[540px] mt-[20px] text-center border-[1px] border-solid border-[#E1E5E8] rounded-[12px]'>
                    <div className='border-[1px] border-solid border-[#E1E5E8] bg-[#E1E5E8] h-[46px] flex justify-start pl-[10px] text-center items-center text-[#1A1C1F] text-[16px] font-montserrat font-medium border-t-none'>General Permission</div>
                    <div className='border-[1px] border-solid border-[#E1E5E8] h-[50px] flex justify-between items-center pl-[10px] pr-[10px]  text-[#5B6572] text-[14px] font-montserrat font-normal'>
                        <p>Permission 1</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_editpermision_input_inp'/>
                        </label>
                    </div>
                    <div className='border-[1px] border-solid border-[#E1E5E8] h-[50px] flex justify-between items-center pl-[10px] pr-[10px]  text-[#5B6572] text-[14px] font-montserrat font-normal'>
                        <p>Permission 2</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_editpermision_input_inp'/>
                        </label>
                    </div>
                    <div className='border-[1px] border-solid border-[#E1E5E8] h-[50px] flex justify-between items-center pl-[10px] pr-[10px]  text-[#5B6572] text-[14px] font-montserrat font-normal'>
                        <p>Permission 3</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_editpermision_input_inp'/>
                        </label>
                    </div>
                    <div className='border-[1px] border-solid border-[#E1E5E8] bg-[#E1E5E8] h-[46px] flex justify-start text-center items-center pl-[10px] text-center text-[#1A1C1F] text-[16px] font-montserrat font-medium border-t-none'>User Permission</div>
                    <div className='border-[1px] border-solid border-[#E1E5E8] h-[50px] flex justify-between items-center pl-[10px] pr-[10px]  text-[#5B6572] text-[14px] font-montserrat font-normal'>
                        <p>Permission 4</p>
                        <label >
                            <input type="checkbox"  className='addsubadmincompleted_editpermision_inp'/>
                        </label>
                    </div>
                    <div className='border-[1px] border-solid border-[#E1E5E8] h-[50px] flex justify-between items-center pl-[10px] pr-[10px]  text-[#5B6572] text-[14px] font-montserrat font-normal'>
                        <p>Permission 5</p>
                        <label >
                            <input type="checkbox" />
                        </label>
                    </div>

                </div>
                <button className='bg-[#E40443] h-[44px] w-[162px] rounded-[8px] border-none font-montserrat text-[14px] font-semibold text-[white] flex justify-center items-center ml-[190px] mt-[20px] mb-[20px]'>Add Sub-Admin</button>
            </form>
      </div>
    </div>
    
    </>
  )
}
export default Editpermision
