import React from 'react';
import './Blockdoctorsuccess.css';
import Done from "../Assets/Done.svg";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export const Blockdoctorsuccess = () => {
  return (
    <div className='hero_doctor_success'>
        <div className='adddha_doctorsuccess_2'>
            <Link to={"/blockdoctor"} className='cross_link_blockdoctorsuccess'><div className='blockdoctorsuccess_cross'><RxCross2/></div></Link>
            <div className='adddha_doctorsuccess_box_2'>
                <div className='adddha_doctorsuccess_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='adddha_doctorsuccess_box_para'>
                    <h4 className='adddha_doctorsuccess_box_head_2'>Doctor Successfully Blocked</h4>
                    <p className='adddha_doctorsuccess_box_pi_2'>Doctor name is Blocked Successfully.</p>

                </div>
                <Link to={"/doctordetails"} className='block_doctor_success_link'>
                <button className='adddha_doctorsuccess_box_btn_2'>Done</button>
                </Link>

            </div>
            
        </div>
        
    </div>
  )
}
 export default Blockdoctorsuccess