import React from 'react';
import './Adddhasuccess.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";


export const Adddhaupload = () => {
  return (
    <div className='hero'>
         
        <div className='adddha_success_1'>
       
            <div className='adddha_success_box_1'>
                <div className='adddha_success_box_logo_1'>
                    <img src={Done} alt="" />

                </div>
                <div className='adddha_success_box_para_1'>
                    <h4 className='adddha_success_box_head'>Successful</h4>
                    <p className='adddha_success_box_pi'>DHA (Dooper Health Assistance) is Added successfully.</p>

                </div>

                <button className='adddha_success_box_btn_1'>Continue</button>

            </div>
            
        </div>
        
    </div>
  )
}
export default Adddhaupload 