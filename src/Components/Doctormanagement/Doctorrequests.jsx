import React from 'react';
import './Doctorrequests.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Footer} from '../Dhamanagement/Footer';
import prof from '../Assets/Ellipse 187.jpg';
import prof2 from '../Assets/Ellipse 187 (1).jpg';
import prof3 from '../Assets/Ellipse 187 (2).jpg';
import prof4 from '../Assets/Ellipse 187 (3).jpg';
import prof5 from '../Assets/Ellipse 187 (4).jpg';
import prof6 from '../Assets/Ellipse 187 (5).jpg';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {FaGreaterThan} from 'react-icons/fa6';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from "react-router-dom";

export const Doctorrequests = () => {
  return (
    <>
        <div className='doctor_requests'><Navbar/></div>
        <div className='middle_section_doctor_requests'>
            <div className='heading_box1_requests'>
                <div className='heading_content_box_requests'>
                <h2> <BiArrowBack className="left_logo"/>Doctor Requests</h2>
                </div>
                
            </div>
            <div className='option_requests'>
                <table className='requests_table'>
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Contact</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr> <Link to={"/dhadetailsview"}>
                            <td className='requests_data_user_prof_2'><img src={prof} alt="" className='requests_user_prof_2'/>Jacob Jones</td>
                            </Link>
                            <td>Psychologist</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='requests_data_user_prof_2'><img src={prof2} alt="" className='requests_user_prof_2'/>Darrell Steward</td>
                            <td>Nose Specialist</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='requests_data_user_prof_2'><img src={prof3} alt="" className='requests_user_prof_2'/>Esther Howard</td>
                            <td>Heart Specialist</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='requests_data_user_prof_2'><img src={prof4} alt="" className='requests_user_prof_2'/>Arlene McCoy</td>
                            <td>Hepatologist</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='table_row'>
                            <td className='requests_data_user_prof_2'><img src={prof5} alt="" className='requests_user_prof_2'/>jane Cooper</td>
                            <td>Ophthalmologist</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td className='requests_data_user_prof_2'><img src={prof6} alt="" className='requests_user_prof_2'/>Ralph Edwards</td>
                            <td>Psychologist</td>
                            <td>+91 123 456 7890</td>
                           
                        </tr>
                    </tbody>
                </table>

                <div className='pag_requests'>
                    <a href=''>< PiCaretDoubleLeftBold className='left_arrow'/></a>
                    <a href=''><FaLessThan className='left_1_arrow'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href=''>...</a>
                    <a href=''>10</a>
                    <a href=''><FaGreaterThan className='left_1_arrow'/></a>
                    <a href=''><PiCaretDoubleRightBold className='left_arrow'/></a>


                </div>
            </div>
        </div>
        <div className='footer_dha_requests'><Footer/></div>
    </>
    
  )
}

export default Doctorrequests
