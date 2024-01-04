import React,{useState} from 'react';
import Navbars from '../Dhamanagement/Navbars';
import {PiArrowLeftFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import userpic from "../Assets/Ellipse 3.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import vid from "../Assets/Frame 12431.jpg";
import elipse2 from "../Assets/Ellipse 2.png";
import elipse from "../Assets/Ellipse 2.jpg";
import { MdCall } from "react-icons/md";
import { SlCloudDownload } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";
import aadhar from '../Assets/aadhaar-card-dummy.png';
import medpic from '../Assets/image 201.png';
import { MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


export const Casedetailscompleted = () => {
    const [med, setMed] = useState(false);

    const toggleMed = () => {
      setMed(!med);
    };
  
    if(med) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    const [form, setForm] = useState(false);
  
    const toggleForm = () => {
      setForm(!form);
    };
  
    if(form) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    const [show, setShow] =useState(false)
    const [showact, setShowact] =useState(false)
    const [showcase, setShowcase] =useState(false)
    const [showair, setShowair] =useState(false)
    const [showhid, setShowhid] =useState(false)
    const [showmed, setShowmed] =useState(false)
    const [showmore, setShowmore] =useState(false)
    const [showimp, setShowimp] =useState(false)
  return (
    <>
    <div><Navbars/></div>
    <div className='bg-[#F5F6F7] pt-[30px] w-[100%]'>
      <div className='flex justify-center w-[100%]'>
        <div className='flex justify-start items-center w-[100%] ml-[80px]'>
            <Link to={"/dhahospital"}>
            <div className='mr-[10px]'>< PiArrowLeftFill className='h-[24px] w-[24px] text-[#1A1C1F] text-[30px]'/></div>
            </Link>
            <h2 className='text-[22px] font-bold font-montserrat flex justify-between items-center'>Case Details</h2>
        </div>
       </div>

            <div className='flex gap-[60px] pt-[10px]'>
                <div className='bg-[white] ml-[80px] w-[790px]  rounded-[16px] mb-[20px]'>
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
                    <div className='h-[70px] w-[100%] '>
                        <div className=''><p className='text-[#1A1C1F] text-[16px] ml-[20px] font-medium font-montserrat  '>Request For</p></div>
                        <div className='flex '>
                
                            <p className='flex w-[361px] ml-[20px]'><PiCalendarBlankLight className='text-center pt-[3px]'/>13 june,2023</p>
                            <p className='text-left flex'><CiClock2 className='text-center pt-[3px] pr-[5px]'/>09:00AM</p>
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
                    <div className='flex justify-start items-center h-[48px] w-[100%] border-[1px] border-solid border-[#EEF0F3]'>
                        <div className='flex justify-around ml-[20px]'>
                            <h3 className='text-[#1A1C1F] text-[14px] font-medium font-montserrat '>Service Type:</h3>
                            <p className='text-[14px] font-medium font-montserrat text-[#5B6572] ml-[40px]'>Non Urgent case</p>

                        </div>
                    </div>
{/*
                    <div className='flex justify-start ml-[20px] '>
                        
                        <div className='doctor_case_detail_para_left'>
                        
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[15px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[270px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[125px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[60px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[220px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[120px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[250px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[120px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                            <div className='w-[10px] h-[10px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] mt-[130px] flex justify-center items-center '><div ><IoCheckmark className='flex justify-center items-center text-white] w-[20px] h-[20px]' /></div></div>
                    
                        </div>
  */}
                        <div className=' mt-[10px] flex gap-[20px] ml-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className='mb-[20px]'>
                                
                                <div className='w-[685px] h-[42px] gap-[4px] flex justify-center items-center '>
                                    <div className='grid justify-start w-[650px] '>
                                        <h4 className='font-montserrat text-[18px]  font-medium text-left text-[#1A1C1F]'>Created</h4>
                                        <p className=' text-[14px] font-medium text-left text-[#5B6572] font-montserrat '>17, June 2023 | 08:00 AM</p>

                                    </div>
                                    <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center '>
                                        <div className='text-[white]'onClick={() =>setShow(!show)}><MdKeyboardArrowUp /></div>
                                    </div>
                                
                                </div>
                                {show && <div className='h-[215px] flex justify-between  mr-[20px] mt-[10px] mb-[20px] border-b-[2px] border-b-solid border-b-[#E3E6E8]'>
                                    
                                        <div className='w-[365px] h-[184px] mt-[20px] '>
                                            <h4 className='text-[#1A1C1F] text-[14px] font-medium font-montserrat w-[100px] h-[16px] '>Patient's Note</h4>
                                            <p className='text-[#5B6572] text-[12px] font-normal font-montserrat '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                        <div className='w-[260px] h-[215px] '>
                                            <h4 className='w-[107px] h-[16px] text-[14px] text-[#1A1C1F] font-medium font-montserrat '>Patient's Video</h4>
                                            <iframe width="260" height="183" src="https://www.youtube.com/embed/KmYm6zphh_A?si=tLMx7PzP2CN24H6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    
                                            
                                </div>}
                            </div>
                   
                        </div>

                        <div className='  flex gap-[20px] ml-[20px]'>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className=' w-[685px] mb-[20px]'>
                                <div className='w-[685px] flex justify-center items-center '>
                                    <div className='grid justify-start w-[650px] '>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>DHA Assigned</h4>
                                        <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>17, June 2023</p>

                                    </div>
                                    <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                        <div className='text-[white]' onClick={() =>setShowact(!showact)}><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                {showact && <div className='h-[44px] flex justify-between items-center mb-[20px] mt-[10px] '>
                                    <div className='flex justify-start items-center '>
                                        <img src={elipse2} alt="" className='h-[44px] w-[44px] ' />
                                            <div className='ml-[10px]'>
                                                <ul>
                                                    <li className='text-[#1A1C1F] text-[14px] font-medium font-montserrat  list-none  '>DHA Name</li>
                                                    <li className='text-[#E40443] text-[12px] font-medium font-montserrat   list-none '>Degree</li>
                                                </ul>
                                            </div>

                                    </div>
                                    <div className='flex justify-end w-[400px] '>
                                        <ul>
                                            <li className='list-none text-[#8D98A4] text-[10px] font-semibold font-montserrat leading-[12px] text-right ml-[20px] '>Details</li>
                                        </ul>

                                    </div>

                                </div>}

                                
                            </div>
                            
                        </div>

                        <div className='  flex gap-[20px] ml-[20px]'>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className=' w-[685px]  h-[50px]  mb-[20px] '>
                                    <div className='w-[685px] flex justify-center items-center '>
                                        <div className='grid justify-start w-[650px]'>
                                            <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>DHA Service Started</h4>
                                            <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>17, June 2023 | 08:00 AM</p>

                                        </div>
                                        <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                            <div className='text-[white]' onClick={() =>setShowair(!showair)}><MdKeyboardArrowUp/></div>
                                        </div>
                                
                                    </div>
                            </div>
                         
                        </div>

                        <div className='  flex gap-[20px] ml-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className=' w-[685px] mb-[20px]'>
                                <div className='w-[685px] flex justify-center items-center '>
                                    <div className='grid justify-start w-[650px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>DHA Service Ended</h4>
                                        <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>17, June 2023</p>

                                    </div>
                                    <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                        <div className='doctor_case_detail_para_icon_1'onClick={() =>setShowcase(!showcase)}><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                               { showcase &&  <div className=''>
                                    <div className=''>
                                        <div className='mt-[20px] '><h3 className='text-[#1A1C1F] text-[14px] font-medium h-[16px] font-montserrat '>Vitals Recorded by DHA</h3></div>
                                        <div className=' flex justify-between'>
                                            <div className='flex justify-start'>
                                                    <img src={elipse} alt="" className='w-[36px] h-[36px] mt-[15px] ml-[10px] '/>
                                                <div className=' '>
                                    
                                                    <ul className='grid justify-center items-center mt-[10px] ml-[20px]'>
                                                        <li className='text-[#1A1C1F] text-[14px] font-medium font-montserrat   list-none '>DHA Name</li>
                                                        <li className='text-[#E40443] text-[12px] font-medium font-montserrat  list-none '>Degree</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='text-[#5B6572] text-[14px] font-medium font-montserrat flex justify-center items-center '>
                                                <p className='flex justify-center items-center'>< MdCall className=' text-center pr-[5px] text-[#11C1F] flex justify-center items-center text-[22px]'/>+91 123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <button className='bg-[#E40443] text-[white] text-[14px] font-semibold font-montserrat h-[35px] w-[213px] border-none rounded-[8px] ml-[20px] mt-[20px] '>View Vitals Report</button>
                                        </div>

                                    </div>

                                </div>}
                                

                            </div>
                 
                        </div>

                        <div className='  flex gap-[20px] ml-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className='mb-[20px] '>
                                <div className='w-[685px] flex justify-center items-center '>
                                    <div className='grid justify-start w-[650px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>Doctor Assigned</h4>
                                        <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>17, June 2023</p>

                                    </div>
                                    <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                        <div className='text-[white]' onClick={() =>setShowhid(!showhid)} ><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                { showhid && 
                                <div className='h-[44px] flex justify-between items-center mb-[20px] mt-[10px]'>
                                    <div className='flex justify-start items-center '>
                                        <img src={elipse2} alt="" className='h-[44px] w-[44px]'/>
                                            <div className=''>
                                                <ul className='ml-[10px]'>
                                                    <li className='text-[#1A1C1F] text-[14px] font-medium font-montserrat  list-none '>Doctor's Name</li>
                                                    <li className='text-[#E40443] text-[12px] font-medium font-montserrat   list-none '>Degree</li>
                                                </ul>
                                            </div>

                                    </div>
                                    <div className='flex justify-end w-[400px]'>
                                        <ul>
                                            <li className='list-none text-[#8D98A4] text-[10px] font-semibold font-montserrat  leading-[12px] text-right ml-[20px]'>Details</li>
                                        </ul>

                                    </div>

                                </div>}

                            </div>
                       
                        </div>

                        <div className='  flex gap-[20px] ml-[20px]'>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className=' w-[685px]  mb-[20px]'>
                                <div className='w-[685px] flex justify-center items-center '>
                                        <div className='grid justify-start w-[650px]'>
                                            <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>Video Consultation</h4>
                                            <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>Remaining</p>

                                        </div>
                                        <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                            <div className='text-[white]' onClick={() =>setShowmore(!showmore)}><MdKeyboardArrowUp/></div>
                                        </div>
                                
                                </div>
                                { showmore && 
                                <div className='mt-[40px]  '>
                                    <p className='text-[14px] font-medium leading-[16px] text-left h-[14px] font-montserrat '>Chief Complaints</p>
                                    <div className='pb-[30px] '>
                                        <ul>
                                            <li className='text-[12px] font-normal font-montserrat leading-[14px] text-left text-[#1A1C1F] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li className='text-[12px] font-normal font-montserrat leading-[14px] text-left text-[#1A1C1F] mt-[10px]'>Duis sit amet felis venenatis orci feugiat posuere ut eget purus.</li>
                                            <li className='text-[12px] font-normal font-montserrat leading-[14px] text-left text-[#1A1C1F] mt-[10px]'>Sed tempus risus eu vestibulum vestibulum.</li>
                                            <li className='text-[12px] font-normal font-montserrat leading-[14px] text-left text-[#1A1C1F] mt-[10px]'>Etiam malesuada erat sed sapien gravida, in dignissim elit congue.</li>
                                            <li className='text-[12px] font-normal font-montserrat leading-[14px] text-left text-[#1A1C1F] mt-[10px]'>Phasellus euismod lacus a nisi volutpat, a convallis tortor euismod.</li>
                                        </ul>

                                    </div>

                                </div>}

                                

                            </div>
                 
                        </div>

                        <div className='  flex gap-[20px] ml-[20px]'>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>

                            <div className='  w-[685px] mb-[20px]'>
                                <div className='w-[685px] flex justify-center items-center '>
                                    <div className='grid justify-start w-[650px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>Prescription</h4>
                                        <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>18, June 2023</p>

                                    </div>
                                    <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                        <div className='text-[white]'onClick={() =>setShowmed(!showmed)}><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                { showmed && 
                                <div className='flex justify-between items-center h-[44px] mb-[20px] mt-[10px] '>
                                    <div className='flex justify-start items-center '>
                                        <p>Doctor's Prescription</p>
                                            

                                    </div>
                                    <div className='flex justify-end '>
                                        <ul className='flex justify-around items-center '>
                                            <li className='list-none mx-[5px] no-underline '><button onClick={toggleMed} className='w-[88px] h-[36px] rounded-[8px] bg-[#FCE6EC] text-[14px] font-semibold leading-[16px] font-montserrat border-none text-[#E40443] '>View</button></li>
                                            {med && (
                                                <div className="w-[100vw] h-[100vh] top-[0px] right-[0px] left-[0px] bottom-[0px] fixed">
                                                        <div onClick={toggleMed} className='w-[100vw] h-[100vh] top-[0px] right-[0px] left-[0px] bottom-[0px] fixed'></div>
                                                        <div className="absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 py-[14px] px-[28px] rounded-[3px] max-w-[600px] min-w-[300px]">
        
                                                            <img src={medpic} alt="" className='h-[650px] w-[550px]'/>
                                                            <button className="absolute top-[10px] right-[10px] py-[5px] px-[7px]" onClick={toggleMed}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}
                                            <li className='list-none mx-[5px] no-underline'><SlCloudDownload className='doctor_case_detail_para_main_left_right_7_icon'/></li>
                                        </ul>

                                    </div>

                                </div>}


                            </div>
             
                        </div>

                        <div className='  flex gap-[20px] ml-[20px]'>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#E40443]'></div>
                            </div>


                            <div className='  w-[685px] mb-[20px]'>
                                <div className='w-[685px] flex justify-center items-center'>
                                    <div className='grid justify-start w-[650px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] text-left'>Lab Test</h4>
                                        <p className=' text-[#5B6572] text-[14px] font-medium font-montserrat text-left'>18, June 2023</p>

                                    </div>
                                    <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                        <div className='text-[white]' onClick={() =>setShowimp(!showimp)}><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                { showimp && 
                                <div className='flex justify-between items-center h-[44px] mb-[20px] mt-[10px]'>
                                    <div className='flex justify-start items-center'>
                                        <p>Lab Test</p>
                                            

                                    </div>
                                    <div className='flex justify-end'>
                                        <ul className='flex justify-around items-center '>
                                            <li className='list-none mx-[5px] no-underline '><button onClick={toggleForm} className='w-[88px] h-[36px] rounded-[8px] bg-[#FCE6EC] text-[14px] font-semibold leading-[16px] font-montserrat border-none text-[#E40443]'>View</button></li>
                                            {form && (
                                                <div className="w-[100vw] h-[100vh] top-[0px] right-[0px] left-[0px] bottom-[0px] fixed">
                                                        <div onClick={toggleForm} className="w-[100vw] h-[100vh] top-[0px] right-[0px] left-[0px] bottom-[0px] fixed"></div>
                                                        <div className="absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] py-[14px] px-[28px] rounded-[16px] w-[800px] min-w[300px]">
        
                                                        
                                                                <div className=''>
                                                                    <h3 className='font-montserrat font-semibold text-[28px] text-[#1A1C1F]'>Lab Test</h3>
                                                                </div>
                                                                <div className='flex justify-between'>
                                                                    <div className='w-[344px]'>
                                                                            <div className=''>
                                                                                <p className='text-[#1A1C1F] text-[14px] font-semibold font-montserrat mt-[20px] '>Prescribed by</p>
                                                                                <div className='flex justify-start items-center mt-[10px]'>
                                                                                    <img src={elipse2} alt="" />
                                                                                        <div className='flex justify-center items-center '>
                                                                                            <ul className='inline ml-[20px]'>
                                                                                                <li className='list-none text-[#1A1C1F] text-[16px] font-semibold font-montserrat  '>Doctor Name</li>
                                                                                                <li className='list-none text-[#E40443] text-[12px] font-medium font-montserrat'>Degree</li>
                                                                                            </ul>
                                                                                        </div>

                                                                                </div>
                                                                                
                                                                            
                                                                            </div>
                                                                            <div className=''>
                                                                                <p className='text-[#1A1C1F] text-[14px] font-semibold font-montserrat mt-[20px]'>Performed by</p>
                                                                                <div className='flex justify-start items-center mt-[10px] '>
                                                                                    <img src={elipse2} alt="" />
                                                                                        <div className='flex justify-center items-center'>
                                                                                            <ul className='inline ml-[20px] '>
                                                                                                <li className='list-none text-[#1A1C1F] text-[16px] font-semibold font-montserrat'>Lab Name</li>
                                                                                                <li className='list-none text-[#E40443] text-[12px] font-medium font-montserrat'>Location</li>
                                                                                            </ul>
                                                                                        </div>

                                                                                </div>
                                                                                
                                                                            
                                                                            </div>
                                                                            <div className='h-[66px] mt-[20px] '>
                                                                                <label className='text-[#8D98A] text-[12px] font-medium font-montserrat '>Select Date</label><br />
                                                                                <input type="date" className='h-[44px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] w-[344px] pl-[5px] pr-[5px]'/>

                                                                            </div>
                                                                            <div className='inline-block mt-[20px]'>
                                                                                <label className='text-[#8D98A] text-[12px] font-medium font-montserrat'>Lab Test</label><br />
                                                                                <input type="text" placeholder='Test 1' className='h-[40px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] w-[344px] pl-[5px] mb-[1px]'/><br />
                                                                                <input type="text" placeholder='Test 2' className='h-[40px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] w-[344px] pl-[5px] mt-[1px]'/>

                                                                            </div>
                                                                    </div>
                                                                    <div className='w-[344px]'>
                                                                        <div className='mt-[10px]'>
                                                                            <ul className='flex justify-between'>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Lab Test 1</li>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>300</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='mt-[10px]'>
                                                                            <ul className='flex justify-between'>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>Lab test 2</li>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>300</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='mt-[10px]'>
                                                                            <ul className='flex justify-between border-b-[1px] border-b-solid border-b-[#E3E6E8]'>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>taxes</li>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-medium font-montserrat'>100</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='mt-[20px]'>
                                                                            <ul className='flex justify-between'>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-semibold font-montserrat'>Total</li>
                                                                                <li className='list-none text-[#1A1C1F] text-[14px] font-semibold font-montserrat'>600</li>
                                                                            </ul>

                                                                        </div>

                                                                    </div>

                                                            

                                                                </div>
                                                            <button className="absolute top-[10px] right-[10px] py-[5px] px-[7px]" onClick={toggleForm}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}
                                            <li className='list-none mx-[5px] no-underline '><SlCloudDownload className='doctor_case_detail_para_main_left_right_7_icon'/></li>
                                        </ul>

                                    </div>

                                </div>}

                            </div>
                    
                        </div>

                        <div className='  flex gap-[20px] ml-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#E40443] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className=' border border-dashed border-[#E40443]'></div>
                            </div>
                              
                            <div className='w-[685px]  h-[48px] mb-[20px]'>
                                    <div className='w-[685px] h-[42px] gap-[4px] flex justify-center items-center '>
                                        <div className='grid justify-start w-[650px]'>
                                            <h4 className='text-[18px] font-medium font-montserrat leading-[22px] text-left text-[#1A1C1F]'>Completed</h4>
                                            <p className=' text-[14px] font-montserrat leading-[16px] text-left text-[#5B6572] font-montserrat '>Remaining</p>

                                        </div>
                                        <div className='flex justify-end w-[20px] h-[20px] rounded-[24px] bg-[#1A1C1F] ml-[20px] flex justify-center items-center'>
                                            <div className='text-[white]'><MdKeyboardArrowUp/></div>
                                        </div>
                                
                                    </div>

                            </div>
                    
                        </div>

                       

                    
                
                </div>
                <div className='bg-[white] mr-[70px] w-[400px]  rounded-[16px] mb-[20px]'>
                    <div className='rounded-[16px] bg-[white]'>
                        <div className='ml-[20px] mt-[20px]'>
                            <h2 className='text-[14px] text-[#1A1C1F] font-semibold font-montserrat h-[16px]'>Order Details</h2>
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
    
    </>
  )
}
export default Casedetailscompleted