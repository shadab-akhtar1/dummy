import React from 'react';
import './Blocklabsuccess.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";

export const Blocklabsuccess = () => {
  return (
    <>
    <div className='blocklab_success_hero'>
        <div className='blocklab_success_adddha_success_2'>
        <Link to={"/blocklab"} className='cross_link_blocklabsuccess'><div className='blocklabsuccess_cross'><RxCross2/></div></Link>
            <div className='blocklab_success_adddha_success_box_2'>
                <div className='blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='blocklab_success_adddha_success_box_para'>
                    <h4 className='blocklab_success_adddha_success_box_head_2'>Lab Successfully Blocked</h4>
                    <p className='blocklab_success_adddha_success_box_pi_2'>Lab name is Blocked Successfully.</p>

                </div>
                
                <Link to={"/labdetails"} className='blocklab_success_link'>
                <button className='blocklab_success_adddha_success_box_btn_2'>Done</button>
                </Link>
                

            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blocklabsuccess
