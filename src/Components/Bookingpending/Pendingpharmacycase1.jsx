import React,{useState} from 'react';
import './Pendingpharmacycase1.css';
import Navbars from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpicimg from "../Assets/Ellipse 2 (1).jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';
import { IoCheckmark } from "react-icons/io5";
import {RiUploadCloudLine} from "react-icons/ri";

export const Pendingpharmacycase1 = () => {
    const [med, setMed] = useState(false);

  const toggleMed = () => {
    setMed(!med);
  };

  if(med) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <div><Navbars/></div>
    <div className='pharmacycase1bookingcase_middle_container_dha_case_details'>
      <div className='pharmacycase1bookingcase_middle_container_heading_dha_case_details'>
        <div className='pharmacycase1bookingcase_middle_container_heading_1_dha_case_details'>
            <Link to={"/pendingpharmacy"} className='pendingpharmacycase1_link'>
            <div className='pharmacycase1bookingcase_arr_div'>< PiArrowLeftFill className='pharmacycase1bookingcase_details_arrow_case_dha'/></div>
            </Link>
          <h2># 123456</h2>
        </div>
       </div>

            <div className='pharmacycase1bookingcase_third_container_dha_case_details'>
                <div className='pharmacycase1bookingcase_third_container_left_dha_case_details'>
                    <div className='pharmacycase1bookingcase_dha_case_details_userprofile'>
                        <div className='pharmacycase1bookingcase_dha_case_details_userprofile_left'>
                        <div className='pharmacycase1bookingcase_dha_case_details_userprofile_profile'>
                            <img src={userpicimg} alt="userimage" />
                        </div>
                        <div className='pharmacycase1bookingcase_dha_case_details_userprofile_info'>
                            <ul>
                                <li className='pharmacycase1bookingcase_dha_li_1_case'>Patient Name</li>
                                <li className='pharmacycase1bookingcase_dha_li_2_case'>xyz,street name</li>
                                <li className='pharmacycase1bookingcase_dha_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='pharmacycase1bookingcase_dha_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                        </div>
                        <div className='pharmacycase1bookingcase_dha_case_details_userprofile_info_2'>
                            <div className='pharmacycase1bookingcase_dha_case_details_userprofile_info_2_1'><FaPhoneAlt className='pharmacycase1bookingcase_dha_case_details_userprofile_info_2_1_icon'/></div>
                            <div className='pharmacycase1bookingcase_dha_case_details_userprofile_info_2_2'><HiLocationMarker className='pharmacycase1bookingcase_dha_case_details_userprofile_info_2_1_icon1'/></div>

                        </div>
                        
                    </div>
                    
                    <div className='pharmacycase1bookingcase_dha_case_detail_symptom'>
                        <div className='pharmacycase1bookingcase_dha_case_deatil_symptom_1'>
                            <div className='pharmacycase1bookingcase_dha_case_detail_symptom_left'>
                                <div className='pharmacycase1bookingcase_dha_case_detail_symptom_left_1'>Vaccine 1</div>
                                <div className='pharmacycase1bookingcase_dha_case_detail_symptom_left_1'>Vaccine 2</div>
                                <div className='pharmacycase1bookingcase_dha_case_detail_symptom_left_1'>Vaccine 3</div>
                            </div>
                            <div className='pharmacycase1bookingcase_dha_case_detail_symptom_right'>
                                <Link to={"/pendingaddquotation3"} className='pendingpharmacycase1_link'>
                                <button>View Prescription</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className='pharmacycase1bookingcase_dha_case_detail_complet'>
                        <div className='pharmacycase1bookingcase_dha_case_detail_completion'><p>Need</p></div>
                        <div className='pharmacycase1bookingcase_dha_case_detail_time'>
                
                            <p className='pharmacycase1bookingcase_dha_case_detail_time_1'><PiCalendarBlankLight className='pharmacycase1bookingcase_calen'/>13 june,2023</p>
                            <p className='pharmacycase1bookingcase_dha_case_detail_time_2'><CiClock2 className='pharmacycase1bookingcase_dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>


                    

                    <div className='pendingpharmacycase1_last_div_btn'><button onClick={toggleMed}>Add Quotation</button></div>
                    {med && (
                                                <div className="pharmacy_modal_doctor">
                                                        <div onClick={toggleMed} className="pharmacy_overlay_doctor"></div>
                                                        <div className="pharmacy_modal_content_doctor">
        
                                                            <div className='popup_pharma_div'>
                                                                <div className='popup_pharma_div_2'>Add Quotation</div>
                                                                <form action="">
                                                                    <div className='pharmacy_case_addlab_labupload_pharmaupload_adddha_form_fill'>
                                                                        <div className='pharmacy_case_addlab_labupload_pharmaupload_adddha_form_fill_div'><label className='pharmacy_case_addlab_labupload_pharmaupload_adddha_form_fill_labi'>Lab Photo</label></div><br />
                                                                            <input type="file" id="pharmacy_case_addlab_labupload_pharmaupload_adddha_file"className='pharmacy_case_addlab_labupload_pharmaupload_adddha_form_fill_inp_3' />
                                                                            <label for="pharmacy_case_addlab_labupload_pharmaupload_adddha_file" className='pharmacy_case_addlab_labupload_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                                                                    </div>
                                                                    <div className='popup_pharma_div_1'>
                                                                        <label htmlFor="" className='popup_pharma_div_1_label'>price</label>
                                                                        <input type="text" placeholder='Enter Price' className='popup_pharma_div_1_input'/>
                                                                    </div>
                                                                    <div className='popup_pharma_div_1'>
                                                                        <label htmlFor="" className='popup_pharma_div_1_label'>Discount</label>
                                                                        <input type="text" placeholder='Enter Discount' className='popup_pharma_div_1_input'/>
                                                                    </div>
                                                                    <div className='popup_pharma_div_1'>
                                                                        <Link to={"/pendingaddquotation2"} className='pendingpharmacycase1_link'>
                                                                        <button>Send</button>
                                                                        </Link>
                                                                    </div>
                                                                </form>

                                                            </div>
                                                            <button className="pharmacy_close_modal_doctor" onClick={toggleMed}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}
                
                </div>
                

            </div>
            
    </div>
    <div className='bookingdhacase_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Pendingpharmacycase1
