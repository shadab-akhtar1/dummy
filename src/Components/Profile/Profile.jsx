import React from 'react';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {GrAttachment} from 'react-icons/gr';
import editprofile from '../Assets/Ellipse 2 (1).png';
import iconedit from '../Assets/icon.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import vector from '../Assets/Vector.png';
import vector1 from '../Assets/Vector (1).png';
import vector2 from '../Assets/Vector (2).png';
import vector3 from '../Assets/Vector (3).png';
import vector4 from '../Assets/Vector (4).png';
import vector5 from '../Assets/Vector (5).png';
import vector6 from '../Assets/Vector (6).png';
import vector7 from '../Assets/Vector (7).png';

export const Profile = () => {
  return (
    <>
    <div className='profile'><Navbar/></div>
    <div className='w-[100%] bg-[#F4F4F4]'>
        <div className='ml-[70px] pt-[1px]'><h2 className='text-[22px font-bold font-montserrat flex justify-start items-center'>My Profile</h2></div>
        

        <div className='ml-[70px] pt=[1px] mt-[10px] pb=[20px]'>
            <div className='bg-[white] w-[450px] rounded-[16px] pt-[20px] pb-[20px] grid justify-center items-center'>
                <div className='w-[430px] gap-[24px]'>
                    
                    <form action="" className='grid justify-center items-center'>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[80px] w-[390px]'>
                          <div className='flex justify-start items-center mb-[10px]'>
                            <div className='relative'>
                              <img src={editprofile} alt="" className='image_img_profile'/>
                              <div  className='absolute left-[10px] top-[25px] right-[-12px]'>
                              <img src={iconedit} alt=""/>
                              </div>
                              
                            </div>
                            <div className='grid ml-[20px]'>
                              <span className='text-[#1A1C1F] text-[14px] font-semibold font-montserrat'>Hospital Name</span>
                              <span className='text-[#5B6572] text-[14px] font-medium font-montserrat'>Balance : 2000INR</span>
                            </div>
                          </div>
                          <div className='flex justify-end items-center mb-[10px]'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>Edit Profile</div>
                          </div>
                          <div className='flex justify-end items-center'>
                          <Link to={"/profilebasic"} className='profile_link'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                            </Link>
                          </div>

                        </div>
                        
                        
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector1} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>My Earning</div>
                          </div>
                          <div className='flex justify-end items-center'>
                          <Link to={"/earning"} className='profile_link'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                            </Link>
                          </div>

                        </div>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector2} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>Contact Us</div>
                          </div>
                          <div className='flex justify-end items-center'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector3} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>Privacy Policy</div>
                          </div>
                          <div className='flex justify-end items-center'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector4} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>Terms & Consitions</div>
                          </div>
                          <div className='flex justify-end items-center'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector5} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>About Us</div>
                          </div>
                          <div className='flex justify-end items-center'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector6} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>Rate Us</div>
                          </div>
                          <div className='flex justify-end items-center'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='flex justify-between items-center border-b-[1px] border-b-solid border-b-[#EEF0F3] h-[60px] w-[390px]'>
                          <div className='flex justify-start items-center'>
                            <div className='profile_para_container_left_1'><img src={vector7} alt="" /></div>
                            <div className='ml-[20px] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>Logout</div>
                          </div>
                          <div className='flex justify-end items-center'>
                            <div className='bg-[#F5F6F7] w-[24px] h-[24px] rounded-[24px] border-none flex justify-center items-center'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        
                        
                        
                    </form>
                    
                </div>
                
            </div>
            
        </div>

    </div>
    </>
  )
}
export default Profile