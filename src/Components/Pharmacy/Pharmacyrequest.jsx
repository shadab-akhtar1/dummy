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

import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';

import { Link } from "react-router-dom";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";

export const Pharmacyrequest = () => {
  return (
    <>
    <div><Navbar/></div>
    <div className='middle_section'>
            <div className='heading_box1'>
                <div className='heading_content_box'>
                <h2> <Link to={"/pharmacymanagementmain"}><PiArrowLeftFill className="left_logo_arrow"/></Link>Pharmacy Requests</h2>
                </div>
                
            </div>
            <div className='option'>
                <table className='request_table'>
                    <thead>
                        <tr>
                            <th>DHA Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td><Link to={"/pharmadetail"} className='dharequest_link'><div className='data_user_prof_2'><img src={prof} alt="" className='user_prof_2'/>Jacob Jones</div></Link></td>
                            
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td><Link to={"/pharmadetail"} className='dharequest_link'><div className='data_user_prof_2'><img src={prof2} alt="" className='user_prof_2'/>Darrell Steward</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td><Link to={"/pharmadetail"} className='dharequest_link'><div className='data_user_prof_2'><img src={prof3} alt="" className='user_prof_2'/>Esther Howard</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td><Link to={"/pharmadetail"} className='dharequest_link'><div className='data_user_prof_2'><img src={prof4} alt="" className='user_prof_2'/>Arlene McCoy</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr className='table_row'>
                            <td><Link to={"/pharmadetail"} className='dharequest_link'><div className='data_user_prof_2'><img src={prof5} alt="" className='user_prof_2'/>jane Cooper</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                            
                        </tr>
                        <tr>
                            <td ><Link to={"/pharmadetail"} className='dharequest_link'><div className='data_user_prof_2'><img src={prof6} alt="" className='user_prof_2'/>Ralph Edwards</div></Link></td>
                            <td>email@email.com</td>
                            <td>+91 123 456 7890</td>
                           
                        </tr>
                    </tbody>
                </table>

                <div className='pag'>
                    <a href=''>< PiCaretDoubleLeftBold className='left_arrow'/></a>
                    <a href=''><PiCaretLeftBold className='left_1_arrow'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href=''>...</a>
                    <a href=''>10</a>
                    <a href=''><PiCaretRightBold className='left_1_arrow'/></a>
                    <a href=''><PiCaretDoubleRightBold className='left_arrow'/></a>


                </div>
            </div>
        </div>
        <div className='footer_dha'><Footer/></div>
    </>
  )
}
export default Pharmacyrequest