import React from 'react';
import './Labdetailbank.css';
import {Navbar} from '../Dhamanagement/Navbar';
import userprofile from '../Assets/Avatar.svg';
import {Link} from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import {PiArrowLeftFill} from 'react-icons/pi';

export const Labdetailbank = () => {
  return (
    <>
    <div className='labbank_pharma_navbar_bankinfo'><Navbar/></div>
    <div className='labbank_pharma_edit_bankinfo'>
        <div className='labbank_pharma_edit_bankinfo_heading'><h2><Link to={"/labdetaildocument"} className='labbank_pharma_bankinfo_link_head'><PiArrowLeftFill className='labbank_pharma_arrow_bankinfo'/></Link>Edit Profile</h2></div>
        <div className='labbank_pharma_edit_bankinfo_heading2'>
            <div className='labbank_pharma_edit_bankinfo_heading2_basic'>Basic Details</div>
            <Link to={"/labdetaildocument"} className='labbank_pharma_bankinfo_document'>
            <div className='labbank_pharma_edit_bankinfo_heading2_document'>Documents</div>
            </Link>
            <div className='labbank_pharma_edit_bankinfo_heading2_info'>Bank Info</div>
        </div>

        <div className='labbank_pharma_bankinfo_userprofile'>
            <div className='labbank_pharma_bankinfo_userprofile_box'>
                <div className='labbank_pharma_bankinfo_userprofile_box_2'>
                    
                    <form action="" className='labbank_pharma_bankinfo_userprofile_form'>
                        <div className='labbank_pharma_userprofile_form_input'>
                            <label className='labbank_pharma_bankinfo_form_label'>Bank Name</label><br />
                            <input type="text" className='labbank_pharma_bankinfo_form_data' placeholder='Central Bank'/>
                        </div>
                        <div className='labbank_pharma_userprofile_form_input'>
                            <label className='labbank_pharma_bankinfo_form_label' >Account Number</label><br />
                            <input type="text" className='labbank_pharma_bankinfo_form_data' placeholder='1234567890'/>
                        </div>
                        <div className='labbank_pharma_userprofile_form_input'>
                            <label className='labbank_pharma_bankinfo_form_label'>IFSC Code</label><br />
                            <input type="text" className='labbank_pharma_bankinfo_form_data' placeholder='CBINO4545'/>
                        </div>
                        <div className='labbank_pharma_userprofile_form_input'>
        
                            <label className='labbank_pharma_document_form_label'>Upload bank statement/cancel cheque</label> <br /> <br />
                            <input type="file" id='labbank_pharma_document_form' className='labbank_pharma_bankinfo_form_1'/>
                            <label for="labbank_pharma_document_form" className='labbank_pharma_bankinfo_form_2'>
                            <i className='labbank_pharma_bankinfo_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                    </form>
                    
                </div>
                <Link to={""}>
                <button className='labbank_pharma_bankinfo_save_btn'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    
    </>
  )
}
export default Labdetailbank
