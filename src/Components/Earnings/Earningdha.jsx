import React from 'react';
import Navbars from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import profile_logo from '../Assets/Ellipse 2.svg';
import {IoCallOutline} from 'react-icons/io5';
import { HiChevronUpDown } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import Pagination from '../Dhamanagement/Pagination';

export const Earningdha = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='w-[100%] bg-[#F4F4F4] pt-[20px]'>
        <div className='ml-[70px] pt-[1px] mr-[70px]'><h2 className='flex justify-start font-bold font-montserrat text-[22px]'><Link to={"/profile"} className='earning_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='text-[#1A1C1F] text-center pt=[3px] pr-[10px] text-[30px]'/></Link>My Earnings</h2></div>
        <div className='flex justify-start ml-[80px]  border-b-[1px] border-b-solid border-b-[#E1E5E8]'>
        <Link to={"/earning" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]  text-[#8D98A4] text-[16px] font-medium font-montserrat'>All</div>
            </Link>
            <div className='mt-[20px] mr-[20px] border-b-[2px] border-b-solid border-b-[#E40443] text-[#1A1C1F] text-[16px] font-medium font-montserrat cursor-pointer'>DHA</div>
            
            <Link to={"/earningdoctor" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]   text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>Doctor</div>
            </Link>
            <Link to={"/earningpharmacy" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]   text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>Pharmacy</div>
            </Link>
            <Link to={"/earninglab" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]   text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>Lab</div>
            </Link>
        </div>
        <div className='flex justif-between bg-[white] mr-[70px] ml-[70px] items-center rounded-[8px] mt-[20px]'>
        <div className='flex justify-start items-center w-[500px] p-[10px]'>
          <img src={profile_logo} alt="profile" />
          <div className='pl-[10px] text-[16px] font-semibold font-montserrat w-[180px]'>Hospital Name <p className='text-[#E40443] text-[14px] font-medium font-montserrat'>Location</p></div>
          
        </div>
        <div className='flex justify-end items-center'>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>786544<p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>Total Cases</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>Rs 500000 <p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>Total Earnings</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#1A1C1F] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>Rs 300000 <p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>This Months Earnings</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#1A1C1F] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>Rs 200000 <p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>Total Reedemeed</p></div>
        </div>
      </div>
      <div className='flex justify-between items-center ml-[80px] mr-[70px] border-b-[1px] border-b-solid border-b-[#E1E5E8] h-[32px] mt-[20px]'>
        <div className='flex justify-start items-center mt-[10px]'>
            <div className='text-[1A1C1F] border-b-[2px] border-b-solid border-b-[#E40443] text-[16px] font-medium font-montserrat'>History</div>
            <Link to={"/earningdhahistory"} className='earning_link'>
            <div className='ml-[20px] text-[#8D98A4] text-[16px] font-medium font-montserrat '>Withdrawls</div>
            </Link>
        </div>
        <div className='flex justify-end items-center '>
            <div className='mr-[20px] flex justify-center items-center text-[#E40443] text-[14px] font-medium font-montserrat'>sort by <HiChevronUpDown/></div>
            <div className='flex justify-around items-center w-[160px]'>
                <div className='text-[#333333] text-[14px] font-medium font-montserrat'>page</div>
                <div className='flex justify-center items-center border-[1px] border-solid border-[#DDDDDD] rounded-[8px] bg-[white] w-[60px]'>1 <MdOutlineKeyboardArrowDown/></div>
                <div className='text-[#333333] text-[14px] font-medium font-montserrat'>of 10</div>
            </div>

        </div>
      </div>

      <div className='bg-[white] rounded-[16px] p-[20px] mt-[20px] w-[484px] ml-[70px]'>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
              <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'> #1234</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Patient Name</li>
      
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'> #1234</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Patient Name</li>
            
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'> #1234</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Patient Name</li>
                
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'> #1234</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Patient Name</li>
                
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
              
              </ul>
            </div>

            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'> #1234</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Patient Name</li>
                
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
              
              </ul>
            </div>

            
            <div className='mb-[20px] mt-[20px] '><Pagination/></div>
                

          </div>

    </div>
    </>
  )
}
export default Earningdha