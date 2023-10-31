import React from 'react';
import './Footer.css';
import logo from "../Assets/Dooper Logo 1500x1500 2.svg";

export const Footer = () => {
  return (
    
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_row'>
                    <div className='footer_col'>
                    <img src={logo} alt="logo" />
                        <ul>
                            
                            <li><a href='#'>Phone</a><p>+1234567890</p></li>
                            <li><a href='#'>Mail</a><p>info@dopper.com</p></li>
                        </ul>
                    </div>
                    <div className='footer_col'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Doctors</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Testimonials</a></li>
                            <li><a href='#'>FAQs</a></li>
                        </ul>
                    </div>
                    <div className='footer_col'>
                        <h4>Other</h4>
                        <ul>
                            <li><a href='#'>Make Appointment</a></li>
                            <li><a href='#'>Emergency call</a></li>
                            <li><a href='#'>Testimonials</a></li>
                        </ul>
                    </div>
                    <div className='footer_col'>
                        <h4>Links</h4>
                        <ul>
                            <li><a href='#'>Blogs</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className='footer_col'>
                        <h4>Connect with us</h4>
                        <ul>
                            <li><a href='#'>Logo</a></li>
                        </ul>
                    </div>
                </div>
                    
            </div>
            <hr />
            <p>Copyright © 2023 | All rights reserved by dooper</p>
        </div>
        
    

    
    
  )
}
export default Footer