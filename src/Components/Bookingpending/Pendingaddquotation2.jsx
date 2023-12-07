import React from 'react';
import './Pendingaddquotation2.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";

export const Pendingaddquotation2 = () => {
  return (
    <>
    <div className='addquotation2_pendingdoctorassign_doctorassign'>
    <div className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_2'>
            <div className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_2'>
                <div className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_para'>
                    <h4 className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_head_2'>Quotation Sent</h4>
                    <p className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_pi_2'>Quotation for request #12345 is sent successfully</p>

                </div>
                
                <Link to={"/pendingpharmacycase1"} className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_link'>
                <button className='addquotation2_pendingdoctorassign_doctorassign_blocklab_success_adddha_success_box_btn_2'>Go To Dashboard</button>
                </Link>
                

            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Pendingaddquotation2