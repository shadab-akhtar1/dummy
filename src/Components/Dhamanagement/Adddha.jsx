import React from 'react';
import './Adddha.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";

export const Adddha = () => {
  return (
    <div className='hero'>
        <div className='adddha'>
            <div className='adddha_header'>
                <div className='adddha_header_bar'>
                    <span className='adddha_header_bar_1'>1</span>
                    <span className='adddha_header_bar_2'>2</span>
                    <span className='adddha_header_bar_3'>3</span>
                </div>

            </div>
            <div className='adddha_mid'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='adddha_form'>
                <div className='adddha_form_fill'>
                    <label className='adddha_form_fill_labi'>Name</label>
                    <input  type="text" className='adddha_form_fill_inp'/>
                </div>
                <div className='adddha_form_fill'>
                    <label className='adddha_form_fill_labi'>Gender</label>
                    <input type="text" className='adddha_form_fill_inp'/>
                </div>
                <div className='adddha_form_fill'>
                    <label className='adddha_form_fill_labi'>Mobile</label>
                    <input type="text" className='adddha_form_fill_inp' />
                </div>
                <div className='adddha_form_fill'>
                    <label className='adddha_form_fill_labi'>Address</label>
                    <input type="text" className='adddha_form_fill_inp'/><br />
                    <input type="text" className='adddha_form_fill_inp'/><br />
                    <input type="text" className='adddha_form_fill_inp'/><br />
                    <input type="text" className='adddha_form_fill_inp'/>
                </div>
                <div className='adddha_form_fill'>
                    <label className='adddha_form_fill_labi'>Qualification</label>
                    <input type="text" className='adddha_form_fill_inp'/>
                </div>
                <Link to={"/adddhaupload"} className='adddhaupload_link'> 
                <button className='adddha_btn'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}
export default Adddha 

