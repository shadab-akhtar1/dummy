import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../Dhamanagement/Navbar';
import {Footer} from '../Dhamanagement/Footer';
import {PiArrowLeftFill} from 'react-icons/pi';
import {IoMdAdd} from 'react-icons/io';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';
import Pagination from '../Dhamanagement/Pagination';

import { LuEye } from "react-icons/lu";
import { AiOutlineEdit } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";

export const Rolemanagement = () => {
  return (
    <>
    <div className=''><Navbar/></div>
    <div className='bg-[#F5F6F7] w-[100%] pt-[20px]'>
            <div className='flex justify-between items-center ml-[70px] mr-[70px] '>
                <div className='flex justify-start font-montserrat font-bold'>
                
                <h2 className='font-bold font-montserrat text-[#1A1C1F] flex justify-around items-center text-[22px]'>Role & Access Management</h2>
                </div>
                <div className='flex justify-end items-center'>
                    <Link to={"/addsubadmin"} className="Link">
                        <button className='h-[36px] w-[137px] bg-[#FCE6EC] rounded-[8px] border-none mr-[5px] text-[#E40443] font-semibold text-[14px] font-montserrat flex justify-center items-center'><IoMdAdd className='w-[14px] h-[14px] mr-[10px]'/>Add Sub Admin</button>
                    </Link>
                    <Link to={"/addrole"} className="Link">
                        <button className='h-[36px] w-[137px] bg-[#FCE6EC] rounded-[8px] border-none ml-[5px] text-[#E40443] font-semibold text-[14px] font-montserrat flex justify-center items-center'><IoMdAdd className='w-[14px] h-[14px] mr-[10px]'/>Add New Role</button>
                    </Link>
                </div>
            </div>
            <div className='option'>
                <table className='border-collapse ml-[70px] w-[90%] text-[0.9em] bg-[whitesmoke] rounded-[10px] mt-[20px] overflow-hidden'>
                    <thead>
                        <tr className='w-[250px] bg-[#E3E6E8] text-left border-b-[1px] border-solid border-[#E3E6E8]'>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'> Name</th>
                            
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Contact</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Role</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>View</th>
                            
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={""} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Jacob Jones</div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>booking Manager</td>
                            <td className=''><div className='flex '>
                                <div className='bg-[#5CB1FF] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white]  '><LuEye/></div>
                                <Link to={"/editpermision"} className='no-underline'>
                                <div className='bg-[#41B079] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'><AiOutlineEdit/></div>
                                </Link>
                                <Link to={"/blockrole"} className='no-underline'>
                                <div className='bg-[#F1614B] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'>< MdBlockFlipped/></div>
                                </Link>
                            </div></td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={""} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof2} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Darrell Steward</div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>User Manager</td>
                            <td className=''><div className='flex '>
                                <div className='bg-[#5CB1FF] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white]  '><LuEye/></div>
                                <Link to={"/editpermision"} className='no-underline'>
                                <div className='bg-[#41B079] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'><AiOutlineEdit/></div>
                                </Link>
                                <Link to={"/blockrole"} className='no-underline'>
                                <div className='bg-[#F1614B] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'>< MdBlockFlipped/></div>
                                </Link>
                            </div></td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={""} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof3} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Esther Howard</div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Doctor Manager</td>
                            <td className=''><div className='flex '>
                                <div className='bg-[#5CB1FF] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white]  '><LuEye/></div>
                                <Link to={"/editpermision"} className='no-underline'>
                                <div className='bg-[#41B079] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'><AiOutlineEdit/></div>
                                </Link>
                                <Link to={"/blockrole"} className='no-underline'>
                                <div className='bg-[#F1614B] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'>< MdBlockFlipped/></div>
                                </Link>
                            </div></td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={""} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof4} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Arlene McCoy </div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Lab Manager</td>
                            <td className=''><div className='flex '>
                                <div className='bg-[#5CB1FF] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white]  '><LuEye/></div>
                                <Link to={"/editpermision"} className='no-underline'>
                                <div className='bg-[#41B079] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'><AiOutlineEdit/></div>
                                </Link>
                                <Link to={"/blockrole"} className='no-underline'>
                                <div className='bg-[#F1614B] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'>< MdBlockFlipped/></div>
                                </Link>
                            </div></td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof5} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>jane Cooper </div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>Pharmacy Manager</td>
                            <td className=''><div className='flex '>
                                <div className='bg-[#5CB1FF] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white]  '><LuEye/></div>
                                <Link to={"/editpermision"} className='no-underline'>
                                <div className='bg-[#41B079] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'><AiOutlineEdit/></div>
                                </Link>
                                <Link to={"/blockrole"} className='no-underline'>
                                <div className='bg-[#F1614B] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'>< MdBlockFlipped/></div>
                                </Link>
                            </div></td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof6} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Ralph Edwards</div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>DHA Manager</td>
                            <td className=''><div className='flex '>
                                <div className='bg-[#5CB1FF] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white]  '><LuEye/></div>
                                <Link to={"/editpermision"} className='no-underline'>
                                <div className='bg-[#41B079] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'><AiOutlineEdit/></div>
                                </Link>
                                <Link to={"/blockrole"} className='no-underline'>
                                <div className='bg-[#F1614B] border-none rounded-[4px] w-[24px] h-[24px] flex justify-center items-center text-[white] ml-[10px]'>< MdBlockFlipped/></div>
                                </Link>
                            </div></td>
                           
                        </tr>
                    </tbody>
                </table>
                <div className='pb-[30px] mt-[20px]'><Pagination/></div>

               
            </div>
        </div>
        <div className='footer_dha_doctor_role'><Footer/></div>
    </>
  )
}
export default Rolemanagement
