import React from 'react';
import './Pendingdoctordoctorassign.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";

export const Pendingdoctordoctorassign = () => {
  return (
    <>
    <div className='pendingdoctorassign_doctorassign'>
    <div className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_2'>
            <div className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_2'>
                <div className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_para'>
                    <h4 className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_head_2'>Doctor Assigned</h4>
                    <p className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_pi_2'>The doctor “Name” is successfully assigned for case #1234 on ” Date”</p>

                </div>
                
                <Link to={"/"} className='pendingdoctorassign_doctorassign_blocklab_success_link'>
                <button className='pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_btn_2'>View Status</button>
                </Link>
                

            </div>
            
        </div>
    </div>
    </>
  )
}
export default Pendingdoctordoctorassign