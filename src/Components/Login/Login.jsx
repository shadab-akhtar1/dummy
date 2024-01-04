import React from 'react';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaCaretDown} from 'react-icons/fa';
import flag from'../Assets/image 1.png';

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
    <div className='w-[100%] h-[100vh] flex justify-between '>
        <div className='bg-[#B60336] rounded-[16px] w-[450px] text-[#fff] flex flex-col justify-between pr-[44px] pl-[2px] my-[20px] ml-[20px] '>
            <div className="mt-[30px] ml-[30px] ">
                <p className='text-[16px] font-light font-montserrat cursor-pointer'>DOOPER</p>
            </div>
            <div className="mt-[-30px] ml-[30px] ">
                <h1 className='w-[280px] font-montserrat font-bold text-[35px] '>Start your journey with us</h1>
                <p className='w-[357px] pt-[5px] text-[27px] font-montserrat font-normal'>Discover the world’s best community of doctors and DHAs</p>
            </div>
            <div className="mb-[40px] ml-[27px] ">
          <div className="mt-[3px] bg-[#fff] w-[400px] h-[200px] rounded-[16px] py-[10px] px-[20px] ">
            <p className='text-[#1A1C1F] text-[18px] font-montserrat font-noraml leading-[28px] '>
              Simply unbelievable! I am really satisfied with the doctor who
              treated me. This is absolutely wonderful! 
            </p>
            <div className="flex justify-start gap-[10px] mt-[30px] ">
              <img src={UserLogo} alt="" className='user_box_img' />
              <div className="text-[#1A1C1F] font-bold ">
                <p>Timson K</p>
                <i class="text-[gold] pt-[5px]"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='flex flex-col items-center text-center w-[100%] h-[650px] justify-between '>
        <div className="mt-[20px] mb-[30px] pb-[20px] ">
          <img src={Weblogo} alt="logo" />
        </div>

        <div className="login_form_container">
          <h1 className='pb-[10px] text-[32px] font-bold font-montserrat mb-[-10px] mt-[50px] '>Welcome</h1>
          <p className='text-[12px] font-semibold font-montserrat text-[#1A1C1F] mb-[30px] '>
            Welcome to <span className='text-[#E40443]'>DOOPER</span>, please enter your details
          </p>

          <form className="flex flex-col text-left pt-[10px] ">
            <label for="number" className='text-[#8D98A4] text-[12px] font-montserrat pb-[10px] '>Phone Number</label>
            
            <div className='border-[1px] border-solid border-[#EEF0F3] rounded-[8px] h-[40px] mt-[5px] w-[100%] flex justify-start items-center '>
              <div className='flex justify-around items-center ml-[10px] w-[52px] '>
                        <img src={flag} alt=""  className='flex justify-start items-center '/>
                        < FaCaretDown className='flex justify-end items-center '/>
                    </div>
                <input type="text" name="" id="" placeholder='Enter phone number' className='w-[370px] text-[14px] font-medium font-montserrat text-[#5B6572] border-none outline-none'/>
            </div>
            <Link to={"/verification"} className="no-underline text-[#fff]">
              <button className="h-[40px] w-[440px] cursor-pointer rounded-[8px] bg-[#E40443] text-[#fff] text-[14px] font-semibold font-montserrat mt-[10px] ">Send OTP</button>
            </Link>

            
          </form>
        </div>
        <div className="mt-[70px] ">
          <div className="flex justify-start gap-[10px] pb-[10px] ">
            <input type="checkbox" className='cursor-pointer w-[16px] h-[20px] '/>
            <label htmlFor="checkbox" className='flex justify-center items-center text-[14px] font-normal font-montserrat '>
              By signing up you agree to <span className='text-[#E40443] cursor-pointer pl-[3px] '> Terms of use</span>
            </label>
          </div>
          <div className="flex justify-center gap-[10px] pb-[10px] ">
            <input type="checkbox" className='cursor-pointer w-[16px] h-[20px] '/>
            <label htmlFor="checkbox" className='flex justify-center items-center text-[14px] font-normal font-montserrat'>
              
              By signing up you agree to <span className='text-[#E40443] cursor-pointer pl-[3px]'>Marketing condition</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[75%] mt-[60px] ">
          <p className='text-[15px] text-[#5B6572] pb-[30px] font-normal font-montserrat '>
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
