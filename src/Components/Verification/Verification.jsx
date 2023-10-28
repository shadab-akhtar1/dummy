import React from 'react';
import './Verification.css';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import { Link } from "react-router-dom";

export const Verification = () => {
  return (
    <div className='container'>
        <div className='left_side'>
            <div className="logo">
                <p>DOOPER</p>
            </div>
            <div className="heading_box">
                <h1>Start your journey with us</h1>
                <p>Discover the world’s best community of doctors and DHAs</p>
            </div>
            <div className="box1">
          <div className="box2">
            <p>
              Simply unbelievable! I am really satisfied with the doctor who
              treated me. This is absolutely wonderful! Timson K
            </p>
            <div className="user_box">
              <img src={UserLogo} alt="" />
              <div className="username">
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
            <h2>Verify</h2>
            <p>Enter OTP which we sent to you</p>
            <div className="input_text_otp">
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
              <input type="number" placeholder="-" />
            </div>
            <Link to={"/successfulverify"} className="Link">
              <button className="otp-btn"> Verify OTP</button>
            </Link>
          </form>
        </div>
        <div className="paragraph">
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