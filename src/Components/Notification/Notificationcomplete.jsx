import React from 'react';
import {Navbar} from '../Dhamanagement/Navbar';
import {PiArrowLeftFill} from 'react-icons/pi';
import {Link} from 'react-router-dom';
import mobile from '../Assets/OBJECTS.png';
import { GoChevronLeft } from "react-icons/go";
import {GoChevronRight} from "react-icons/go";

export const Notificationcomplete = () => {
  return (
    <>
    <div className=''><Navbar/></div>
    <div className='w-[100%] mt-[10px]'>

    <div className='ml-[70px] pt-[1px] '><h2 className='font-montserrat text-[22px] font-bold flex justify-start items-center '><Link to={"/notification"} className=''><PiArrowLeftFill className='text-[#1A1C1F] text-center items-center flex pr-[10px] text-[30px]'/></Link>Notifications</h2></div>
      <div className='ml-[70px] mr-[70px] '>
          <div className='border-t-[1px] border-t-solid border-t-[#DBDADE] flex justify-end items-center h-[68px]'>
            <div className='flex justify-around items-center '>
              <div className='mr-[20px] text-[#E40443] text-[12px] font-normal font-montserrat flex justify-center items-center '>Mark all as read</div>
              <div className='mr-[20px] text-[#E40443] text-[12px] font-normal font-montserrat flex justify-center items-center'>Delete all</div>
              <div className='mr-[20px] text-[#8D98A4] text-[15px] font-normal font-montserrat flex justify-center items-center'>1-10 of 10</div>
              <div className='mr-[20px] text-[#8D98A4] text-[15px] font-normal font-montserrat flex justify-center items-center'><GoChevronLeft className='text-[#4B4656] w-[22px] h-[22px]'/><GoChevronRight className='text-[#4B4656] w-[22px] h-[22px]'/></div>

            </div>

          </div>
          <div className='-translate-x-1/2 -translate-y-1/2 absolute left-[50%] top-[50%] rounded-[16px] bg-[white] mt-[120px] w-[400px] grid justify-center items-center  '>
            <div className='w-[363px] h-[240px] flex justify-center items-center '><img src={mobile} alt="" /></div>
            <div className='flex justify-center items-center text-[#040404] text-[20px] font-semibold font-montserrat mt-[20px] text-center '>"No new notifications at the moment. Stay tuned for updates!"</div>
          </div>

         

      </div>
      
    </div>
    
    </>
  )
}
export default Notificationcomplete
