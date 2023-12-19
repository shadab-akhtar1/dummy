import React from 'react'
import {Navbar} from './Navbar';
import Footermanage from './Footer';
import './Dhamanagement.css';
import { Link } from "react-router-dom";
import {PiArrowLeftFill} from 'react-icons/pi';
import {IoIosAdd} from 'react-icons/io';
import {IoMdAdd} from 'react-icons/io';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {FaGreaterThan} from 'react-icons/fa6';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
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
                
                <h2><Link to={"/successfulverify"}><PiArrowLeftFill className="left_logo"/></Link>DHA Management</h2>
                </div>
                <div className='heading_content_right'>
                    <Link to={"/dharequest"} className="Link">
                        <button className='management_btn_1'>DHA Request</button>
                    </Link>
                    <Link to={"/adddha"} className="Link">
                        <button className='management_btn_2'><IoMdAdd className='add_btn'/>Add DHA</button>
                    </Link>
                </div>
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
                            <td ><Link to={"/dhadetailsview"} className='dhamanagement_link'><div className='data_user_prof'><img src={prof} alt="" className='user_prof'/>Jacob Jones</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td ><button className='dha_table_btn_1'>offline</button></td>
                        </tr>
                        <tr>
                            <td ><Link to={"/dhadetailsview"} className='dhamanagement_link'><div className='data_user_prof'><img src={prof2} alt="" className='user_prof'/>Darrell Steward</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td >Rs. 5000</td>
                            <td ><button className='dha_table_btn_2'>online</button></td>
                        </tr>
                        <tr>
                            <td ><Link to={"/dhadetailsview"} className='dhamanagement_link'><div className='data_user_prof'><img src={prof3} alt="" className='user_prof'/>Esther Howard</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_1'>offline</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td ><Link to={"/dhadetailsview"} className='dhamanagement_link'><div className='data_user_prof'><img src={prof4} alt="" className='user_prof'/>Arlene McCoy </div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_2'>online</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td ><Link to={"/dhadetailsview"} className='dhamanagement_link'><div className='data_user_prof'><img src={prof5} alt="" className='user_prof'/>jane Cooper </div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            <td>12</td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_table_btn_2'>Online</button></td>
                        </tr>
                        <tr>
                            <td ><Link to={"/dhadetailsview"} className='dhamanagement_link'><div className='data_user_prof'><img src={prof6} alt="" className='user_prof'/>Ralph Edwards</div></Link></td>
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
                    <a href='' className='anchi'><PiCaretLeftBold className='less'/></a>
                    <a href=''className='anchi_active'>1</a>
                    <a href='' className='anchi'>2</a>
                    <a href='' className='anchi'>3</a>
                    <a href='' className='anchi'>...</a>
                    <a href='' className='anchi'>10</a>
                    <a href='' className='anchi'><PiCaretRightBold className='less'/></a>
                    <a href='' className='anchi'><PiCaretDoubleRightBold className='less'/></a>
                    

                </div>
            </div>
        </div>
        <div className='footer_dha_manage'><Footermanage/></div>
        
    </div>

  )
}

export default Dhamanagement
