import React,{useState} from 'react';
import Navbars from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpicimg from "../Assets/Ellipse 2 (1).jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';
import { IoCheckmark } from "react-icons/io5";
import {RiUploadCloudLine} from "react-icons/ri";
import userpics from "../Assets/Ellipse 2 (1).jpg";

export const Pendingpharmacycase1 = () => {
    const [med, setMed] = useState(false);

  const toggleMed = () => {
    setMed(!med);
  };

  if(med) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
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
                            <Link to={"/pendingaddquotation3"}>
                            <button className='bg-[#E40443] rounded-[8px] w-[131px] h-[30px] text-[#FFFFFF] text-[12px] font-medium font-montserrat border-none mt-[10px]'>View Prescription</button>
                            </Link>
                        </div>
                    </div>

                </div>
                
                <div className=''><button className='flex justify-center items-center bg-[#41B079] rounded-[8px] h-[36px] w-[155px] text-[white] border-none h-[36px] mt-[20px] mb-[20px] ml-[20px]' onClick={toggleMed}>Add Quotation</button></div>
                    {med && (
                                                <div className="w-[100vw] h-[100vh] top-[0px] left-[0px] right-[0px] bottom-[0px] fixed">
                                                        <div onClick={toggleMed} className="w-[100vw] h-[100vh] top-[0px] left-[0px] right-[0px] bottom-[0px] fixed"></div>
                                                        <div className="absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 py-[14px] px-[28px] rounded-[16px] m-w[536px] m-w[300px] bg-[white]">
        
                                                            <div className='mt-[30px] '>
                                                                <div className='flex justify-center items-center text-[#1A1C1F] text-[35px] font-bold font-montserrat '>Add Quotation</div>
                                                                <form action="">
                                                                    <div className='w-[500px] items-center h-[110px] '>
                                                                        <div className='mb-[5px]'><label className='w-[500px] h-[14px] py-[0px] px-[3px] text-[#8D98A4] text-[12px] font-medium font-montserrat '>Lab Photo</label></div>
                                                                            <input type="file" id="pharmacy_case_addlab_labupload_pharmaupload_adddha_file"className='hidden' />
                                                                            <label for="pharmacy_case_addlab_labupload_pharmaupload_adddha_file" className='h-[88px] w-[500px] rounded-[8px] relative border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-medium font-montserrat grid justify-center items-center '><i className='flex justify-center items-center mt-[15px] text-[24px]'><RiUploadCloudLine/></i><p className='flex justify-center items-center text-[14px] font-medium font-montserrat text-[5B6572]' >Upload</p></label>
                                                                    </div>
                                                                    <div className='grid justify-start items-center mt-[20px]'>
                                                                        <label htmlFor="" className='text-[#8D98A4] text-[12px] font-medium font-montserrat w-[500px]'>price</label>
                                                                        <input type="text" placeholder='Enter Price' className='mt-[5px] border-[1px] border-solid border-[#EEF0F3] h-[44px] rounded-[8px] text-[#8D98A4] gap-[12px] w-[490px]'/>
                                                                    </div>
                                                                    <div className='grid justify-start items-center mt-[20px]'>
                                                                        <label htmlFor="" className='text-[#8D98A4] text-[12px] font-medium font-montserrat w-[500px]'>Discount</label>
                                                                        <input type="text" placeholder='Enter Discount' className='mt-[5px] border-[1px] border-solid border-[#EEF0F3] h-[44px] rounded-[8px] text-[#8D98A4] gap-[12px] w-[490px] '/>
                                                                    </div>
                                                                    <div className='grid justify-start items-center mt-[20px]'>
                                                                        <Link to={"/pendingaddquotation2"} className='no-underline'>
                                                                        <button className='bg-[#E40443] w-[500px] h-[44px] text-[white] flex justify-center items-center border-none rounded-[8px]'>Send</button>
                                                                        </Link>
                                                                    </div>
                                                                </form>

                                                            </div>
                                                            <button className="absolute top-[10px] right-[10px] py-[5px] px-[7px]" onClick={toggleMed}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}

            </div>
            
              
    </div>

   </div>
   <div className=''><Footer/></div>
    </>
  )
}
export default Pendingpharmacycase1
