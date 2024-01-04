import React from 'react';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpics from "../Assets/Ellipse 2 (1).jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';
import Navbars from '../Dhamanagement/Navbars';
import { IoCheckmark } from "react-icons/io5";


export const Bookingdhacase = () => {
  return (
    <>
    <div><Navbars/></div>

    <div className='bg-[#F4F4F4] w-[100%] pt-[20px]'>
      <div className='flex justify-center w-[100%] mb-[10px]'>
        <div className='flex justify-start items-center w-[100%] ml-[80px]'>
            <Link to={"/bookingrequestdha"}>
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
                        <img src={userpics} alt="userimage" className='w-[80px] h-[80px]'/>
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

                    <div className=' rounded-[12px] w-[100%] '>
                        <div className='h-[215px] flex justify-between ml-[20px] mr-[20px] mt-[20px]'>
                            <div className='w-[365px] h-[184px]'>
                                <h4 className='text-[#1A1C1F] text-[14px] font-medium font-montserrat w-[100px] h-[16px]'>Patient's Note</h4>
                                <p className='text-[#5B6572] text-[12px] font-normal font-montserrat mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='w-[274px] h-[215px]'>
                                <h4 className='w-[107px] h-[16px] text-[1A1C1F] text-[14px] font-montserrat font-medium'>Patient's Video</h4>
                                
                                <iframe className='mt-[20px]' width="274" height="183"  src="https://www.youtube.com/embed/KmYm6zphh_A?si=tLMx7PzP2CN24H6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='flex ml-[20px] mt-[20px] mb-[20px]'>
                    <Link to={"/bookingdhaassign"} className='no-underline'>
                        <button className='bg-[#E40443] flex justify-center items-center text-center text-[white] font-semibold font-montserrat text-[14px] w-[213px] h-[35px] border-none rounded-[8px]'>Assign DHA</button>
                        </Link>
                        <Link to={"/bookingdhaassigndoctor"} className='no-underline'>
                        <button className='bg-[#E40443] flex justify-center items-center text-center text-[white] font-semibold font-montserrat text-[14px] w-[213px] h-[35px] ml-[10px] border-none rounded-[8px]'>Assign Doctor</button>
                        </Link>
                    </div>
                    
                 

                </div>

                <div className='bg-[white] mr-[70px] w-[380px]  rounded-[16px] mb-[20px]'>
                    <div className='rounded-[16px] bg-[white]'>
                        <div className='ml-[20px] mt-[20px]'>
                            <h2 className='text-[14px] text-[#1A1C1F] font-semibold font-montserrat h-[16px]'>Order details</h2>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[5px] pb-[5px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>Service 1</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 546</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[5px] pb-[5px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>GST</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 78</li>
                            </ul>
                        </div>
                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] border-b-[1px] border-b-solid border-b-[#E3E6E8] pt-[5px] pb-[10px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat '>Other Charges</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Rs 78</li>
                                
                            </ul>
                        </div>

                        <div className=''>
                            <ul className='flex justify-between mr-[20px] ml-[20px] pt-[10px] pb-[10px]'>
                                <li className='list-none text-[#8D98A4] text-[14px] font-medium font-montserrat'>Sub Total</li>
                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'> Rs 600</li>
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
                                <li className='list-none text-[#1A1C1F] text-[14px] font-semibold font-montserrat'>Rs 500</li>
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
export default Bookingdhacase