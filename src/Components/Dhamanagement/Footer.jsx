import React from 'react';
import './Footer.css';
import logo from "../Assets/Logo.png";
import {FiPhoneCall} from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';
import {AiFillInstagram } from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    
        <div className='footer_foot'>
            <div className='footer_foot_container'>
                <div className='footer_foot_row'>
                    <div className='footer_foot_col'>
                    <img src={logo} alt="logo" />
                        <ul >
                            
                            <li className='icon_div'><a href='#'> 
                            <div className='icon_div_anch'>
                            <FiPhoneCall className='icon_phone'/></div></a>
                
                            <div className='icon_div_para'>
                            <a href='#' >
                            Phone</a>
                            <p className='icon_para'>+1234567890</p>
                            </div></li>

                            <li className='icon_div'><a href='#'> 
                            <div className='icon_div_anch'>
                            <FiMail className='icon_phone'/></div></a>
                
                            <div className='icon_div_para'>
                            <a href='#' className='icon_div_para_ancor'>
                            Mail</a>
                            <p className='icon_para_2'>info@dopper.com</p>
                            </div></li>
                            
                        </ul>
                    </div>
                    <div className='footer_foot_col'>
                        <h4 className='footer_foot_col_head'>Quick Links</h4>
                        <ul>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Doctors</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Testimonials</a></li>
                            <li><a href='#'>FAQs</a></li>
                        </ul>
                    </div>
                    <div className='footer_foot_col'>
                        <h4 className='footer_foot_col_head'>Other</h4>
                        <ul>
                            <li><a href='#'>Make Appointment</a></li>
                            <li><a href='#'>Emergency call</a></li>
                            <li><a href='#'>Testimonials</a></li>
                        </ul>
                    </div>
                    <div className='footer_foot_col'>
                        <h4 className='footer_foot_col_head'>Links</h4>
                        <ul>
                            <li><a href='#'>Blogs</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className='footer_foot_col'>
                        <h4 className='footer_foot_col_head'>Connect with us</h4>
                        <ul className='all_icon'>
                            <li className='icon_insta'><a href='#'><AiFillInstagram className='icon_insta_inst'/></a></li>
                            <li className='icon_insta'><a href='#'><AiFillFacebook className='icon_insta_inst'/></a></li>
                            <li className='icon_insta'><a href='#'><AiFillLinkedin className='icon_insta_inst'/></a></li>
                        </ul>
                    </div>
                </div>
                    
            </div>
            <hr />
            <p className='footer_para'>Copyright © 2023 | All rights reserved by dooper</p>
        </div>
        
    

    
    
  )
}
export default Footer