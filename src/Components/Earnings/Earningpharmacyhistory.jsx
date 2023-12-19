import React from 'react';
import './Earningpharmacyhistory.css';
import Navbars from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import profile_logo from '../Assets/Ellipse 2.svg';
import {IoCallOutline} from 'react-icons/io5';
import { HiChevronUpDown } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {BiChevronDown} from 'react-icons/bi';
import { IoCheckmark } from "react-icons/io5";

export const Earningpharmacyhistory = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_basic'>
        <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading_basic'><h2><Link to={"/profile"} className='earninghistory_earning_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='earninghistory_earning_profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>My Earnings</h2></div>
        <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading2_basic_base_pharmacyhistory'>
            <Link to={"/earning" } className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_document_basic_pharmacyhistory'>
            <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading2_basic_2_pharmacyhistory'>All</div>
            </Link>
            <Link to={"/earningdha" } className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_document_basic_pharmacyhistory'>
            <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading2_document_basic_pharmacyhistory'>DHA</div>
            </Link>
            <Link to={"/earningdoctor" } className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_document_basic_pharmacyhistory'>
            <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading2_info_basic_1_pharmacyhistory'>Doctor</div>
            </Link>
            
            <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading2_info_basic_2_pharmacyhistory'>Pharmacy</div>
            
            <Link to={"/earninglab" } className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_document_basic_pharmacyhistory'>
            <div className='earninghistory_earning_profile_documnet_labdetailedit_pharma_edit_heading2_info_basic_3_pharmacyhistory'>Lab</div>
            </Link>
        </div>
        <div className='earninghistory_earning_labdetails_pharma_detail2'>
        <div className='earninghistory_earning_labdetails_pharma_detail2_profile'>
        
          <div className='earninghistory_earning_labdetails_pharma_detail2_profile_name'>Doctors </div>
          
        </div>
        <div className='earninghistory_earning_labdetails_pharma_detail2_box'>786544<p>Total Cases</p></div>
        <div className='earninghistory_earning_labdetails_pharma_detail2_box'>Rs 5000 <p>Total Earnings</p></div>
        <div className='earninghistory_earning_labdetails_pharma_detail2_boxes'>Rs 3000 <p>This Months Earnings</p></div>
        <div className='earninghistory_earning_labdetails_pharma_detail2_boxer'>Rs 2000 <p>Total Reedemeed</p></div>
        
      </div>
      <div className='earninghistory_container_4'>
        <div className='earninghistory_container_4_1'>
            <input type="text" name="" id=""placeholder='Amount'/>
        </div>
        <div className='earninghistory_container_4_2'>
            <button>Withdraw money</button>
        </div>
      </div>
      <div className='earninghistory_earning_container_3'>
        <div className='earninghistory_earning_container_3_1'>
          <Link to={"/earningpharmacy"} className='earning_link'>
            <div className='earninghistory_earning_container_3_1_left'>History</div>
            </Link>
            <div className='earninghistory_earning_container_3_1_right'>Withdrawls</div>
        </div>
        <div className='earninghistory_earning_container_3_2'>
            <div className='earninghistory_earning_3_2_first'>sort by <HiChevronUpDown/></div>
            <div className='earninghistory_earning_3_2_right'>
                <div className='earninghistory_earning_3_2_second'>page</div>
                <div className='earninghistory_earning_3_2_third'>1 <MdOutlineKeyboardArrowDown/></div>
                <div className='earninghistory_earning_3_2_fourth'>of 10</div>
            </div>

        </div>
      </div>

      <div className='earninghistory_labdetails_pharma_detail3_last'>
          <div className='earninghistory_labdetails_pharma_detail3_last_last_last'>
          <div className='earninghistory_labdetails_pharma_detail3_last_one'>
            

              
          </div>
          <div className='earninghistory_labdetails_pharma_detail3_last_one_last'>
            <div className='earninghistory_labdetails_pharma_detail3_last_one_last_1'>
              <ul>
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li'>Transction #1234</li>
                
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li_1'>16 june 2023</li>
              </ul>
              <ul>
                <li><button className='earninghistory_labdetails_pharma_detail3_last_one_last_1_button'>RS 500</button></li>
                <Link to={""}>
                
                </Link>
              </ul>
            </div>
            <div className='earninghistory_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li'>Transction #1234</li>
            
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li_1'>16 june 2023</li>
              </ul>
              <ul>
                <li><button className='earninghistory_labdetails_pharma_detail3_last_one_last_1_button'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earninghistory_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li'>Transction #1234</li>
                
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li_1'>16 june 2023</li>
              </ul>
              <ul>
                <li><button className='earninghistory_labdetails_pharma_detail3_last_one_last_1_button'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earninghistory_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li'>Transction #1234</li>
                
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li_1'>16 june 2023</li>
              </ul>
              <ul>
                <li><button className='earninghistory_labdetails_pharma_detail3_last_one_last_1_button'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earninghistory_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li'>Transction #1234</li>
                
                <li className='earninghistory_labdetails_pharma_detail3_last_one_last_1_li_1'>16 june 2023</li>
              </ul>
              <ul>
                <li><button className='earninghistory_labdetails_pharma_detail3_last_one_last_1_button'>RS 500</button></li>
                
              </ul>
            </div>

            
            <div>
            <div className='earninghistory_labdetails_pharma_detail3_pagination_pag'>
                    <a href=''>< PiCaretDoubleLeftBold className='earninghistory_labdetails_pharma_detail3_less_pag-1'/></a>
                    <a href=''><PiCaretLeftBold className='earninghistory_labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''className='earninghistory_labdetails_pharma_detail3_anchi_pag_active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< PiCaretRightBold className='earninghistory_labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='earninghistory_labdetails_pharma_detail3_les_pag'/></a>

                </div>
                </div>
          </div>
          
          </div>
          
          

          
          <div className='earninghistory_labdetails_pharma_detail3_last_last'>
          
          
          <div className='earninghistory_labdetails_pharma_detail3_last_one_last_right'>
            <div className='earninghistory_right_lastdiv'>Withdrawal Status</div>

            <div className='earninghistory_right_lastdiv_2'>
                <div className='earninghistory_right_lastdiv_2_left'>
                    <div className='earninghistory_right_lastdiv_2_left_1'>Withdrawal #1234</div>
                    <div className='earninghistory_right_lastdiv_2_left_2'>RS 5000</div>
                    <div className='earninghistory_right_lastdiv_2_left_3'>16,June 2023</div>
                </div>
                <div className='earninghistory_right_lastdiv_2_right'>
                    <button>Pending</button>
                </div>
            </div>

            

            <div className='earninghistory_right_lastdiv_3'>
                <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para'>
                        <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_left'>
                            <div className='earninghistory_lab_progress'>
                              <span className='earninghistory_lab_indicator'></span>
                            </div>
                        
                            <div className='earninghistory_lab_pharmabooking_doctor_case_detail_container_1'><div><IoCheckmark className='earninghistory_lab_pharmabooking_doctor_check_mark' /></div></div>
                            <div className='earninghistory_lab_pharmabooking_doctor_case_detail_container_4'><div><IoCheckmark className='earninghistory_lab_pharmabooking_doctor_check_mark' /></div></div>
                            
                            <div className='earninghistory_lab_pharmabooking_doctor_case_detail_container_2'>04</div>
                            <div className='earninghistory_lab_pharmabooking_doctor_case_detail_container_3'>03</div>
                            
                            
                    
                        </div>
                       
                    <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right'>

                        <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Lab Test Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Lab Test Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Service Started</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='earninghistory_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Completed</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            
            
            

           

            <div>
            
                </div>

          </div>
          </div>
        </div>
    </div>
    </>
  )
}
export default Earningpharmacyhistory