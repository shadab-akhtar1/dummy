import React from 'react';
import './Adddha.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";

export const Adddha = () => {
  return (
    <div className='hero'>
        <div className='adddha_add'>
            <div className='adddha_header_add'>
                <div className='adddha_header_bar_add'>
                    <span className='adddha_header_bar_1_add'>1</span>
                    <span className='adddha_header_bar_2_add'>2</span>
                    <span className='adddha_header_bar_3_add'>3</span>
                </div>

            </div>
            <div className='adddha_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='adddha_form_add'>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Name</label>
                    <input  type="text" className='adddha_form_fill_inp_add'/>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Gender</label>
                    <input type="text" className='adddha_form_fill_inp_add'/>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Mobile</label>
                    <input type="text" className='adddha_form_fill_inp_add' />
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Address</label>
                    <input type="text" className='adddha_form_fill_inp_add'/><br />
                    <input type="text" className='adddha_form_fill_inp_add'/><br />
                    <input type="text" className='adddha_form_fill_inp_add'/><br />
                    <input type="text" className='adddha_form_fill_inp_add'/>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Qualification</label>
                    <input type="text" className='adddha_form_fill_inp_add'/>
                </div>
                <Link to={"/adddhaupload"} className='adddhaupload_link'> 
                <button className='adddha_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}
export default Adddha 

