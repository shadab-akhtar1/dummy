import React from 'react';
import './Earningdoctor.css';
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

export const Earningdoctor = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='earning_profile_documnet_labdetailedit_pharma_edit_basic'>
        <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading_basic'><h2><Link to={"/profile"} className='earning_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='earning_profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>My Earnings</h2></div>
        <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading2_basic_base_doctor'>
            <Link to={"/earning" } className='earning_profile_documnet_labdetailedit_pharma_edit_document_basic_doctor'>
            <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading2_basic_2_doctor'>All</div>
            </Link>
            <Link to={"/earningdha" } className='earning_profile_documnet_labdetailedit_pharma_edit_document_basic_doctor'>
            <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading2_document_basic_doctor'>DHA</div>
            </Link>
            <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading2_info_basic_1_doctor'>Doctor</div>
            <Link to={"/earningpharmacy" } className='earning_profile_documnet_labdetailedit_pharma_edit_document_basic_doctor'>
            <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading2_info_basic_2_doctor'>Pharmacy</div>
            </Link>
            <Link to={"/earninglab" } className='earning_profile_documnet_labdetailedit_pharma_edit_document_basic_doctor'>
            <div className='earning_profile_documnet_labdetailedit_pharma_edit_heading2_info_basic_3_doctor'>Lab</div>
            </Link>
        </div>
        <div className='earning_labdetails_pharma_detail2'>
        <div className='earning_labdetails_pharma_detail2_profile'>
          <img src={profile_logo} alt="profile" />
          <div className='earning_labdetails_pharma_detail2_profile_name'>Hospital Name <p>Location</p></div>
          
        </div>
        <div className='earning_labdetails_pharma_detail2_box'>786544<p>Total Cases</p></div>
        <div className='earning_labdetails_pharma_detail2_box'>Rs 500000 <p>Total Earnings</p></div>
        <div className='earning_labdetails_pharma_detail2_boxes'>Rs 300000 <p>This Months Earnings</p></div>
        <div className='earning_labdetails_pharma_detail2_boxer'>Rs 200000 <p>Total Reedemeed</p></div>
        
      </div>
      <div className='earning_container_3'>
        <div className='earning_container_3_1'>
            <div className='earning_container_3_1_left'>History</div>
            <Link to={"/earningdoctorhistory"} className='earning_link'>
            <div className='earning_container_3_1_right'>Withdrawls</div>
            </Link>
        </div>
        <div className='earning_container_3_2'>
            <div className='earning_3_2_first'>sort by <HiChevronUpDown/></div>
            <div className='earning_3_2_right'>
                <div className='earning_3_2_second'>page</div>
                <div className='earning_3_2_third'>1 <MdOutlineKeyboardArrowDown/></div>
                <div className='earning_3_2_fourth'>of 10</div>
            </div>

        </div>
      </div>

      <div className='earning_labdetails_pharma_detail3_last_one_last'>
            <div className='earning_labdetails_pharma_detail3_last_one_last_1'>
              <ul>
                <li className='earning_labdetails_pharma_detail3_last_one_last_1_li'>#12345</li>
                <li className='earning_labdetails_pharma_detail3_last_one_last_1_li'>Patient Name</li>
                <li className='earning_labdetails_last_li'>16 june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earning_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>#12345</li>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>Patient Name</li>
                <li className='earning_labdetails_last_li'>16 june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earning_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>#12345</li>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>Patient name</li>
                <li className='earning_labdetails_last_li'>16 june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earning_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>#12345</li>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>Patient name</li>
                <li className='earning_labdetails_last_li'>16 june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='earning_labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>#12345</li>
                <li  className='earning_labdetails_pharma_detail3_last_one_last_1_li'>Patient name</li>
                <li className='earning_labdetails_last_li'>16 june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>

            
            <div>
            <div className='earning_labdetails_pharma_detail3_pagination_pag'>
                    <a href=''>< PiCaretDoubleLeftBold className='earning_labdetails_pharma_detail3_less_pag-1'/></a>
                    <a href=''><PiCaretLeftBold className='earning_labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''className='earning_labdetails_pharma_detail3_anchi_pag_active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< PiCaretRightBold className='earning_labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='earning_labdetails_pharma_detail3_les_pag'/></a>

                </div>
                </div>
          </div>

    </div>
    </>
  )
}
export default Earningdoctor