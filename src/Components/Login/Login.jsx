import React from 'react';
import './Login.css';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
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
        
        <div className='right_side'>
        <div className="right_side_logo">
          <img src={Weblogo} alt="logo" />
        </div>

        <div className="login_form_container">
          <h1>Welcome</h1>
          <p>
            Welcome to <span>DOOPER</span>, please enter your details
          </p>

          <form className="loginform">
            <label for="number">Phone Number</label>
            <input type="number" placeholder="Enter your phone number" />
            <Link to={"/verification"} className="Link">
              <button className="otp-btn">Send OTP</button>
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

        <div className="paragraph">
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
