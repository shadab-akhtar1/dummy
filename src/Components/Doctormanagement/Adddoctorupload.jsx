import React from 'react';
import './Blockdoctor.css';
import {Adddhaupload} from '../Dhamanagement/Adddhaupload';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";

export const Adddoctorupload = () => {
  return (
  
    <div className='hero_doctorblock'>
        <div className='bg-[#FFFFFF] w-[550px] absolute mt-[20px] left-[28%] rounded-[16px]'>
            <div className='w-[496px] ml-[25px] '>
                    <div className='absolute h-[4px] w-[496px] bg-[#EEF0F3] top-[35px]'>
                        <span className='absolute h-[100%] w-[62%] bg-[#E40443]'></span>
                    </div>
                <div className='w-[100%] flex justify-between items-center mt-[20px] relative '>
                    <span className='w-[32px] h-[32px] rounded-[50%] bg-[#E40443] text-[white] text-[16px] font-semibold flex justify-center items-center'><IoCheckmark/></span>
                    <span className='w-[32px] h-[32px] rounded-[50%] bg-[#E40443] text-[white] text-[10px] font-semibold flex justify-center items-center'>02</span>
                    <span className='w-[32px] h-[32px] rounded-[50%] bg-[#EEF0F3] text-[black] text-[10px] font-semibold flex justify-center items-center'>03</span>
                    
                </div>

            </div>
            <div className='w-[500px] ml-[20px]'>
                <div> <h2 className='text-center text-[25px] font-semibold font-montserrat text-[#1A1C1F]'>Upload Documents</h2></div>
            <form action="" className='adddha_form'>
                
                <div className='w-[500px] items-center mb-[20px]'>
                    <div className='mb-[5px]'><label className='w-[500px] h-[14px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Aadhar Card</label></div>
                    <input type="file" id="adddha_file"className='hidden' />
                    <label for="adddha_file" className='h-[88px] w-[500px] rounded-[8px] relative border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-medium font-montserrat grid justify-center items-center'><i className='flex justify-center items-center text-[24px] mt-[15px]'><RiUploadCloudLine/></i><p className='flex justify-center items-center text-[14px] font-medium font-montserrat text-[#5B6572] mt-[-5px]'>Upload</p></label>
                </div>
                <div className='w-[500px] items-center mb-[20px]'>
                    <div className='mb-[5px]'><label className='w-[500px] h-[14px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Pan Card</label></div>
                    <input type="file" id="adddha_file"className='hidden' />
                    <label for="adddha_file" className='h-[88px] w-[500px] rounded-[8px] relative border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-medium font-montserrat grid justify-center items-center'><i className='flex justify-center items-center text-[24px] mt-[15px]'><RiUploadCloudLine/></i><p className='flex justify-center items-center text-[14px] font-medium font-montserrat text-[#5B6572] mt-[-5px]'>Upload</p></label>
                </div>
                <div className='w-[500px] items-center mb-[20px]'>
                    <div className='mb-[5px]'><label className='w-[500px] h-[14px] text-[#8D98A4] text-[12px] font-medium font-montserrat'>Lab RMC Medical Counsel Certificate</label></div>
                    <input type="file" id="adddha_file"className='hidden' />
                    <label for="adddha_file" className='h-[88px] w-[500px] rounded-[8px] relative border-[1px] border-solid border-[#EEF0F3] text-[#5B6572] text-[14px] font-medium font-montserrat grid justify-center items-center'><i className='flex justify-center items-center text-[24px] mt-[15px]'><RiUploadCloudLine/></i><p className='flex justify-center items-center text-[14px] font-medium font-montserrat text-[#5B6572] mt-[-5px]'>upload</p></label>
                </div>
               
                <Link to={"/adddoctorbank"} className='adddhabank_link'>
                <button className='w-[500px] h-[40px] rounded-[8px] bg-[#E40443] text-[white] text-[12px] font-semibold font-montserrat mt-[20px] mb-[20px] border-none'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Adddoctorupload
