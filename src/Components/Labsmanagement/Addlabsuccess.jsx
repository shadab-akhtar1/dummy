import React from 'react';
import './Addlabsuccess.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";

export const Addlabsuccess = () => {
  return (
    <>
    <div className='labsuccess_pharmasuccess_hero'>
         
         <div className='labsuccess_pharmasuccess_adddha_success_1'>
        
             <div className='labsuccess_pharmasuccess_adddha_success_box_1'>
                 <div className='labsuccess_pharmasuccess_adddha_success_box_logo_1'>
                     <img src={Done} alt="" />
 
                 </div>
                 <div className='labsuccess_pharmasuccess_adddha_success_box_para_1'>
                     <h4 className='labsuccess_pharmasuccess_adddha_success_box_head'>Successful</h4>
                     <p className='labsuccess_pharmasuccess_adddha_success_box_pi'>DHA (Dooper Health Assistance) is Added successfully.</p>
 
                 </div>
                    <Link to={"/pharmamedicine"}>
                 <button className='labsuccess_pharmasuccess_adddha_success_box_btn_1'>Continue</button>
                 </Link>
 
             </div>
             
         </div>
         
     </div>
    </>
  )
}
export default Addlabsuccess
