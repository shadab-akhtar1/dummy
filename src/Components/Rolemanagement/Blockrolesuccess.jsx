import React from 'react';
import './Blockrolesuccess.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";

export const Blockrolesuccess = () => {
  return (
    <>
    <div className='role_blocklab_success_hero'>
        <div className='role_blocklab_success_adddha_success_2'>
        <Link to={"/blockrole"} className='role_cross_link_blocklabsuccess'><div className='role_blocklabsuccess_cross'><RxCross2/></div></Link>
            <div className='role_blocklab_success_adddha_success_box_2'>
                <div className='role_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='role_blocklab_success_adddha_success_box_para'>
                    <h4 className='role_blocklab_success_adddha_success_box_head_2'>Role Access Successfully Blocked</h4>
                    <p className='role_blocklab_success_adddha_success_box_pi_2'>Role Access name is Blocked Successfully.</p>

                </div>
                
                <Link to={"/rolemanagement"} className='role_blocklab_success_link'>
                <button className='role_blocklab_success_adddha_success_box_btn_2'>Done</button>
                </Link>
                

            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blockrolesuccess