import React from 'react';
import './Blockpharmasuccess.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";

export const Blockpharmasuccess = () => {
  return (
    <>
    <div className='blockpharma_success_hero'>
        <div className='blockpharma_success_adddha_success_2'>
            <div className='blockpharma_success_adddha_success_box_2'>
                <div className='blockpharma_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='blockpharma_success_adddha_success_box_para'>
                    <h4 className='blockpharma_success_adddha_success_box_head_2'>DHA Successfully Blocked</h4>
                    <p className='blockpharma_success_adddha_success_box_pi_2'>DHA name is Blocked Successfully.</p>

                </div>
                
                <Link to={"/pharmadetail"} className='blockpharma_success_link'>
                <button className='blockpharma_success_adddha_success_box_btn_2'>Done</button>
                </Link>
                

            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blockpharmasuccess
