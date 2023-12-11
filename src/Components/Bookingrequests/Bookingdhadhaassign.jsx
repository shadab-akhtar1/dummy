import React from 'react';
import './Bookingdhadhaassign.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";

export const Bookingdhadhaassign = () => {
  return (
    <>
    <div className='dha_assign_bookingdha_doctorassign'>
    <div className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_2'>
        <Link to={"/bookingdhaassign"} className='cross_link_bookingdhadhaassign'><div className='bookingdhadhaassign_cross'><RxCross2/></div></Link>
            <div className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_2'>
                <div className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_para'>
                    <h4 className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_head_2'>DHA Assigned</h4>
                    <p className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_pi_2'>The DHA “Name” is successfully assigned for case #1234 on ” Date”</p>

                </div>
                
                <Link to={""} className='dha_assign_bookingdha_doctorassign_blocklab_success_link'>
                <button className='dha_assign_bookingdha_doctorassign_blocklab_success_adddha_success_box_btn_2'>View Status</button>
                </Link>
                

            </div>
            
        </div>
    </div>
    </>
  )
}
export default Bookingdhadhaassign
