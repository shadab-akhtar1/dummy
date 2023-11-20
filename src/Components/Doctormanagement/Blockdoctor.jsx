import React from 'react';
import './Blockdoctor.css';
import { Link } from "react-router-dom";
import warning from "../Assets/image 228.png";

export const Blockdoctor = () => {
  return (
    <div className='hero_doctorblock'>
    <div className='adddha_success_doctorblock'>
        <div className='adddha_success_box_doctorblock'>
            <div className='adddha_success_box_logo_doctorblock'>
                <img src={warning} alt="" />

            </div>
            <div className='adddha_success_box_para_doctorblock'>
                <h4 className='adddha_success_box_head_doctorblock'>Are You Sure You Want To Block Doctor?</h4>
                <p className='adddha_success_box_pi_doctorblock'>Doctor Account will be Blocked</p>

            </div>
            <div className='blockdha_btn_div_doctorblock'>
                <Link to={"/doctordetails"}>
            <button className='blockdha_btn_1_doctorblock'>Cancel</button>
            </Link>
            <Link to={"/blockdoctorsuccess"} className='blockdhasuccess_doctorlink'>
            <button className='blockdha_btn_2_doctorblock'>Block</button>
            </Link>
            </div>
        </div>
        
    </div>
    
</div>
  )
}
export default Blockdoctor
