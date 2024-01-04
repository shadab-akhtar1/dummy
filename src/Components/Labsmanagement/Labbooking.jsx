import React from 'react';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {PiArrowLeftFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import userpic from "../Assets/Ellipse 3.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import {Footer} from '../Dhamanagement/Footer';
import {Navbar} from '../Dhamanagement/Navbar';

export const Labbooking = () => {
  return (
    <>
   <div><Navbar/></div>
    <div className='bg-[#F4F4F4] w-[100%] pt-[20px]'>
      <div className='flex justify-center w-[100%] mb-[10px]'>
        <div className='flex justify-start items-center w-[100%] ml-[80px]'>
            <Link to={"/labmanagement"}>
            <div className=' mr-[10px]'>< PiArrowLeftFill className='w-[24px] h-[24px] text-[#1A1C1F] text-[30px]'/></div>
            </Link>
            <h2 className='text-[22px] font-bold font-montserrat'>Case #123456</h2>
        </div>
       </div>
       <div className='flex justify-between pt-[10px]'>
                <div className='bg-[white] ml-[80px] w-[790px] rounded-[16px] mb-[20px]'>
                    <div className='w-[100%] h-[112px] flex justify-start border-b-[1px] border-b-solid border-b-[#EEF0F3]'>
                        <div className='mt-[15px] ml-[20px] w-[80px] h-[80px]'>
                        <img src={userpic} alt="userimage" />
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
                    <div className='border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[70px] w-[100%] items-center grid'>
                        <div className=''><p className='text-[#1A1C1F] text-[14px] ml-[20px] font-medium font-montserrat'>Request For</p></div>
                        <div className='flex'>
                
                            <p className='ml-[20px] w-[361px] flex items-center '><PiCalendarBlankLight className='text-center  items-center flex'/>13 june,2023</p>
                            <p className='flex text-left items-center '><CiClock2 className='text-center  pr-[5px] flex items-center'/>09:00AM</p>
                        </div>
                    </div>
                    <div className='border-b-[1px] border-b-solid border-b-[#EEF0F3]'>
                        <div className='flex justify-between ml-[20px] mr-[20px]'>
                            <div className='flex justify-around items-center text-center '>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center  '>Test 1</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Test 2</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Test 3</div>
                            </div>
                            <div className='pharmabooking_doctor_case_detail_symptom_right'>
                                <button className='bg-[#E40443] rounded-[8px] w-[131px] h-[30px] text-[#FFFFFF] text-[12px] font-medium font-montserrat border-none mt-[10px]'>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    
                    <div className='flex justify-start ml-[20px]'>
                        {/*}
                        <div className='w-[20px] h-[300px] relative mt-[15px] ml-[20px] border-l-[2px] border-l-dashed border-l-[#EEF0F3]'>
                        
                            
                            
                            <div className='pharmabooking_doctor_case_detail_container_2'>02</div>
                            <div className='pharmabooking_doctor_case_detail_container_3'>03</div>
                            <div className='pharmabooking_doctor_case_detail_container_4'>04</div>
                            <div className='pharmabooking_doctor_case_detail_container_5'>05</div>
                            
                    
                        </div>
  */}
  
                        <div className=''>

                        <div className=' mt-[10px] flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#EEF0F3]'></div>
                            </div>
                            <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] '>Lab Test Details</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>Assigned</p>

                                    </div>
                            </div>
                        </div>
                        <div className='  flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[12px]'>02</div>
                                <div className='h-full border border-dashed border-[#EEF0F3]'></div>
                            </div>
                            <Link to="/labbookingstarted">
                                <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px] '>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F]'>Service Started</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>16, June 2023</p>

                                    </div>
                                </div>
                                </Link>
                        </div>
                        <div className=' flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[12px]'>03</div>
                                <div className=' border border-dashed border-[#EEF0F3]'></div>
                            </div>
                                <div className=' flex justify-center items-center'>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F]'>Completed</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>16, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                  
                        </div>
                    </div>

                </div>
                <div className='bg-[white] mr-[70px] w-[380px]  rounded-[16px] mb-[20px]'>
                    <div className='rounded-[16px] bg-[white]'>
                        <div className='ml-[20px] mt-[20px]'>
                            <h2 className='text-[14px] text-[#1A1C1F] font-semibold font-montserrat h-[16px]'>Payment Details</h2>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[5px] pb-[5px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>Test 1</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 600</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[5px] pb-[5px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>Test 1</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 600</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] border-b-[1px] border-b-solid border-b-[#E3E6E8] pt-[5px] pb-[10px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>Taxes</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 600</li>
                                
                            </ul>
                        </div>

                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[10px] pb-[10px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat'>Sub Total</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'> Rs 100</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] border-b-[1px] border-b-solid border-b-[#E3E6E8] pt-[5px] pb-[10px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>Discount</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 100</li>
                            </ul>
                        </div>

                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[10px] pb-[10px]'>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-semibold font-montserrat '>Total</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-semibold font-montserrat'>Rs 400</li>
                            </ul>
                        </div>

                    </div>
                    </div>
                  
        </div>

       </div>
       <div className='pharmabooking_pharmacy'><Footer/></div>
    </>
  )
}
export default Labbooking
