import React from 'react'
import {Navbar} from './Navbar';
import Footermanage from './Footer';
import './Dhamanagement.css';
import { Link } from "react-router-dom";
import FaLeft from 'react-icons/fa';
import {BiArrowBack} from 'react-icons/bi';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {FaGreaterThan} from 'react-icons/fa6';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';

export const Dhamanagement = () => {
  return (
    
    <div>
    <div className='management_manage'><Navbar/></div>
        <div className='middle_section_manage'>
            <div className='heading'>
                <div className='heading_content'>
                
                <h2><Link to={"/successfulverify"}><BiArrowBack className="left_logo"/></Link>DHA Management</h2>
                </div>
                <button className='management_btn_1'>
                <Link to={"/dharequest"} className="Link">
                DHA Request
              </Link></button>
                <button className='management_btn_2'>
                <Link to={"/adddha"} className="Link">
                Add DHA
              </Link></button>
            </div>
            <div className='option'>
                <table className='dha_table'>
                    <thead>
                        <tr>
                            <th>DHA Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Total Booking</th>
                            <th>Total Earnings</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <td className='data_user_prof'><img src={prof} alt="" className='user_prof'/>Jacob Jones</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td ><button className='dha_table_btn_1'>offline</button></td>
                        </tr>
                        <tr>
                            <td className='data_user_prof'><img src={prof2} alt="" className='user_prof'/>Darrell Steward</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td >Rs. 5000</td>
                            <td ><button className='dha_table_btn_2'>online</button></td>
                        </tr>
                        <tr>
                            <td className='data_user_prof'><img src={prof3} alt="" className='user_prof'/>Esther Howard</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_1'>offline</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='data_user_prof'><img src={prof4} alt="" className='user_prof'/>Arlene McCoy</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_2'>online</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='data_user_prof'><img src={prof5} alt="" className='user_prof'/>jane Cooper</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_2'>Online</button></td>
                        </tr>
                        <tr>
                            <td className='data_user_prof'><img src={prof6} alt="" className='user_prof'/>Ralph Edwards</td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_2'>Online</button></td>
                        </tr>
                    </tbody>
                </table>

                <div className='pagination_manage'>
                    <a href='' className='anchi'><PiCaretDoubleLeftBold className='less_1'/></a>
                    <a href='' className='anchi'><FaLessThan className='less'/></a>
                    <a href=''className='anchi_active'>1</a>
                    <a href='' className='anchi'>2</a>
                    <a href='' className='anchi'>3</a>
                    <a href='' className='anchi'>...</a>
                    <a href='' className='anchi'>10</a>
                    <a href='' className='anchi'><FaGreaterThan className='less'/></a>
                    <a href='' className='anchi'><PiCaretDoubleRightBold className='less'/></a>

                </div>
            </div>
        </div>
        <div className='footer_dha_manage'><Footermanage/></div>
        
    </div>

  )
}

export default Dhamanagement
