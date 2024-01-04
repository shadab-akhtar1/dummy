import React from 'react';
import './Blockdoctor.css';
import { Link } from "react-router-dom";

export const Adddoctor1 = () => {
  return (
    <>
    <div className='hero_doctorblock'>
        <div className='bg-[#FFFFFF] w-[550px] absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2'>
            <div className='w-[496px] ml-[25px]'>
                    <div className='absolute h-[4px] rounded-[6px] w-[496px] bg-[#EEF0F3] top-[35px]'>
                        <span className='absolute h-[100%] w-[13%] bg-[#E40443]'></span>
                    </div>
                <div className='w-[100%] flex justify-between items-center mt-[20px] relative'>
                
                    <span className='w-[32px] h-[32px] rounded-[50%] bg-[#E40443] text-[white] text-[10px] font-semibold flex justify-center items-center '>01</span>
                    <span className='w-[32px] h-[32px] rounded-[50%] bg-[#EEF0F3] text-[black] text-[10px] font-semibold flex justify-center items-center'>02</span>
                    <span className='w-[32px] h-[32px] rounded-[50%] bg-[#EEF0F3] text-[black] text-[10px] font-semibold flex justify-center items-center'>03</span>
                    
                </div>
                

            </div>
            
            <div className='w-[500px] ml-[20px] mt-[10px]'>
                <div> <h2 className='text-center text-[25px] font-semibold text-[#1A1C1F] font-montserra'>Basic Details</h2></div>
            <form action="" className='mt-[15px]'>
                
                <div className='w-[500px] items-center mb-[5px]'>
                    <label className='w-[500px] h-[14px] text-[#8D98A4] text-[12px] font-medium font-montserrat '>Speciality</label>
                
                    <select name="" id="" placeholder='Male' className='w-[500px] h-[40px] rounded-[8px] text-[#5B652] border-[1px] border-solid border-[#EEF0F3] mb-[2px] text-[14px] font-medium font-montserrat'>
                        <option value="">Speciality</option>
                    </select>
                </div>
                
                
                
                <Link to={"/adddoctorupload"} className='adddoctor1upload_link'> 
                <button className='w-[500px] h-[40px] rounded-[8px] bg-[#E40443] text-[white] text-[12px] font-semibold font-montserrat mt-[20px] mb-[20px] border-none'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
export default Adddoctor1