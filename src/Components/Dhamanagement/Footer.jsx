import React from 'react';

import logo from "../Assets/Logo.png";
import {FiPhoneCall} from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';
import {AiFillInstagram } from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    
    <div className="min-h-[390px] bg-[#B60336]">
    <div className="w-full">
      <div className="flex justify-around pt-[48px] px-[12px]">
        {/* 1 */}
        <div className="">
          <img
            src={logo}
            alt="dooper"
            className="fill-[white]"
          />
          {/* contact */}
          <div className="flex mt-[32px] ">
            <IoCallOutline className="h-[30px] w-[30px] p-2 bg-white rounded-md" />
            <h1 className="font-Montserrat font-[500] text-[14px] leading-[16.24px] ml-[12px] text-white">
              Phone
            </h1>
            <h2 className="font-Montserrat font-[500] text-[16px] leading-[16.24px] -ml-[46px] mt-[22px] text-white">
              +1 23 456 7980
            </h2>
          </div>
          <div className="flex mt-[24px]">
            <IoMailOutline className="h-[30px] w-[30px] p-2 bg-white rounded-md" />
            <h1 className="font-Montserrat font-[500] text-[14px] leading-[16.24px] ml-[12px] text-white">
              Mail
            </h1>
            <h2 className="font-Montserrat font-[500] text-[16px] leading-[16.24px] -ml-[29px] mt-[22px] text-white">
              info@dooper.com
            </h2>
          </div>
        </div>

        {/* 2 */}
        <div className="font-Montserrat font-[600] text-[18px] text-white pt-[24px]">
          <h1>Quick Links</h1>
          <ul className="text-white text-[16px] font-medium list-disc space-y-[14px] h-[170px] pl-6">
            <li className="mt-6">Pricing</li>
            <li className="">Doctors</li>
            <li className="">Services</li>
            <li className="">Testimonials</li>
            <li className="">FAQ's</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="font-Montserrat font-[600] text-[18px] text-white pt-[24px]">
          <h2>Other</h2>
          <ul className="text-white text-[16px] font-medium list-disc space-y-[14px] h-[170px] pl-6">
            <li className="mt-6">Make Appointment</li>
            <li className="">Emergency Call</li>
            <li className="">Testimonials</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="font-Montserrat font-[600] text-[18px] text-white pt-[24px]">
          <h3>Links</h3>
          <ul className="text-white text-[16px] font-medium list-disc space-y-[14px] h-[170px] pl-[23px]">
            <li className="mt-6">Blogs</li>
            <li className="">Privacy Policy</li>
            <li className="">Terms and Conditions</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="font-Montserrat font-[600] text-[18px] text-white pt-[24px]">
          <h4>Connect with us</h4>
          <ul className="text-white text-[16px] font-medium flex flex-row space-x-2 h-[170px] ">
            <li className="mt-6 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[8px]">
              <GrInstagram className="fill-red-500" />
            </li>
            <li className="mt-6 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[8px]">
              <FaFacebook className="fill-red-500" />
            </li>
            <li className="mt-6 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[8px]">
              <FaLinkedin className="fill-red-500" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        
    

    
    
  )
}
export default Footer