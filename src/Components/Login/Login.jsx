import React from 'react';
import './Login.css';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaCaretDown} from 'react-icons/fa';
import flag from'../Assets/image 1.png';

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
    <div className='login_container'>
        <div className='left_side_login'>
            <div className="logo_login">
                <p className='logo_para_login'>DOOPER</p>
            </div>
            <div className="heading_box_login">
                <h1 className='heading_box_head'>Start your journey with us</h1>
                <p className='heading_box_para'>Discover the world’s best community of doctors and DHAs</p>
            </div>
            <div className="login_box1">
          <div className="login_box2">
            <p className='login_box2_para'>
              Simply unbelievable! I am really satisfied with the doctor who
              treated me. This is absolutely wonderful! 
            </p>
            <div className="user_box_login">
              <img src={UserLogo} alt="" className='user_box_img' />
              <div className="login_username_prof">
                <p>Timson K</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='right_side'>
        <div className="right_side_logo">
          <img src={Weblogo} alt="logo" />
        </div>

        <div className="login_form_container">
          <h1 className='login_form_container_header'>Welcome</h1>
          <p className='login_form_container_par'>
            Welcome to <span>DOOPER</span>, please enter your details
          </p>

          <form className="loginform">
            <label for="number">Phone Number</label>
            
            <div className='login_container_3_input'>
              <div className='login_container_3_image_div'>
                        <img src={flag} alt="" />
                        < FaCaretDown className='login_container_3_dropdown'/>
                    </div>
                <input type="text" name="" id="" placeholder='Enter phone number' className='login_container_inp'/>
            </div>
            <Link to={"/verification"} className="login_Link">
              <button className="otp_btn_login">Send OTP</button>
            </Link>

            
          </form>
        </div>
        <div className="check_box">
          <div className="check_text">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              By signing up you agree to <span> Terms of use</span>
            </label>
          </div>
          <div className="check_text">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              
              By signing up you agree to <span>Marketing condition</span>
            </label>
          </div>
        </div>

        <div className="paragraph_login">
          <p>
            Join the community of smart and experienced doctors. Login to access
            your personalized dashboard, track your record or process and get
            informed by our services
          </p>
        </div>
        </div>

    </div>
    

    </div>
  )
  
}

export default Login
