import React from 'react';
import Navbar from '../Dhamanagement/Navbar';
import Footer from '../Dhamanagement/Footer';
import {PiArrowLeftFill} from 'react-icons/pi';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';
import Pagination from '../Dhamanagement/Pagination';
import { Link } from "react-router-dom";


export const Pharmacyrequest = () => {
  return (
    <>
    <div><Navbar/></div>
    <div className='bg-[#F5F6F7] w-[100%] pt-[20px]'>
            <div className='  ml-[70px] mr-[70px]'>
                <div className='flex justify-start items-center'>
                <h2 className='font-bold font-montserrat text-[#1A1C1F flex justify-start items-center text-[22px]'> <Link to={"/pharmacymanagementmain"}><PiArrowLeftFill className='text-[#1A1C1F] text-center  pr-[10px] text-[30px] '/></Link>Pharmacy Requests</h2>
                </div>
                
            </div>
            <div className='option'>
                <table className='border-collapse ml-[70px] w-[90%] text-[0.9em] bg-[whitesmoke] rounded-[10px] mt-[20px] overflow-hidden'>
                    <thead>
                        <tr className='w-[250px] bg-[#E3E6E8] text-left border-b-[1px] border-solid border-[#E3E6E8]'>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Pharmacy Name</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Email</th>
                            <th className='py-[10px] px-[12px] text-[12px] font-medium text-[#5B6572] font-montserrat'>Contact</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'> 
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/pharmadetail"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Jacob Jones</div></Link></td>
                            
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/pharmadetail"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof2} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Darrell Steward</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/pharmadetail"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof3} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Esther Howard</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/pharmadetail"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof4} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Arlene McCoy</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/pharmadetail"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof5} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>jane Cooper</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='border-b-[1px] border-solid border-[#E3E6E8] bg-[white] h-[60px]'>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'><Link to={"/pharmadetail"} className='no-underline text-[#1A1C1F]'><div className='flex text-center items-center'><img src={prof6} alt="" className='mr-[10px] h-[19px] w-[19px] bg-[#D9D9D9] items-center'/>Ralph Edwards</div></Link></td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>email@email.com</td>
                            <td className='py-[10px] px-[12px] text-[16px] font-normal font-montserrat text-[#1A1C1F]'>+91 123 456 7890</td>
                           
                        </tr>
                    </tbody>
                </table>

                <div className='pb-[30px] mt-[20px]'><Pagination/></div>
            </div>
        </div>
        <div className='footer_dha'><Footer/></div>
    </>
  )
}
export default Pharmacyrequest