import React from 'react';
import './Adddoctorsuccess.css';
import Done from "../Assets/Done.svg";
import { Link } from "react-router-dom";


export const Adddoctorsuccess = () => {
  return (
    <>
        <div className='hero_1'>
        <div className='adddoctor_success_1'>
            <div className='adddoctor_success_box_1'>
                <div className='adddoctor_success_box_logo_1'>
                    <img src={Done} alt="" />

                </div>
                <div className='adddoctor_success_box_para_1'>
                    <h4 className='adddoctor_success_box_head'>Successful</h4>
                    <p className='adddoctor_success_box_pi'>Your account is created successfully.</p>

                </div>
                <Link to={"/doctormanagement"}>
                <button className='adddoctor_success_box_btn_1'>Continue</button>
                </Link>

            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Adddoctorsuccess
