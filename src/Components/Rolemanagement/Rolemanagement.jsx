import React from 'react';
import './Rolemanagement.css';
import { Link } from "react-router-dom";
import {Navbar} from '../Dhamanagement/Navbar';
import {Footer} from '../Dhamanagement/Footer';
import {PiArrowLeftFill} from 'react-icons/pi';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {IoMdAdd} from 'react-icons/io';
import { LuEye } from "react-icons/lu";
import { AiOutlineEdit } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import prof from '../Assets/Ellipse 187.jpg';

export const Rolemanagement = () => {
  return (
    <>
    <div className='Role_managemenet'><Navbar/></div>
    <div className='middle_section_doctor_role'>
            <div className='heading_doctor_role'>
                <div className='heading_content_doctor_role'>
                
                <h2>Role & Access Management</h2>
                </div>
                <div className='heading_content_doctor_2_role'>
                <Link to={"/addsubadmin"} className="link_role">
                <button className='doctor_btn_1_role'>
                <IoMdAdd className='add_doctor_btn_role'/>
                Add Sub Admin
              </button></Link>
              <Link to={"/addrole"} className="link_role">
                <button className='doctor_btn_2_role'>
                
                <IoMdAdd className='add_doctor_btn_role'/>
                Add New Role
              </button></Link>
              </div>
            </div>
            <div className='option_doctor_role'>
                <table className='dha_doctor_table_role'>
                    <thead>
                        <tr>
                            <th> Name</th>
                        
                            <th>Contact</th>
                            <th>Role</th>
                            <th>View</th>
                            
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <td> <div className='doctor_data_user_prof_role'><img src={prof} alt="" className='doctor_user_prof_role'/>Jacob Jones</div></td>
                            <td>+91 1234567890</td>
                            <td>Booking Manager</td>
                            <td className='role_td'><div className='role_management_all_icon'>
                                <div className='role_management_1_icon'><LuEye/></div>
                                <Link to={"/editpermision"} className='rolemanagement_editpermision_link'>
                                <div className='role_management_2_icon'><AiOutlineEdit/></div>
                                </Link>
                                <div className='role_management_3_icon'>< MdBlockFlipped/></div>
                            </div></td>
                            
                        </tr>
                        
                        <tr>
                        <td> <div className='doctor_data_user_prof_role'><img src={prof} alt="" className='doctor_user_prof_role'/>Darrell Esteward</div></td>
                            
                            <td>+91 123 456 7890</td>
                            <td>User Manager</td>
                            <td className='role_td'><div className='role_management_all_icon'>
                                <div className='role_management_1_icon'><LuEye/></div>
                                <div className='role_management_2_icon'><AiOutlineEdit/></div>
                                <div className='role_management_3_icon'>< MdBlockFlipped/></div>
                            </div></td>
                            
                        </tr>
                        <tr className='table_row_role'>
                        <td> <div className='doctor_data_user_prof_role'><img src={prof} alt="" className='doctor_user_prof_role'/>Esther Howard</div></td>
                            
                            <td>+91 123 456 7890</td>
                            <td>Doctor Manager</td>
                            <td className='role_td'><div className='role_management_all_icon'>
                                <div className='role_management_1_icon'><LuEye/></div>
                                <div className='role_management_2_icon'><AiOutlineEdit/></div>
                                <div className='role_management_3_icon'>< MdBlockFlipped/></div>
                            </div></td>
                    
                        </tr>
                        <tr className='table_row_role'>
                        <td> <div className='doctor_data_user_prof_role'><img src={prof} alt="" className='doctor_user_prof_role'/>Arlene Mccoy</div></td>
                        
                            <td>+91 123 456 7890</td>
                            <td>Lab Manager</td>
                            <td className='role_td'><div className='role_management_all_icon'>
                                <div className='role_management_1_icon'><LuEye/></div>
                                <div className='role_management_2_icon'><AiOutlineEdit/></div>
                                <div className='role_management_3_icon'>< MdBlockFlipped/></div>
                            </div></td>
                            
                        </tr>
                        <tr className='table_row_role'>
                        <td> <div className='doctor_data_user_prof_role'><img src={prof} alt="" className='doctor_user_prof_role'/>Jane Cooper</div></td>
                        
                            <td>+91 123 456 7890</td>
                            <td>Pharmacy Manager</td>
                            <td className='role_td'><div className='role_management_all_icon'>
                                <div className='role_management_1_icon'><LuEye/></div>
                                <div className='role_management_2_icon'><AiOutlineEdit/></div>
                                <div className='role_management_3_icon'>< MdBlockFlipped/></div>
                            </div></td>
                            
                        </tr>
                        <tr className='table_row_role'>
                        <td> <div className='doctor_data_user_prof_role'><img src={prof} alt="" className='doctor_user_prof_role'/>Ralph Edwards</div></td>
                        
                            <td>+91 123 456 7890</td>
                            <td>DHA Manager</td>
                            <td className='role_td'><div className='role_management_all_icon'>
                                <div className='role_management_1_icon'><LuEye/></div>
                                <div className='role_management_2_icon'><AiOutlineEdit/></div>
                                <div className='role_management_3_icon'>< MdBlockFlipped/></div>
                            </div></td>
                            
                        </tr>
                        
                    </tbody>
                </table>

                <div className='pagination_doctor_role'>
                    <a href='' className='anchi_role'><PiCaretDoubleLeftBold className='less_1_role'/></a>
                    <a href='' className='anchi_role'><PiCaretLeftBold className='less_doctor_role'/></a>
                    <a href=''className='anch_active_role'>1</a>
                    <a href='' className='anchi_role'>2</a>
                    <a href='' className='anchi_role'>3</a>
                    <a href='' className='anchi_role'>...</a>
                    <a href='' className='anchi_role'>10</a>
                    <a href='' className='anchi_role'><PiCaretRightBold className='less_doctor_role'/></a>
                    <a href='' className='anchi_role'><PiCaretDoubleRightBold className='less_doctor_role'/></a>

                </div>
            </div>
        </div>
        <div className='footer_dha_doctor_role'><Footer/></div>
    </>
  )
}
export default Rolemanagement
