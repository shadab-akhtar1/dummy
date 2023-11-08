import React from 'react';
import './Verification.css';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import { Link } from "react-router-dom";

export const Verification = () => {
  return (
    <div className='verify_container'>
        <div className='left_side_verify'>
            <div className="logo_verify">
                <p className='logo_verify_para'>DOOPER</p>
            </div>
            <div className="heading_box_verify">
                <h1 className='heading_box_verify_head'>Start your journey with us</h1>
                <p className='heading_box_verify_pa'>Discover the world’s best community of doctors and DHAs</p>
            </div>
            <div className="box1_verify">
          <div className="box2_verify">
            <p className='box2_verify_pi'>
              Simply unbelievable! I am really satisfied with the doctor who
              treated me. This is absolutely wonderful!
            </p>
            <div className="user_box_verify">
              <img src={UserLogo} alt="" />
              <div className="username_verify">
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

        <div className="right_side">
        <div className="right_side_logo">
          <img src={Weblogo} alt="logo" />
        </div>

        <div className="otp_container">
          <form className="otp">
            <h2 className='otp_header'>Verify</h2>
            <p className='otp_para'>Enter OTP which we sent to you</p>
            <div className="input_text_otp">
              <input type="text" placeholder="-" />
              <input type="text" placeholder="-" />
              <input type="text" placeholder="-" />
              <input type="text" placeholder="-" />
            </div>
            <Link to={"/successfulverify"} className="Link">
              <button className="otp-btn"> Verify OTP</button>
            </Link>
          </form>
        </div>
        <div className="paragraph_verify">
          <p>
            Join the community of smart and experienced doctors. Login to access
            your personalized dashboard, track your record or process and get
            informed by our services
          </p>
        </div>
      </div>
        </div>
       
  )
}
export default Verification