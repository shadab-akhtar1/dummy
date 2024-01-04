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

export const Pendingaddquotation4 = () => {
  return (
    <>
    <div><Navbars/></div>
    
    <div className='bg-[#F4F4F4] w-[100%] pt-[20px]'>
      <div className='flex justify-center w-[100%] mb-[10px]'>
        <div className='flex justify-start items-center w-[100%] ml-[80px]'>
            <Link to={"/pendingpharmacy"}>
            <div className=' mr-[10px]'>< PiArrowLeftFill className='w-[24px] h-[24px] text-[#1A1C1F] text-[30px]'/></div>
            </Link>
            <h2 className='text-[22px] font-bold font-montserrat'>Case #123456</h2>
        </div>
       </div>
       <div className='flex justify-between pt-[10px]'>
                <div className='bg-[white] ml-[80px] w-[790px] rounded-[16px] mb-[20px]'>
                    <div className='w-[100%] h-[112px] flex justify-start border-b-[1px] border-b-solid border-b-[#EEF0F3]'>
                        <div className='mt-[15px] ml-[20px] w-[80px] h-[80px]'>
                        <img src={userpicimg} alt="userimage" />
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
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center  '>Vaccine 1</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Vaccine 2</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Vaccine 3</div>
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
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] '>Prescription Details</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>Assigned</p>

                                    </div>
                            </div>
                        </div>
                        <div className='  flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[12px]'>02</div>
                                <div className='h-full border border-dashed border-[#EEF0F3]'></div>
                            </div>
                                <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px] '>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F]'>Quotation Sent</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className=' flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[12px]'>03</div>
                                <div className='h-full border border-dashed border-[#EEF0F3]'></div>
                            </div>
                                <div className=' flex justify-center items-center'>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F]'>Payment Done</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className=' flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[12px]'>04</div>
                                <div className='h-full border border-dashed border-[#EEF0F3]'></div>
                            </div>
                                <div className=' flex justify-center items-center'>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F]'>Service Started</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className=' flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[12px]'>05</div>
                                <div className=' border border-dashed border-[#EEF0F3]'></div>
                            </div>
                                <div className=' flex justify-center items-center'>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F]'>Delivered</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>

                </div>
               
                  
        </div>

       </div>
       <div className='pharmabooking_pharmacy'><Footer/></div>
    </>
  )
}
export default Pendingaddquotation4
