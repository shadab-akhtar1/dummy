import React,{useState} from 'react';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {GrAttachment} from 'react-icons/gr';
import { FaRegPenToSquare } from "react-icons/fa6";

export const Profilebasic = () => {
    const [activateTab, setActivateTab] = useState("Basic");

    const handleTabClick = (tab) => {
        setActivateTab(tab);
      };
  return (
    
    <div>
    <div className='w-[100%]'><Navbar/></div>
    <div className='w-[100%] mt-[10px] bg-[#F4F4F4]'>
        
        <div className='ml-[70px] pt-[20px] '><h2 className='text-[22px] font-montserrat font-bold flex justify-start items-center'><Link to={"/profile"} className='link_detailsedit_head'><PiArrowLeftFill className='text-[#1A1C1F] text-center pt-[3px] pr-[10px] text-[30px]'/></Link>Edit Profile</h2></div>
        
        <div className='flex justify-start ml-[80px] mt-[-10px] border-b-[1px] border-b-solid border-b-[#E1E5E8]'>
            <div className={`mt-[20px] mr-[20px] text-[16px] font-montserrat
            ${
                activateTab === "Basic" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
              }`}
              onClick={() => handleTabClick("Basic")}
            
            >Basic Details</div>
            
            <div className={`mt-[20px] mr-[20px] text-[16px] font-montserrat ${
                  activateTab === "Document" ? "font-bold,  border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
                }`}
                onClick={() => handleTabClick("Document")}>Documents</div>
            
            <div className={`mt-[20px] mr-[20px] text-[16px] font-montserrat ${
                  activateTab === "Bank" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
                }`}
                onClick={() => handleTabClick("Bank")}>Bank Info</div>
        </div>
        <div className="w-4/5">
          {activateTab === "Basic" && <Basic/>}
          {activateTab === "Document" && <Document />}
          {activateTab === "Bank" && <Bank />}
          
        </div>
        </div>
        </div>
        );
};
        

   

  
         const Basic = () => {
            return (
                <>
                <div className="ml-[70px] pt-[1px] mt-[10px] " >
                <div className="bg-[#FFFFFF] w-[450px] rounded-[16px] p-[32px] ">
                    <div className='gap-[24px]'>
                        
                        <form action="" className='mt-[5px]'>
                            <div className='grid items-center mb-[10px] '>
                                <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Hospital Name</label>
                                <input type="text" className='text-[#1A1C1F] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] flex justify-start items-center font-montserrat outline-none' placeholder='ABCD Hospital'/>
                            
                            </div>
                            <div className='grid items-center mb-[10px]'>
                                <button className='bg-[#FCE6Ec] h-[44px] rounded-[8px] text-[#E40443] font-semibold text-[14px] font-montserrat flex justify-center items-center text-center'>View Photos</button>
                                
                            </div>
                            
                            
                            
                            <div className='grid items-center mb-[10px]'>
                                <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Hospital  Address</label>
                                <input type="text" className='text-[#1A1C1F] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] flex justify-start items-center font-montserrat outline-none'placeholder='121'/>
                                <input type="text" className='text-[#1A1C1F] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] flex justify-start items-center font-montserrat outline-none' placeholder='Some Society, nr. Some School'/>
                                <input type="text" className='text-[#1A1C1F] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] flex justify-start items-center font-montserrat outline-none' placeholder='Surat'/>
                                <input type="text" className='text-[#1A1C1F] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] flex justify-start items-center font-montserrat outline-none'placeholder='Gujarat'/>
                            </div>

                            <div className='mt-[10px]'>
                        <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Speciality</label><br />
                           <select name="" id="" placeholder='Speciality' className='h-[40px] w-[100%] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] font-montserrat flex justify-start text-[#1A1C1F]'>
                            <option value="">Speciality</option>
                           </select>
                        </div>
                        </form>
                        
                    </div>
                    <Link to={""}>
                    <button className='bg-[#41B079] rounded-[8px] border-none w-[130px] h-[40px]  mt-[20px] text-[white] font-montserrat '>Save Details</button>
                    </Link>
                </div>
                
            </div>
            </>
            );
         } ; 
            

const Document = () => {
    return(
        <div className="ml-[70px] pt-[1px] mt-[10px] h-[67vh]">
        <div className='bg-[#FFFFFF] w-[450px] rounded-[16px] p-[32px] '>
            <div className='gap-[24px] '>
                
                <form action="" className='mt-[5px] '>

                <div className='mb-[20px] grid justify-center items-center '>
                        <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>GST Certificate</label> 
                        <input type="file" id='document_form' className='hidden w-[400px]'placeholder='aadhar.jpg'/>
                        <label for="document_form" className='w-[400px] text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] flex justify-between items-center '>
                            <p className='text-[#1A1C1F] ml-[20px] font-montserrat text-[12px] font-medium'>GST.jpg</p>
                        <i className='text-[#1A1C1F] mr-[20px] flex justify-end items-center '><FaRegPenToSquare/></i>
                        </label>
                    </div>

                    <div className='mb-[20px] grid justify-center items-center'>
                        <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Established Certificate</label> 
                        <input type="file" id='document_form' className='hidden w-[400px]'/>
                        <label for="document_form" className='w-[400px] text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] flex justify-between items-center'>
                        <p className='text-[#1A1C1F] ml-[20px] font-montserrat text-[12px] font-medium'>Established.jpg</p>
                        <i className='text-[#1A1C1F] mr-[20px] flex justify-end items-center'><FaRegPenToSquare/></i>
                        </label>
                    </div>
                    
                    
                    
                    <div className='mb-[20px] grid justify-center items-center'>
                        <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Upload BABL/NMC File</label> 
                        <input type="file" id='document_form' className='hidden w-[400px]'/>
                        <label for="document_form" className='w-[400px] text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] flex justify-between items-center'>
                        <p className='text-[#1A1C1F] ml-[20px] font-montserrat text-[12px] font-medium'>BABL.jpg</p>
                        <i className='text-[#1A1C1F] mr-[20px] flex justify-end items-center'><FaRegPenToSquare/></i>
                        </label>
                    </div>
                    
                    
                    
                </form>
                
            </div>
            <Link to={""}>
            <button className='bg-[#41B079] rounded-[8px] border-none w-[130px] h-[40px]  mt-[20px] text-[white] font-montserrat'>Save Details</button>
            </Link>
            
        </div>
        
    </div>

   

    );
};

const Bank = () => {
    return(
        <div className='ml-[70px] pt-[1px] mt-[10px] h-[67vh]'>
            <div className='bg-[#FFFFFF] w-[450px] rounded-[16px] p-[32px] '>
                <div className='gap-[24px]'>
                    
                    <form action="" className='mt-[5px] '>
                        <div className='mb-[10px] grid items-center'>
                            <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Bank Name</label>
                            <input type="text" className='text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] font-montserrat ' placeholder='Central Bank'/>
                        </div>
                        <div className='mb-[10px] grid items-center'>
                            <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]' >Account Number</label>
                            <input type="text" className='text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] font-montserrat ' placeholder='1234567890'/>
                        </div>
                        <div className='mb-[10px] grid items-center'>
                            <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>IFSC Code</label>
                            <input type="text" className='text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] mb-[10px] font-montserrat ' placeholder='CBINO4545'/>
                        </div>
                        <div className='mb-[10px] grid items-center '>
        
                            <label className='text-[12px] font-medium font-montserrat text-[#8D98A4] mb-[5px]'>Upload bank statement/cancel cheque</label> 
                            <input type="file" id='document_form' className='hidden '/>
                            <label for="document_form" className=' text-[#EEF0F3] border-[1px] border-solid border-[#EEF0F3] rounded-[6px] h-[40px] flex justify-between items-center'>
                            <p className='text-[#1A1C1F] ml-[20px] font-montserrat text-[12px] font-medium' placeholder='Medical.jpg'></p>
                            <i className='text-[#1A1C1F] mr-[20px] flex justify-end items-center'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                    </form>
                    
                </div>
                <Link to={"/"}>
                <button className='bg-[#41B079] rounded-[8px] border-none w-[130px] h-[40px]  mt-[20px] text-[white] font-montserrat'>Save Details</button>
                </Link>
            </div>
            </div>
    )
}
    
  
export default Profilebasic
