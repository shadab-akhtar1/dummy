import React from 'react';
import './Blockpharma.css';
import { Link } from "react-router-dom";
import warning from "../Assets/image 228.png";
import { RxCross2 } from "react-icons/rx";

export const Blockpharma = () => {
  return (
    <>
    <div className='blockpharma_hero_block'>
        <div className='blockpharma_adddha_success_block'>
            <Link to={"/"} className='cross_link_blockpharma'><div className='blockpharma_cross'><RxCross2/></div></Link>
            <div className='blockpharma_adddha_success_box_block'>
                <div className='blockpharma_adddha_success_box_logo_block'>
                    <img src={warning} alt="" />

                </div>
                <div className='blockpharma_adddha_success_box_para_block'>
                    <h4 className='blockpharma_adddha_success_box_head_block'>Are You Sure You Want To Block DHA?</h4>
                    <p className='blockpharma_adddha_success_box_pi_block'>DHA Account will be Blocked</p>

                </div>
                <div className='blockpharma_blockdha_btn_div_block'>
                    <Link to={"/pharmadetail"}>
                <button className='blockpharma_blockdha_btn_1_block'>Cancel</button>
                </Link>
                <Link to={"/blockpharmasuccess"} className='blockpharma_blockdhasuccess_link'>
                <button className='blockpharma_blockdha_btn_2_block'>Block</button>
                </Link>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}
export default Blockpharma