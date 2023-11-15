import React from 'react';
import './Successfulverify.css';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Done from "../Assets/Done.svg";
import { Link } from "react-router-dom";

export const Successfulverify = () => {
  return (
    <div className='success_container'>
        <div className='left_side_success'>
            <div className="logo_success">
                <p>DOOPER</p>
            </div>
            <div className="heading_box_success">
                <h1 className='heading_box_success_head'>Start your journey with us</h1>
                <p className='heading_box_success_para'>Discover the world’s best community of doctors and DHAs</p>
            </div>
            <div className="box1_success">
          <div className="box2_success">
            <p className='box2_success_par'>
              Simply unbelievable! I am really satisfied with the doctor who
              treated me. This is absolutely wonderful! 
            </p>
            <div className="user_box_success">
              <img src={UserLogo} alt="" />
              <div className="username_success_prof">
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

        <div className="right_side_success">
        <div className="right_side_logo_success">
          <img src={Weblogo} alt="logo" />
        </div>

        <div className=" successfull">
          <form className="success_form">
            <img src={Done} alt="logo" />
            <h1 className='successfull_head'>Successful</h1>
            <p className='successfull_graph'>OTP Is verified successfully</p>
            <Link to={"/dhamanagement"} className="Link">
            <button className="success_otp_btn">
              
                Continue
              
            </button>
            </Link>
          </form>
        </div>
        
      </div>
        </div>
  )
}
export default Successfulverify
