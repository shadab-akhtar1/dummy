import React from 'react'
import {Navbar} from './Navbar';
import Footermanage from './Footer';
import { Link } from "react-router-dom";
import {PiArrowLeftFill} from 'react-icons/pi';
import {IoIosAdd} from 'react-icons/io';
import {IoMdAdd} from 'react-icons/io';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';
import Pagination from './Pagination';

export const Dhamanagement = () => {
  return (
    
    <div>
    <div className='w-[100%]'><Navbar/></div>
        <div className='bg-[#F5F6F7] w-[100%] pt-[20px]'>
            <div className='flex justify-between items-center ml-[70px] mr-[70px] '>
                <div className='flex justify-start font-montserrat font-bold'>
                
                <h2 className='font-bold font-montserrat text-[#1A1C1F] flex justify-around items-center text-[22px]'><Link to={"/successfulverify"}><PiArrowLeftFill className='pr-[10px] text-[#1A1C1F] text-center items-center text-[30px]'/></Link>DHA Management</h2>
                </div>
                <div className='flex justify-end items-center'>
                    <Link to={"/dharequest"} className="Link">
                        <button className='h-[36px] w-[137px] bg-[#FCE6EC] rounded-[8px] border-none mr-[5px] text-[#E40443] font-semibold text-[14px] font-montserrat flex justify-center items-center'>DHA Request</button>
                    </Link>
                    <Link to={"/adddha"} className="Link">
                        <button className='h-[36px] w-[137px] bg-[#FCE6EC] rounded-[8px] border-none ml-[5px] text-[#E40443] font-semibold text-[14px] font-montserrat flex justify-center items-center'><IoMdAdd className='w-[14px] h-[14px] mr-[10px]'/>Add DHA</button>
                    </Link>
                </div>
            </div>
            <div className='option'>
                <table className='border-collapse ml-[70px] w-[90%] text-[0.9em] bg-[whitesmoke] rounded-[10px] mt-[20px] overflow-hidden'>
                    <thead>
                        <tr className='w-[250px] bg-[#E3E6E8] text-left border-b-[1px] border-solid border-[#E3E6E8]'>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>DHA Name</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Email</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Contact</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Total Booking</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Total Earnings</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/dhadetailsview"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Jacob Jones</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>12</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Rs. 5000</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><button className='rounded-[24px] bg-[#FFE9E6] border-none h-[22px] w-[58px] text-[#F1614B] text-[10px] font-medium fonyt-montserrat text-center'>offline</button></td>
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/dhadetailsview"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof2} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Darrell Steward</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>12</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Rs. 5000</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><button className='rounded-[24px] bg-[#D1EDD6] border-none h-[22px] w-[58px] text-[#3EB655] text-[10px] font-medium fonyt-montserrat text-center'>online</button></td>
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/dhadetailsview"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof3} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Esther Howard</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>12</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Rs. 5000</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><button className='rounded-[24px] bg-[#FFE9E6] border-none h-[22px] w-[58px] text-[#F1614B] text-[10px] font-medium fonyt-montserrat text-center'>offline</button></td>
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/dhadetailsview"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof4} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Arlene McCoy </div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>12</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Rs. 5000</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><button className='rounded-[24px] bg-[#D1EDD6] border-none h-[22px] w-[58px] text-[#3EB655] text-[10px] font-medium fonyt-montserrat text-center'>online</button></td>
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/dhadetailsview"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof5} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>jane Cooper </div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>12</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Rs. 5000</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><button className='rounded-[24px] bg-[#D1EDD6] border-none h-[22px] w-[58px] text-[#3EB655] text-[10px] font-medium fonyt-montserrat text-center'>Online</button></td>
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/dhadetailsview"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof6} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Ralph Edwards</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>12</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Rs. 5000</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><button className='rounded-[24px] bg-[#D1EDD6] border-none h-[22px] w-[58px] text-[#3EB655] text-[10px] font-medium fonyt-montserrat text-center'>Online</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className='pb-[30px] mt-[20px]'><Pagination/></div>

               
            </div>
        </div>
        <div className='footer_dha_manage'><Footermanage/></div>
        
    </div>

  )
}

export default Dhamanagement
