import React from 'react';
import './Successfulverify.css';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Done from "../Assets/Done.svg";
import { Link } from "react-router-dom";

export const Successfulverify = () => {
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

        <div className=" successfull">
          <form className="success_form">
            <img src={Done} alt="logo" />
            <h1>Successful</h1>
            <p>OTP Is verified successfully</p>
            <button className="success_otp_btn">
              <Link to={"/dhamanagement"} className="Link">
                Continue
              </Link>
            </button>
          </form>
        </div>
        
      </div>
        </div>
  )
}
export default Successfulverify
