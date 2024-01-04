import React,{useState} from 'react';
import Navbars from '../Dhamanagement/Navbars';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import Pagination from '../Dhamanagement/Pagination';


export const Rejectdhahospital1 = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
    const [isActive, setIsActive]= useState(false);
    const [hisActive, setHisActive]= useState(false);
  return (
    <>
    <div><Navbars/></div>
    <div className='bg-[#F4F4F4] w-[100%] '>
        <div className='flex justify-between items-center ml-[70px] mr-[70px] pt-[20px]  '>
            <div className='flex justify-start items-center '><h2 className='text-[#1A1C1F] text-[22px] font-bold font-montserrat'>Dashboard</h2></div>
            <div className='flex justify-end items-center'>
                <div className='flex items-center mr-[10px]'><p className='text-[#1A1C1F] text-[14px] font-semibold font-montserrat mr-[10px] '>Availability</p>
            
                </div>
                <div className='flex justify-center items-center '>
                    <div  className='bg-[#DCFAEB] h-[10px] w-[28px] rounded-[30px] flex absolute '>
                    {toggleButton?<div onClick={handleClick} className='h-[15px] w-[15px] bg-[#41B079] rounded-[20px] relative bottom-[3px] '></div>:
                    <div onClick={handleClick}className='h-[15px] w-[15px] bg-[#41B079] rounded-[20px] relative bottom-[3px] ml-[15px]'></div>}
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center ml-[70px] mr-[70px] border-b-[1px] border-b-solid border-b-[#E1E5E8] mt-[20px]'>
            <div className='flex justify-start items-center '>
            
            <div className='text-[16px] text-[#1A1C1F] font-medium font-montserrat border-b-[2px] border-b-solid border-b-[#E40443]'>DHA</div>
            
            <Link to={"/rejectdoctorhospital"} className='bookingrequest_medicine_link'>
            <div className='ml-[20px] text-[#8D98A4] text-[16px] font-medium font-montserrat '>Doctor</div>
            </Link>
            <Link to={"/rejectpharmacyhospital"} className='bookingrequest_medicine_link'>
            <div className='ml-[20px] text-[#8D98A4] text-[16px] font-medium font-montserrat '>Pharmacy</div>
            </Link>
            <Link to={"/rejectlabhospital"} className='bookingrequest_medicine_link'>
            <div className='ml-[20px] text-[#8D98A4] text-[16px] font-medium font-montserrat '>Lab</div>
            </Link>
            </div>
            <div className='flex justify-end items-center ' onClick={(e)=> setHisActive(!hisActive)}>
                Sort by <FaCaretDown className='ml-[10px] '/>
            </div>
            {hisActive &&(
              <div className='absolute top-[210px] right-[70px] p-[10px] bg-[#EEEFEF] text-[#333]'>
                <Link to={""} className=''>
                <div className='p-[5px] cursor-pointer text-[14px] font-medium font-montserrat'>Sort by</div>
                </Link>
                

              </div>
              )}
        </div>
        <div className='ml-[90px] mt-[20px] mr-[70px] '>
            <div className='border-[1px] border-solid border-[#B3B3B3] rounded-3px] h-[28px] w-[169px] flex justify-around items-center bg-[#EEEFEF] text-[#1A1C1F] text-[14px] font-semibold font-montserrat 'onClick={(e)=> setIsActive(!isActive)}>Standalone <FaCaretDown className='ml-[20px] items-center text-[#8D98A4]'/></div>
            {isActive &&(
              <div className='absolute top-[280px]  p-[10px] bg-[#EEEFEF] text-[#333]'>
                <Link to={"/rejectdoctorhospital"} className='no-underline'>
                <div className='p-[5px] cursor-pointer text-[14px] font-medium font-montserrat '> Non Urgent care</div>
                </Link>
                

              </div>
              )}
        </div>
        
        <div className='ml-[70px] mt-[30px] mr-[70px] flex flex-wrap gap-[38px]'>
            <Link to={""} className='pahrma_boking_link'>
            <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px]'>
                <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='flex justify-between items-center mt-[10px]'>
                        <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                        <div className='flex flex-end mr-[10px] '>
                            <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center '><PiCalendarBlankLight className='flex justify-center items-center mr-[10px] text-[#5B6572]'/>13 June, 2023</div>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center'><CiClock2 className='mr-[10px] flex justify-center items-center text-[5B6572]'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[10px] mb-[10px] '>
                        
                        <div className='text-[#E40443] text-[10px] font-semibold font-montserrat flex justify-start items-center ml-[10px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                        <div className='flex justify-end items-center mr-[10px] '><button className='bg-[#E40443] w-[76px] h-[16px] border-none rounded-[2px] text-[white] text-[10px] font-medium font-montserrat flex justify-center items-center '>vaccination</button></div>
                    
                    
                </div>
                </div>
                <div className='flex justify-center border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px] '>
                        <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                    </div>
                    <div className='w-[284px] mt-[10px] ml-[20px] mb-[10px]'>
                        <div className='flex justify-between items-center '>
                            <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat '>Patient Name</div>
                            <div className=''><button  className='bg-[#FDC2C2] w-[68px] h-[20px] rounded-[24px] text-[#F50202] text-[10px] font-medium font-montserrat border-none'>Rejected</button></div>
                            
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat  '>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat '>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={""} className='pahrma_boking_link'>
            <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px]'>
                <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='flex justify-between items-center mt-[10px]'>
                        <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                        <div className='flex flex-end mr-[10px] '>
                            <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center '><PiCalendarBlankLight className='flex justify-center items-center mr-[10px] text-[#5B6572]'/>13 June, 2023</div>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center'><CiClock2 className='mr-[10px] flex justify-center items-center text-[5B6572]'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[10px] mb-[10px] '>
                        
                        <div className='text-[#E40443] text-[10px] font-semibold font-montserrat flex justify-start items-center ml-[10px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                        <div className='flex justify-end items-center mr-[10px] '><button className='bg-[#E40443] w-[76px] h-[16px] border-none rounded-[2px] text-[white] text-[10px] font-medium font-montserrat flex justify-center items-center '>vaccination</button></div>
                    
                    
                </div>
                </div>
                <div className='flex justify-center border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px] '>
                        <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                    </div>
                    <div className='w-[284px] mt-[10px] ml-[20px] mb-[10px]'>
                        <div className='flex justify-between items-center '>
                            <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat '>Patient Name</div>
                            <div className=''><button  className='bg-[#FDC2C2] w-[68px] h-[20px] rounded-[24px] text-[#F50202] text-[10px] font-medium font-montserrat border-none'>Rejected</button></div>
                            
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat  '>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat '>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={""} className='pahrma_boking_link'>
            <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px]'>
                <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='flex justify-between items-center mt-[10px]'>
                        <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                        <div className='flex flex-end mr-[10px] '>
                            <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center '><PiCalendarBlankLight className='flex justify-center items-center mr-[10px] text-[#5B6572]'/>13 June, 2023</div>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center'><CiClock2 className='mr-[10px] flex justify-center items-center text-[5B6572]'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[10px] mb-[10px] '>
                        
                        <div className='text-[#E40443] text-[10px] font-semibold font-montserrat flex justify-start items-center ml-[10px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                        <div className='flex justify-end items-center mr-[10px] '><button className='bg-[#E40443] w-[76px] h-[16px] border-none rounded-[2px] text-[white] text-[10px] font-medium font-montserrat flex justify-center items-center '>vaccination</button></div>
                    
                    
                </div>
                </div>
                <div className='flex justify-center border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px] '>
                        <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                    </div>
                    <div className='w-[284px] mt-[10px] ml-[20px] mb-[10px]'>
                        <div className='flex justify-between items-center '>
                            <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat '>Patient Name</div>
                            <div className=''><button  className='bg-[#FDC2C2] w-[68px] h-[20px] rounded-[24px] text-[#F50202] text-[10px] font-medium font-montserrat border-none'>Rejected</button></div>
                            
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat  '>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat '>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={""} className='pahrma_boking_link'>
            <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px]'>
                <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='flex justify-between items-center mt-[10px]'>
                        <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                        <div className='flex flex-end mr-[10px] '>
                            <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center '><PiCalendarBlankLight className='flex justify-center items-center mr-[10px] text-[#5B6572]'/>13 June, 2023</div>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-center items-center'><CiClock2 className='mr-[10px] flex justify-center items-center text-[5B6572]'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[10px] mb-[10px] '>
                        
                        <div className='text-[#E40443] text-[10px] font-semibold font-montserrat flex justify-start items-center ml-[10px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                        <div className='flex justify-end items-center mr-[10px] '><button className='bg-[#E40443] w-[76px] h-[16px] border-none rounded-[2px] text-[white] text-[10px] font-medium font-montserrat flex justify-center items-center '>vaccination</button></div>
                    
                    
                </div>
                </div>
                <div className='flex justify-center border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                    <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px] '>
                        <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                    </div>
                    <div className='w-[284px] mt-[10px] ml-[20px] mb-[10px]'>
                        <div className='flex justify-between items-center '>
                            <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat '>Patient Name</div>
                            <div className=''><button  className='bg-[#FDC2C2] w-[68px] h-[20px] rounded-[24px] text-[#F50202] text-[10px] font-medium font-montserrat border-none'>Rejected</button></div>
                            
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat  '>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='text-[#5B6572] text-[10px] font-medium font-montserrat '>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                

            </div>
            </Link>
            
            
            
        </div>


        <div className='pb-[30px] mt-[20px]'><Pagination/></div>

    </div>
    <div className='bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Rejectdhahospital1