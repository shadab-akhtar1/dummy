import React from 'react';
import './Blockdha.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";
import warning from "../Assets/image 228.png";


export const Adddhaupload = () => {
  return (
    <div className='hero'>
        <div className='adddha_success_block'>
            <div className='adddha_success_box_block'>
                <div className='adddha_success_box_logo_block'>
                    <img src={warning} alt="" />

                </div>
                <div className='adddha_success_box_para_block'>
                    <h4 className='adddha_success_box_head_block'>Are You Sure You Want To Block DHA?</h4>
                    <p className='adddha_success_box_pi_block'>DHA Account will be Blocked</p>

                </div>
                <div className='blockdha_btn_div_block'>
                    <Link to={"/dhadetailsview"}>
                <button className='blockdha_btn_1_block'>Cancel</button>
                </Link>
                <Link to={"/blockdhasuccess"} className='blockdhasuccess_link'>
                <button className='blockdha_btn_2_block'>Block</button>
                </Link>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
export default Adddhaupload 