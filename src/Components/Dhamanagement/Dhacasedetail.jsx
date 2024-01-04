import React from 'react';

import {PiArrowLeftFill} from 'react-icons/pi';

import userpic from "../Assets/Ellipse 3.jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { Link } from 'react-router-dom';
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";
import {Navbars} from '../Dhamanagement/Navbars';


export const Dhacasedetail = () => {
  return (
    <>
    
    <div><Navbars/></div>

    <div className='bg-[#F5F6F7] pt-[30px] w-[100%]'>
      <div className='flex justify-center w-[100%]'>
        <div className='flex justify-start items-center w-[100%] ml-[80px]'>
            <Link to={"/dhadetailsview"}>
            <div className=' mr-[10px]'>< PiArrowLeftFill className='h-[24px] w-[24px] text-[#1A1C1F] text-[30px]'/></div>
            </Link>
          <h2 className='text-[22px] font-bold font-montserrat flex justify-between items-center'>Case Details</h2>
        </div>
       </div>

            <div className='flex justify-between pt-[10px]'>
                <div className='bg-[white] ml-[80px] w-[790px] h-[800px] rounded-[16px] mb-[20px]'>
                    <div className='w-[100%] h-[112px] flex justify-start border-[1px] border-solid border-[#EEF0F3]'>
                        <div className='h-[80px] w-[80px] mt-[15px] ml-[20px]'>
                            <img src={userpic} alt="userimage" />
                        </div>
                        <div className='ml-[10px]'>
                            <ul>
                                <li className='list-none no-underline text-[16px] font-semibold font-montserrat text-[#1A1C1F] mt-[15px]'>Patient Name</li>
                                <li className='list-none no-underline text-[16px] font-medium font-montserrat text-[#5B6572] '>xyz,street name</li>
                                <li className='list-none no-underline text-[10px] font-medium font-montserrat text-[#5B6572] '>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='list-none no-underline text-[10px] font-medium font-montserrat text-[#5B6572]'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-start items-center h-[48px] w-[100%] border-[1px] border-solid border-[#EEF0F3]'>
                        <div className='flex justify-around ml-[20px]'>
                            <h3 className='text-[#1A1C1F] text-[14px] font-medium font-montserrat '>Service Type:</h3>
                            <p className='text-[14px] font-medium font-montserrat text-[#5B6572] ml-[40px]'>Non Urgent case</p>

                        </div>
                    </div>
                    <div className='border-b-[1px] border-b-solid border-b-[#EEF0F3]'>
                        <div className='flex justify-between ml-[20px] mr-[20px]'>
                            <div className='flex justify-around items-center'>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center '>Symptom 1</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center'>Symptom 2</div>
                                <div className='border-[1px] border-solid border-[#DBDDDF] rounded-[8px] w-[95px] h-[30px] text-[12px] font-medium font-montserrat text-[#040404] text-center mr-[5px] mb-[10px] mt-[10px] flex justify-center items-center'>Symptom 3</div>
                            </div>
                            <div className=''>
                                <button className='bg-[#E40443] rounded-[8px] w-[131px] h-[30px] text-[#FFFFFF] text-[12px] font-medium font-montserrat mt-[10px] border-none items-center flex justify-center'>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='h-[70px] w-[100%] '>
                        <div className=''><p className='text-[#41B079] text-[16px] ml-[20px] font-medium font-montserrat  '>Completed</p></div>
                        <div className='flex '>
                
                            <p className='flex w-[361px] ml-[20px]'><PiCalendarBlankLight className='text-center pt-[3px]'/>13 june,2023</p>
                            <p className='text-left flex'><CiClock2 className='text-center pt-[3px] pr-[5px]'/>09:00AM</p>
                        </div>
                    </div>

                    <div className=' rounded-[12px] w-[100%] '>
                        <div className='h-[215px] flex justify-between ml-[20px] mr-[20px]'>
                            <div className='w-[365px] h-[184px]'>
                                <h4 className='text-[#1A1C1F] text-[14px] font-medium font-montserrat w-[100px] h-[16px]'>Patient's Note</h4>
                                <p className='text-[#5B6572] text-[12px] font-normal font-montserrat mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='w-[274px] h-[215px]'>
                                <h4 className='w-[107px] h-[16px] text-[1A1C1F] text-[14px] font-montserrat font-medium'>Patient's Video</h4>
                                
                                <iframe className='mt-[20px]' width="274" height="183"  src="https://www.youtube.com/embed/KmYm6zphh_A?si=tLMx7PzP2CN24H6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className=''>
                            <div className='ml-[20px]'><h3 className='text-[14px] text-[#1A1C1F] font-medium font-montserrat h-[16px]'>Vitals Recorded by DHA</h3></div>
                            <div className='ml-[20px] mr-[20px] flex justify-between'>
                                <div className='flex justify-start'>
                                <img src={elipse} alt="" className='w-[36px] h-[36px] mt-[15px] ml-[10px]'/>
                                    <div className='mt-[15px]'>
                                    
                                        <ul>
                                            <li className='list-none ml-[10px] text-[#1A1C1F] text-[14px] font-medium font-montserrat'>DHA Name</li>
                                            <li className='list-none ml-[10px] text-[#E40443] text-[12px] font-medium font-montserrat '>Degree</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='text-[#5B6572] text-[14px] font-medium font-montserrat flex justify-center items-center'>
                                    <p className='flex justify-center items-center font-medium font-montserrat text-[14px]'>< MdCall className='pt-[3px] text-center pr-[5px] text-[#1A1C1F] text-[20px]'/>+91 123 456 7890</p>
                                </div>
                            </div>
                            <div className='bg-[#E40443] text-[white] text-[14px] font-semibold font-montserrat h-[35px] w-[213px] border-none rounded-[8px] ml-[30px] flex justify-center items-center mt-[10px]'>
                                <button>View Vitals Report</button>
                            </div>

                        </div>
                        <div className='mt-[30px]'>
                            <div className='ml-[20px] h-[18px]'><h2 className='font-medium text-[16px] font-montserrat text-[#1A1C1F]'>Referred to Speciality</h2></div>
                            <div className='flex justify-start mt-[10px]'>
                                <div className='w-[48px] h-[48px] rounded-[8px] bg-[#FFFFFF] ml-[25px] mt-[10px]'>
                                <img src={dhaimage} alt="" />
                                </div>
                                <div className=''>
                                <ul className='mt-[20px]'>
                                    <li className='list-none ml-[10px] h-[16px] text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Courtney Henry</li>
                                    <li className='list-none ml-[10px] h-[16px] text-[#5B6572] text-[12px] font-normal font-montserrat mt-[3px]'> Physiotherapist</li>
                                </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                
                </div>
                <div className='bg-[white] mr-[70px] w-[380px] h-[800px] rounded-[16px] mb-[20px]'>
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
                    
                    
                    

                    <div className='ml-[20px] mt-[20px]'>
                        <div className='relative'>
                            <div className='absolute h-[130px] rounded-[6px] w-[3px] border-l-[2px] border-l-dashed border-l-[#EEF0F3] left-[11px]'>
                                
                                    <span className='absolute w-[100%] h-[60px] border-l-[2px] border-l-dashed border-l-[#E40443] right-[1px]'></span>
                            
                            </div>
                            <div className='dha_case_detail_header_add'>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] absolute'></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] absolute mt-[55px]'></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] absolute mt-[110px]'></div>
                            </div>
                        </div>
                        <div className='ml-[20px]'>
                            <div className='ml-[20px]'>
                                <ul>
                                    <li className='list-none text-[#1A1C1F] text-[16px] font-medium font-montserrat  '>Prescription Details</li>
                                    <li className='list-none text-[#5B6572] text-[12px] font-normal font-montserrat'>Assigned</li>
                                </ul>
                            </div>
                            <div className='ml-[20px] mt-[10px]'>
                                <ul>
                                    <li className='list-none text-[#1A1C1F] text-[16px] font-medium font-montserrat '>Service Started</li>
                                    <li className='list-none text-[#5B6572] text-[12px] font-normal font-montserrat'>18 june,2023</li>
                                </ul>
                            </div>
                            <div className='ml-[20px] mt-[10px]'>
                                <ul>
                                    <li className='list-none text-[#1A1C1F] text-[16px] font-medium font-montserrat '>Completed</li>
                                    <li className='list-none text-[#5B6572] text-[12px] font-normal font-montserrat'>18 June,2023</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                </div>

            </div>
    </div>
    
    </>
  )
}
export default Dhacasedetail