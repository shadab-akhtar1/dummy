import React from 'react';
import './Blocklab.css';
import { Link } from "react-router-dom";
import warning from "../Assets/image 228.png";
import { RxCross2 } from "react-icons/rx";

export const Blocklab = () => {
  return (
    <>
    <div className='blocklab_hero_block'>
        <div className='blocklab_adddha_success_block'>
        <Link to={"/labdetails"} className='cross_link_blocklab'><div className='blocklab_cross'><RxCross2/></div></Link>
            <div className='blocklab_adddha_success_box_block'>
                <div className='blocklab_adddha_success_box_logo_block'>
                    <img src={warning} alt="" />

                </div>
                <div className='bloclab_adddha_success_box_para_block'>
                    <h4 className='blocklab_adddha_success_box_head_block'>Are You Sure You Want To Block Lab?</h4>
                    <p className='blocklab_adddha_success_box_pi_block'>Lab Account will be Blocked</p>

                </div>
                <div className='blocklab_blockdha_btn_div_block'>
                    <Link to={"/labdetails"}>
                <button className='blocklab_blockdha_btn_1_block'>Cancel</button>
                </Link>
                <Link to={"/blocklabsuccess"} className='blocklab_blockdhasuccess_link'>
                <button className='blocklab_blockdha_btn_2_block'>Block</button>
                </Link>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blocklab
