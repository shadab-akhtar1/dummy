import React from 'react';
import Navbars from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpicimg from "../Assets/Ellipse 2 (1).jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';
import { IoCheckmark } from "react-icons/io5";

export const Rejectaddquotation = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='bg-[#F4F4F4] w-[100%] pt-[20px]'>
      <div className='flex justify-center w-[100%] mb-[10px]'>
        <div className='flex justify-start items-center w-[100%] ml-[80px]'>
            <Link to={"/rejectpharmacyhospital"}>
            <div className=' mr-[10px]'>< PiArrowLeftFill className='w-[24px] h-[24px] text-[#1A1C1F] text-[30px]'/></div>
            </Link>
            <h2 className='text-[22px] font-bold font-montserrat'>Case #123456</h2>
        </div>
       </div>
       <div className='flex justify-between pt-[10px]'>
                <div className='bg-[white] ml-[80px] w-[790px] rounded-[16px] mb-[20px]'>
                    <div className='w-[100%] h-[112px] flex justify-between border-b-[1px] border-b-solid border-b-[#EEF0F3]'>
                        <div className='flex justify-start items-center '>
                        <div className='mt-[15px] ml-[20px] w-[80px] h-[80px]'>
                        <img src={userpicimg} alt="userimage" className='w-[80px] h-[80px]'/>
                        </div>
                        <div className=''>
                            <ul className='ml-[20px]'>
                                <li className='text-[16px] font-semibold font-montserrat text-[#1A1C1F] mt-[15px] list-none no-underline'>Patient Name</li>
                                <li className='text-[16px] font-medium font-montserrat text-[#5B6572] mt-[3px] list-none no-underline'>xyz,street name</li>
                                <li className='text-[10px] font-medium font-montserrat text-[#5B6572]  list-none no-underline'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='text-[10px] font-medium font-montserrat text-[#5B6572]  list-none no-underline'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                        </div>
                        <div className='flex justify-end items-center mr-[20px]'>
                            <div className='w-[36px] h-[36px] rounded-[8px] gap-[12px] bg-[#FCE6EC] flex justify-center items-center mr-[10px]'><FaPhoneAlt className='text-[#E40443]'/></div>
                            <div className='w-[36px] h-[36px] rounded-[8px] gap-[12px] bg-[#FCE6EC] flex justify-center items-center mr-[10px]'><HiLocationMarker className='text-[#E40443]'/></div>

                        </div>
                    </div>
                    
                    
                    <div className='border-b-[1px] border-b-solid border-b-[#EEF0F3]'>
                        <div className='flex justify-between ml-[20px] mr-[20px]'>
                            <div className='flex justify-around items-center text-center '>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center  '>Vaccine 1</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Vaccine 2</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Vaccine 3</div>
                            </div>
                            <div className='pharmabooking_doctor_case_detail_symptom_right'>
                                <button className='bg-[#E40443] rounded-[8px] w-[131px] h-[30px] text-[#FFFFFF] text-[12px] font-medium font-montserrat border-none mt-[10px]'>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[70px] w-[100%] items-center grid'>
                        <div className=''><p className='text-[#1A1C1F] text-[14px] ml-[20px] font-medium font-montserrat'>Request For</p></div>
                        <div className='flex'>
                
                            <p className='ml-[20px] w-[361px] flex items-center '><PiCalendarBlankLight className='text-center  items-center flex'/>13 june,2023</p>
                            <p className='flex text-left items-center '><CiClock2 className='text-center  pr-[5px] flex items-center'/>09:00AM</p>
                        </div>
                    </div>

                    <div className='ml-[20px] mt-[20px] mb-[20px] '><button className='text-[#F50202] bg-[#FDC2C2] font-medium font-montserrat text-[14px] flex justify-center items-center rounded-[8px] w-[70px] '>Rejected</button></div>

                    
                    
                    
                 

                </div>

                
                
                  
        </div>

       </div>
       <div className='pharmabooking_pharmacy'><Footer/></div>
    </>
  )
}
export default Rejectaddquotation