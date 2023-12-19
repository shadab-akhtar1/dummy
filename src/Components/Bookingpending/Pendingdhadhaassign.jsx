import React from 'react';
import './Pendingdhadhaassign.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";

export const Pendingdhadhaassign = () => {
  return (
    <>
    <div className='pending_dha_assign_bookingdha_doctorassign'>
    <div className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_2'>
      <Link to={"/pendingdhaassigndha"} className='cross_link_pendingdhadhaassign'><div className='pendingdhadhaassign_cross'><RxCross2/></div></Link>
            <div className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_2'>
                <div className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_para'>
                    <h4 className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_head_2'>DHA Assigned</h4>
                    <p className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_pi_2'>The DHA “Name” is successfully assigned for case #1234 on ” Date”</p>

                </div>
                
                <Link to={""} className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_link'>
                <button className='pending_dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_btn_2'>View Status</button>
                </Link>
                

            </div>
            
        </div>
    </div>
    
    </>
  )
}
export default Pendingdhadhaassign
