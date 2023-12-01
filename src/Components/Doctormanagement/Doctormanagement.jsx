import React from 'react';
import './Doctormanagement.css';
import { Link } from "react-router-dom";
import {Navbar} from '../Dhamanagement/Navbar';
import {Footer} from '../Dhamanagement/Footer';
import {PiArrowLeftFill} from 'react-icons/pi';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {IoMdAdd} from 'react-icons/io';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';


export const Doctormanagement = () => {
  return (
    <>
    <div className='doctor_managemenet'><Navbar/></div>
    <div className='middle_section_doctor'>
            <div className='heading_doctor'>
                <div className='heading_content_doctor'>
                
                <h2><PiArrowLeftFill className="left_logo_doctor"/>Doctor Management</h2>
                </div>
                <div className='heading_content_doctor_2'>
                <button className='doctor_btn_1'>
                <Link to={"/doctorrequests"} className="Link">
                View Requests
              </Link></button>
                <button className='doctor_btn_2'>
                <Link to={"/adddoctor"} className="Link">
                <IoMdAdd className='add_doctor_btn'/>
                Add Doctor
              </Link></button>
              </div>
            </div>
            <div className='option_doctor'>
                <table className='dha_doctor_table'>
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Contact</th>
                            <th>Total Booking</th>
                            <th>Total Earnings</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <td> <div className='doctor_data_user_prof'><img src={prof} alt="" className='doctor_user_prof'/>Jacob Jones</div></td>
                            <td>Psychologist</td>
                            <td>+91 123 456 7890</td>
                            <td> <div className='doctor_td_4'><span className='doctor_td_4_span'>12</span><span className='doctor_td_4_span_1'>view</span></div></td>
                            <td>Rs. 5000</td>
                            <td ><button className='dha_doctor_table_btn_2'>online</button></td>
                        </tr>
                        <tr>
                            <td><div className='doctor_data_user_prof'><img src={prof2} alt="" className='doctor_user_prof'/>Darrell Steward</div></td>
                            <td>Nose specialist</td>
                            <td>+91 123 456 7890</td>
                            <td><div className='doctor_td_4'><span className='doctor_td_4_span'>12</span><span className='doctor_td_4_span_1'>view</span></div></td>
                            <td >Rs. 5000</td>
                            <td ><button className='dha_doctor_table_btn_2'>online</button></td>
                        </tr>
                        <tr>
                            <td> <div className='doctor_data_user_prof'><img src={prof3} alt="" className='doctor_user_prof'/>Esther Howard</div></td>
                            <td>Heart specialist</td>
                            <td>+91 123 456 7890</td>
                            <td><div className='doctor_td_4'><span className='doctor_td_4_span'>12</span><span className='doctor_td_4_span_1'>view</span></div></td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_doctor_table_btn_1'>offline</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td> <div className='doctor_data_user_prof'><img src={prof4} alt="" className='doctor_user_prof'/>Arlene McCoy</div></td>
                            <td>Hepatologist</td>
                            <td>+91 123 456 7890</td>
                            <td><div className='doctor_td_4'><span className='doctor_td_4_span'>12</span><span className='doctor_td_4_span_1'>view</span></div></td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_doctor_table_btn_2'>online</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td> <div className='doctor_data_user_prof'><img src={prof5} alt="" className='doctor_user_prof'/>jane Cooper</div></td>
                            <td>Ophthalmologist</td>
                            <td>+91 123 456 7890</td>
                            <td><div className='doctor_td_4'><span className='doctor_td_4_span'>12</span><span className='doctor_td_4_span_1'>view</span></div></td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_doctor_table_btn_2'>Online</button></td>
                        </tr>
                        <tr>
                            <td> <div className='doctor_data_user_prof'><img src={prof6} alt="" className='doctor_user_prof'/>Ralph Edwards</div></td>
                            <td>Psychologist</td>
                            <td>+91 123 456 7890</td>
                            <td><div className='doctor_td_4'><span className='doctor_td_4_span'>12</span><span className='doctor_td_4_span_1'>view</span></div></td>
                            <td>Rs. 5000</td>
                            <td><button className='dha_doctor_table_btn_1'>Offline</button></td>
                        </tr>
                    </tbody>
                </table>

                <div className='pagination_doctor'>
                    <a href='' className='anchi'><PiCaretDoubleLeftBold className='less_1'/></a>
                    <a href='' className='anchi'><PiCaretLeftBold className='less_doctor'/></a>
                    <a href=''className='anch_active'>1</a>
                    <a href='' className='anchi'>2</a>
                    <a href='' className='anchi'>3</a>
                    <a href='' className='anchi'>...</a>
                    <a href='' className='anchi'>10</a>
                    <a href='' className='anchi'><PiCaretRightBold className='less_doctor'/></a>
                    <a href='' className='anchi'><PiCaretDoubleRightBold className='less_doctor'/></a>

                </div>
            </div>
        </div>
        <div className='footer_dha_doctor'><Footer/></div>
    </>
  )
}
export default Doctormanagement
