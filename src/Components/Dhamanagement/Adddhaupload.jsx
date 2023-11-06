import React from 'react';
import './Adddhaupload.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";


export const Adddhaupload = () => {
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
                <div> <h2>Upload Documents</h2></div>
            <form action="" className='adddha_form'>
                
                <div className='adddha_form_fill'>
                    <div className='adddha_form_fill_div'><label className='adddha_form_fill_labi'>Aadhar Card</label></div><br />
                    <input type="file" id="adddha_file"className='adddha_form_fill_inp_3' />
                    <label for="adddha_file" className='adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='adddha_form_fill'>
                    <div className='adddha_form_fill_div'><label className='adddha_form_fill_labi'>Pan Card</label></div><br />
                    <input type="file" id="adddha_file"className='adddha_form_fill_inp_3' />
                    <label for="adddha_file" className='adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='adddha_form_fill'>
                    <div className='adddha_form_fill_div'><label className='adddha_form_fill_labi'>Lab RMC Medical Counsel Certificate</label></div><br />
                    <input type="file" id="adddha_file"className='adddha_form_fill_inp_3' />
                    <label for="adddha_file" className='adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
               
                <Link to={"/adddhabank"} className='adddhabank_link'> 
                <button className='adddha_btn'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}
export default Adddhaupload 

