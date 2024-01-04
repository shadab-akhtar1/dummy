import React from 'react';
import UserLogo from "../Assets/Rectangle 618.svg";
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Done from "../Assets/Done.svg";
import { Link } from "react-router-dom";

export const Successfulverify = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-between'>
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

        <div className=" flex justify-center items-center h-[100%] ">
          <form className="flex flex-col text-left pt-[20px]  ">
            <img src={Done} alt="logo" className='w-[200px] h-[200px] m-auto' />
            <h1 className='text-[20px] font-bold font-montserrat text-center mt-[30px] mb-[-2px]'>Successful</h1>
            <p className='font-medium text-[14px] font-montserrat text-[#1A1C1F] text-center '>OTP Is verified successfully</p>
            <Link to={"/dhamanagement"} className="no-underline">
            <button className="h-[40px] w-[416px] cursor-pointer rounded-[8px] bg-[#fce6ec] text-[#E40443] text-[16px] font-semibold font-montserrat mt-[20px]">
              
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
