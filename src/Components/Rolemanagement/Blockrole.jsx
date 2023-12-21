import React from 'react';
import './Blockrole.css';
import { Link } from "react-router-dom";
import warning from "../Assets/image 228.png";
import { RxCross2 } from "react-icons/rx";

export const Blockrole = () => {
  return (
    <>
    <div className='blockrole_blocklab_hero_block'>
        <div className='blockrole_blocklab_adddha_success_block'>
        <Link to={"/rolemanagement"} className='blockrole_cross_link_blocklab'><div className='blockrole_blocklab_cross'><RxCross2/></div></Link>
            <div className='blockrole_blocklab_adddha_success_box_block'>
                <div className='blockrole_blocklab_adddha_success_box_logo_block'>
                    <img src={warning} alt="" />

                </div>
                <div className='blockrole_bloclab_adddha_success_box_para_block'>
                    <h4 className='blockrole_blocklab_adddha_success_box_head_block'>Are You Sure You Want To Block Role?</h4>
                    <p className='blockrole_blocklab_adddha_success_box_pi_block'>Role  Account will be Blocked</p>

                </div>
                <div className='blockrole_blocklab_blockdha_btn_div_block'>
                    <Link to={"/rolemanagement"}>
                <button className='blockrole_blocklab_blockdha_btn_1_block'>Cancel</button>
                </Link>
                <Link to={"/blockrolesuccess"} className='blockrole_blocklab_blockdhasuccess_link'>
                <button className='blockrole_blocklab_blockdha_btn_2_block'>Block</button>
                </Link>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blockrole