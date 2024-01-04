import React from 'react';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import { Link } from "react-router-dom";

export const Verification = () => {
  return (
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

        <div className="flex flex-col items-center text-center w-[100%] h-[650px] justify-between">
        <div className="mt-[20px] mb-[30px] pb-[20px]">
          <img src={Weblogo} alt="logo" />
        </div>

        <div className="otp_container">
          <form className="flex flex-col items-center pt-[10px]">
            <h2 className='mb-[-4px] text-[32px] font-bold font-montserrat '>Verify</h2>
            <p className='text-[1px] pb-[15px] font-montserrat font-medium '>Enter OTP which we sent to you</p>
            <div className="flex justify-center items-center gap-[10px] mt-[20px] ">
              <input type="text" placeholder="-" maxLength={1} className='w-[62px] h-[44px] rounded-[8px] no-underline border-[1px] border-solid border-[#E3E6E8] text-center text-[18px] text-[#E3E6E8]  '/>
              <input type="text" placeholder="-" maxLength={1} className='w-[62px] h-[44px] rounded-[8px] no-underline border-[1px] border-solid border-[#E3E6E8] text-center text-[18px] text-[#E3E6E8]  '/>
              <input type="text" placeholder="-" maxLength={1} className='w-[62px] h-[44px] rounded-[8px] no-underline border-[1px] border-solid border-[#E3E6E8] text-center text-[18px] text-[#E3E6E8]  '/>
              <input type="text" placeholder="-" maxLength={1} className='w-[62px] h-[44px] rounded-[8px] no-underline border-[1px] border-solid border-[#E3E6E8] text-center text-[18px] text-[#E3E6E8]  '/>
            </div>
            <Link to={"/successfulverify"} className="Link">
              <button className='h-[40px] w-[416px] cursor-pointer rounded-[8px] bg-[#E40443] text-[#fff] text-[16px] font-semibold font-montserrat mt-[20px]'> Verify OTP</button>
            </Link>
          </form>
        </div>
        <div className='flex flex-col justify-center items-center w-[75%] mt-[60px]'>
          <p className='text-[15px] text-[#5B6572] pb-[30px] font-normal font-montserrat'>
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