import React from 'react';
import './Addpharmasuccess.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";

export const Addpharmasuccess = () => {
  return (
    <>
    <div className='pharmasuccess_hero'>
         
         <div className='pharmasuccess_adddha_success_1'>
        
             <div className='pharmasuccess_adddha_success_box_1'>
                 <div className='pharmasuccess_adddha_success_box_logo_1'>
                     <img src={Done} alt="" />
 
                 </div>
                 <div className='pharmasuccess_adddha_success_box_para_1'>
                     <h4 className='pharmasuccess_adddha_success_box_head'>Successful</h4>
                     <p className='pharmasuccess_adddha_success_box_pi'>DHA (Dooper Health Assistance) is Added successfully.</p>
 
                 </div>
 
                 <button className='pharmasuccess_adddha_success_box_btn_1'>Continue</button>
 
             </div>
             
         </div>
         
     </div>
    </>
  )
}
export default Addpharmasuccess
