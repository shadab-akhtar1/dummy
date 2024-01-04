import React from 'react';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import avatar1 from '../Assets/Label Initials.png';
import avatar2 from '../Assets/Avatar (1).png';
import avatar3 from '../Assets/Avatar.png';
import avatar4 from '../Assets/Avatar (2).png';
import avatar5 from '../Assets/Avatar (3).png';
import { GoChevronLeft } from "react-icons/go";
import {GoChevronRight} from "react-icons/go";

export const Notification = () => {
  return (
    <>
    <div className='notification'><Navbar/></div>
    <div className='w-[100%] mt-[10px] '>
        <div className='ml-[70px] pt-[1px] '><h2 className='font-montserrat  text-[22px] font-bold flex justify-start items-center '><Link to={"/dhamanagement"} className=''><PiArrowLeftFill className='text-[#1A1C1F] text-center items-center flex pr-[10px] text-[30px]'/></Link>Notifications</h2></div>
        <div className='ml-[70px] mr-[70px] h-[809px]'>
          <div className='border-t-[1px] border-t-solid border-t-[#DBDADE] flex justify-end items-center h-[68px]'>
            <div className='flex justify-around items-center '>
              <div className='mr-[20px] text-[#E40443] text-[12px] font-normal font-montserrat flex justify-center items-center '>Mark all as read</div>
              <Link to={"/notificationcomplete"} className='notification_link'>
              <div className='mr-[20px] text-[#E40443] text-[12px] font-normal font-montserrat flex justify-center items-center'>clear all</div>
              </Link>
              <div className='mr-[20px] text-[#8D98A4] text-[15px] font-normal font-montserrat flex justify-center items-center'>1-10 of 10</div>
              <div className='mr-[20px] text-[#8D98A4] text-[15px] font-normal font-montserrat flex justify-center items-center'><GoChevronLeft className='text-[#4B4656] w-[22px] h-[22px]'/><GoChevronRight className='text-[#4B4656] w-[22px] h-[22px]'/></div>

            </div>

          </div>
          
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE] bg-[#DBDADE] h-[60px]'>
            <div className='flex justify-start items-center '>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar1} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>John(DHA) has assigned you Doctor for your symptoms for fever and other issue</div>
            </div>
            <div className='flex justify-end items-center '>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center '>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
          
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE]  h-[60px]'>
            <div className='flex justify-start items-center'>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar3} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='flex justify-end items-center'>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE]  h-[60px]'>
            <div className='flex justify-start items-center'>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar2} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='flex justify-end items-center'>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE]  h-[60px]'>
            <div className='flex justify-start items-center'>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar4} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='flex justify-end items-center'>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE]  h-[60px]'>
            <div className='flex justify-start items-center'>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar1} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='flex justify-end items-center'>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE]  h-[60px]'>
            <div className='flex justify-start items-center'>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar5} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='flex justify-end items-center'>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
          <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#DBDADE]  h-[60px]'>
            <div className='flex justify-start items-center'>
              <div className='ml-[20px] w-[32px] h-[32px]'><img src={avatar3} alt="" /></div>
              <div className='text-[#5B6572] text-[16px] font-medium font-montserrat ml-[20px]'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='flex justify-end items-center'>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>25-07-2023</div>
              <div className='mr-[20px] text-[#8D98A4] text-[13px] font-normal font-montserrat flex justify-center items-center'>05:10 AM</div>
            </div>

          </div>
            
        </div>

    </div>
    </>
  )
}
export default Notification
