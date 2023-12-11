import React from 'react';
import './Bookingdoctordoctorassign.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import { RxCross2 } from "react-icons/rx";


export const Bookingdoctordoctorassign = () => {
  return (
    <>
    <div className='bookingdhadoctorassign_doctorassign'>
    <div className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_2'>
        <Link to={"/bookingdoctorassigndoctor"} className='cross_link_bookingdoctordoctorassign'><div className='bookingdoctordoctorassign_cross'><RxCross2/></div></Link>
            <div className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_box_2'>
                <div className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_box_para'>
                    <h4 className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_box_head_2'>Doctor Assigned</h4>
                    <p className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_box_pi_2'>The doctor “Name” is successfully assigned for case #1234 on ” Date”</p>

                </div>
                
                <Link to={"/"} className='bookingdhadoctorassign_doctorassign_blocklab_success_link'>
                <button className='bookingdhadoctorassign_doctorassign_blocklab_success_adddha_success_box_btn_2'>View Status</button>
                </Link>
                

            </div>
            
        </div>
    </div>
    </>
  )
}
export default Bookingdoctordoctorassign