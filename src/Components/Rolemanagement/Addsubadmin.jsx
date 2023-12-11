import React from 'react';
import './Addsubadmin.css';
import {FaCaretDown} from 'react-icons/fa';
import flag from'../Assets/image 1.png';
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
export const Addsubadmin = () => {
  return (
    <>
    <div className='addsubadmin'>
        <div className='addsubadmin_container'>
            <Link to={"/rolemanagement"} className='cross_link_addsubadmin'><div className='addsubadmin_cross'><RxCross2/></div></Link>
            <div className='addsubadmin_container_1'>
                <div className='addsubadmin_container_1_left'>Add Sub Admin</div>
            </div>
            <div className='addsubadmin_container_2'>
                <span className='addsubadmin_container_2_1'>01</span>
                <span className='addsubadmin_container_2_2'>02</span>
                <div className='addsubadmin_container_2_progress'> 
                    <span className='addsubadmin_container_2_indicator'></span>
                </div>

            </div>
            <div className='addsubadmin_container_3'>
                <label className='addsubadmin_container_3_label'>Name</label>
                <input type="text" name="" id="" placeholder='Admin name' className='addsubadmin_container_3_input'/>

            </div>
            <div className='addsubadmin_container_3'>
                <label className='addsubadmin_container_3_label'>Phone Number</label>
                <div className='addsubadmin_container_3_input'>
                    <div className='addsubadmin_container_3_image_div'>
                        <img src={flag} alt="" />
                        < FaCaretDown className='addsubadmin_container_3_dropdown'/>
                    </div>
                <input type="text" name="" id="" placeholder='Enter admin phone number' className='addsubadmin_container_inp'/>
                </div>

            </div>
            <div className='addsubadmin_container_3'>
                <label className='addsubadmin_container_3_label'>Email</label>
                <input type="text" name="" id="" placeholder='Email Address' className='addsubadmin_container_3_input'/>

            </div>
            <div className='addsubadmin_container_3'>
                <label className='addsubadmin_container_3_label'>Assign Role</label>
                <select name="" id="" placeholder='Select Role' className='addsubadmin_container_3_input'>
                    <option value="">Select Role</option>
                </select>
                

            </div>
            <Link to={"/addsubadmincomplete"} className='addsubadmin_link'>
            <button className='addsubadmin_btn'>Next</button>
            </Link>
        </div>
        
    </div>
    </>
  )
}
export default Addsubadmin
