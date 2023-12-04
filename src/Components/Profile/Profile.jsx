import React from 'react';
import './Profile.css';
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
    <div className='profile_labdetailedit_pharma_edit_basic'>
        <div className='profile_labdetailedit_pharma_edit_heading_basic'><h2>My Profile</h2></div>
        

        <div className='profile_labdetailedit_pharma_userprofile_basic'>
            <div className='profile_labdetailedit_pharma_userprofile_box_basic'>
                <div className='profile_labdetailedit_pharma_userprofile_box_2_basic'>
                    
                    <form action="" className='profile_labdetailedit_pharma_form_basic'>
                        <div className='profile_image_container'>
                          <div className='profile_image_container_1'>
                            <div className='profile_image_container_1_left'>
                              <img src={editprofile} alt="" className='image_img_profile'/>
                              <div  className='image_icon_profile'>
                              <img src={iconedit} alt=""/>
                              </div>
                              
                            </div>
                            <div className='profile_image_container_1_right'>
                              <span className='profile_image_container_1_right_span1'>Hospital Name</span>
                              <span className='profile_image_container_1_right_span2'>Balance : 2000INR</span>
                            </div>
                          </div>
                          <div className='profile_image_container_2'>
                            <div className='profile_image_container_2_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector} alt="" /></div>
                            <div className='profile_para_container_left_2'>Edit Profile</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector1} alt="" /></div>
                            <div className='profile_para_container_left_2'>My Earning</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector2} alt="" /></div>
                            <div className='profile_para_container_left_2'>Contact Us</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector3} alt="" /></div>
                            <div className='profile_para_container_left_2'>Privacy Policy</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector4} alt="" /></div>
                            <div className='profile_para_container_left_2'>Terms & Consitions</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector5} alt="" /></div>
                            <div className='profile_para_container_left_2'>About Us</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector6} alt="" /></div>
                            <div className='profile_para_container_left_2'>Rate Us</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
                          </div>

                        </div>
                        <div className='profile_para_container'>
                          <div className='profile_para_container_left'>
                            <div className='profile_para_container_left_1'><img src={vector7} alt="" /></div>
                            <div className='profile_para_container_left_2'>Logout</div>
                          </div>
                          <div className='profile_para_container_right'>
                            <div className='profile_para_container_right_1'><MdKeyboardArrowRight/></div>
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