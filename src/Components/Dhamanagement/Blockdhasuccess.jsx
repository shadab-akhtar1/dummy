import React from 'react';
import './Blockdhasuccess.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";


export const Adddhaupload = () => {
  return (
    <div className='hero'>
        <div className='adddha_success_2'>
            <div className='adddha_success_box_2'>
                <div className='adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='adddha_success_box_para'>
                    <h4 className='adddha_success_box_head_2'>DHA Successfully Blocked</h4>
                    <p className='adddha_success_box_pi_2'>DHA name is Blocked Successfully.</p>

                </div>

                <button className='adddha_success_box_btn_2'>Done</button>

            </div>
            
        </div>
        
    </div>
  )
}
export default Adddhaupload 