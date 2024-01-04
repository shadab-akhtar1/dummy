
import React from 'react';
import {Navbars} from '../Dhamanagement/Navbars';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import doctorimage from '../Assets/image-slEubuAxR-transformed.png';
import doctorsimage from '../Assets/image-Ow_nE8fdA-transformed.png';
import doctoresimage from '../Assets/image-RMOC43HSxZ-transformed.png';
import {Footer} from '../Dhamanagement/Footer';
import { IoIosSearch } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import Doctordetail from '../Bookingrequests/Doctordetail';
import { useState } from 'react';
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";

export const Pendingdhaassigndoctor = () => {
    const [items,setItems] = useState(Doctordetail);
    const [showmid, setShowmid] = useState(false);

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
    <div className='bg-[#F4F4F4] pt-[20px]'>
        <div className='flex justify-between items-center  ml-[70px] mr-[70px]'>
        
            <div className=' pt-[1px] '>
                <h2 className='flex justify-start font-bold font-montserrat text-[22px]'><Link to={"/pendingdhaurgentcase"} className='dhaassign_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='text-[#1A1C1F] text-center  pr-[10px] text-[30px]'/></Link>Choose Doctor</h2>
            </div>
            <div className='flex justify-end items-center '>
                <div className='ml-[20px] border-[1px] border-solid border-[#DBDADE] rounded-[6px] w-[240px] h-[38px] bg-[white] flex justify-around items-center '><input type="search" placeholder='search' className='border-none outline-none text-[#5B6572] text-[15px] font-medium font-montserrat '/><i><IoIosSearch className='text-[#5B6572] w-[24px] h-[24px]'/></i></div>
                <div className='mr-[20px] flex justify-around items-center w-[229px]'>
                    <div className='text-[#1A1C1F] text-[14px] font-semibold font-montserrat'>Speciality :</div>
                    <div className='flex justify-start items-center text-[#8D98A4] text-[12px] font-medium font-montserrat ml-[-10px]'>Physiotherapist <FaCaretDown className='ml-[10px]'/></div>
                </div>
                <Link to={""} className='no-underline'>
                <div className=''><button className='bg-[#E40443] w-[97px] h-[36px] text-[white] font-montserrat text-[14px] font-semibold border-none rounded-[8px]' onClick={toggleMed}>Assign</button></div>
                </Link>
                {med && (
                                                <div className="w-[100vw] h-[100vh] top-[0px] left-[0px] right-[0px] bottom-[0px] fixed">
                                                        <div onClick={toggleMed} className="w-[100vw] h-[100vh] top-[0px] left-[0px] right-[0px] bottom-[0px] fixed"></div>
                                                        <div className="absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 py-[14px] px-[28px] rounded-[16px] w-[450px] bg-[white]">
        
                                                            <div className='mt-[30px] '>
                                                               
                                                                <div className='adddha_success_box_block'>
                                                                    <div className='flex justify-center items-center'>
                                                                        <img src={Done} alt="" className='w-[117px] h-[112px]'/>

                                                                    </div>
                                                                    <div className='grid justify-center items-center '>
                                                                        <h4 className='flex justify-center items-center text-[20px] font-montserrat font-bold text-[#1A1C1F]'>Doctor Assigned</h4>
                                                                        <p className='items-center text-[14px] font-medium font-montserrat text-[#1A1C1F] flex justify-center text-center '>The Doctor “Name” is successfully assigned for case #1234 on ” Date”</p>

                                                                    </div >
                                                                        <div className='flex justify-center items-center'>
                                                                        <button className='bg-[#FCE6EC] w-[410px] h-[40px] rounded-[8px] border-none text-[#E40443] text-[12px] font-semibold font-montserrat mt-[20px] flex justify-center items-center'>Done</button>
                                                                        </div>
                                                                    </div>
                

                                                            
                                                               

                                                            </div>
                                                            <div className='cursor-pointer absolute right-[-12px] top-[-12px] bg-[white] flex justify-center items-center rounded-[6px] w-[32px] h-[32px] text-[#939191] text-[20px] ' onClick={toggleMed}><RxCross2/></div>
                                                            
                                                        </div>
                                                </div>
                                                )}
            </div>
        </div>
        <div className='ml-[70px] mr-[70px] flex flex-wrap gap-[38px] pb-[48px] mt-[20px]'>
        

            {
                items.map((elem) =>{
                    const {id,name,description,image} = elem;

                    return(
                        <div className={showmid === id ? "border-[4px] border-solid border-[#3EB655]" : "null"}>
                        <div className='h-[344px] w-[276px] grid justify-center items-center border-[1px] border-solid border-[#E3E6E8]'  onClick={() =>setShowmid(id)}>
                
                        <div className='flex justify-center items-center border-b-[1px] border-b-solid border-b-[#E3E6E8] w-[276px]'><img src={image} alt="" /></div>
                        
                        <div className='flex justify-between items-center mx-[20px] mb-[20px]'>
                            <div className='inline justify-center items-center'>
                            <div className='text-[#1A1C1F] text-[16px] font-medium font-montserrat'>{name}</div>
                            <div className='text-[#8D98A4] text-12px] font-medium font-montserrat'>{description}</div>
                            </div>
                            {showmid ===id  ? (<div className='flex justify-center items-center bg-[#41B079] w-[24px] h-[24px] rounded-[40px] border-none text-[white]'tabIndex={1}><IoCheckmark/></div>):null}
                        </div>
                        
        
                    </div>
                    </div>
                    
                    )
                })
            }
            
            
            
        </div>

    </div>
    <div className=''><Footer/></div>
    </>
  )
}
export default Pendingdhaassigndoctor
