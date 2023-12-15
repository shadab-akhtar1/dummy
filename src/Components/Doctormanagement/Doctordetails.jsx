import React from 'react';
import './Doctordetails.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Footer} from '../Dhamanagement/Footer';
import profile_logo from '../Assets/Ellipse 2.svg';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {FaGreaterThan} from 'react-icons/fa6';
import {BiChevronDown} from 'react-icons/bi';
import {IoCallOutline} from 'react-icons/io5';
import {PiArrowLeftFill} from 'react-icons/pi';
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";

export const Doctordetails = () => {
  return (
    <>
    <div className='management_doctor_details'><Navbar/></div>
    <div className='middle_container_doctor_details'>
      <div className='middle_container_heading_doctor_details'>
        <div className='middle_container_heading_1_doctor_details'>
          <h2><Link to={"/doctorrequests"}>< PiArrowLeftFill className='doctor_details_arrow'/></Link>Doctor Details</h2>
        </div>
        <div className='middle_container_doctor_detail_button'>
        <Link to={"/doctordetailsbasic"}>
        <button className='middle_container_btn_doctor_details'><AiOutlineEdit className='middle_container_btn_doctor_icon1'/>Edit</button>
        </Link>
        <Link to={"/blockdoctor"}>
        <button className='middle_container_btn1_doctor_details'><AiOutlineEdit className='middle_container_btn_doctor_icon'/>Block</button>
        </Link>
        </div>

      </div>

      <div className='middle2_doctor_details'>
        <div className='middle2_doctor_details_profile'>
          <img src={profile_logo} alt="profile" />
          <div className='middle2_doctor_details_profile_name'>Jacob Jones <span>Psychlogist</span></div>
          <div className='middle2_doctor_details_profile_status'>237 <p>Completed Cases</p></div>
        </div>
        <div className='middle2_box_doctor_details'>Rs 5000 <p>Total Earnings</p></div>
        <div className='middle2_boxes_doctor_details'>Rs 3000 <p>This Months Earnings</p></div>
        <div className='middle2_boxer_doctor_details'>Rs 2000 <p>Total Reedemeed</p></div>
        <div className='middle2_boxex_doctor_details'>< IoCallOutline className='calling_doctor_details'/>Call Doctor</div>
      </div>
      <div className='middle3_doctor_details'>
      <div className='Container_doctor_details'>
        <h4>Basic Details</h4>
                <form className='container_doctor_details_input'>
              <div className='inputs_data'>
              <label >Full Name :</label>
                <input 
                  type="text" placeholder='Jaydip Sakhiya' className='inputs_doctor_letter'
                />
                
                </div>

                <div className='inputs_data'>
                <label >Gender :</label>
                <input 
                  type="text" placeholder='Male' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >Mobile No. :</label>
                <input 
                  type="number" placeholder='+91 098765321' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >Address :</label>
                <input 
                  type="text" placeholder='2800 Oakwood Avenue, New York, NY 10018' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >City :</label>
                <input 
                  type="text" placeholder='Surat' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >State :</label>
                <input 
                  type="text" placeholder='Gujarat' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >Qualification :</label>
                <input 
                  type="text" placeholder='MBBS' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >Speciality :</label>
                <input 
                  type="text" placeholder='DHA' className='inputs_doctor_letter'
                />
                
                </div>
                </form>
                </div>

                <div className='Container'>
        <h4>Documents</h4>
                <form className='container_doctor_details_input'>
              <div className='inputs_data'>
              <label >Aadhar Card :</label>
                <div className='inputs_doctor_view'> View</div>
                
                </div>

                <div className='inputs_data'>
                <label >Pan card :</label>
                <div className='inputs_doctor_view'>View</div>
                
                </div>
                <div className='inputs_data'>
                <label >Medical Council Certificate :</label>
                <div className='inputs_doctor_view'>View</div>
                
                </div>
            
                </form>
                </div>
        

                <div className='Container'>
        <h4>Bank Info</h4>
                <form className='container_doctor_details_input'>
              <div className='inputs_data'>
              <label >Bank Name :</label>
                <input 
                  type="text" placeholder='Bank Name' className='inputs_doctor_letter'
                />
               
                </div>

                <div className='inputs_data'>
                <label >Acc No. :</label>
                <input 
                  type="text" placeholder='1234567890' className='inputs_doctor_letter'
                />
                
                </div>
                <div className='inputs_data'>
                <label >IFSC :</label>
                <input 
                  type="text" placeholder='ABCDEF' className='inputs_doctor_letter'
                />
               
                </div>
                <div className='inputs_data'>
                <label >Cancel checque :</label>
                <div className='inputs_doctor_view_letter'>View</div>
                
        
                </div>
                </form>
                </div>
        
      </div>
        <div className='last_doctor_details'>
          <div className='last_last_last_doctor_details'>
          <div className='last_one_doctor_details'>
            <div className='last_one_left_doctor_details'>Past Cases</div>
              <ul className='last_two_right_doctor_details'>
                <li className='last_two_right_page_doctor_details'>Page</li>
                <li className='last_two_right_1_doctor_details'>1 < BiChevronDown className='drip_doctor_details'/></li>
                <li className='last_two_right_low_doctor_details'>of 10</li>
              </ul>

              
          </div>
          <div className='last_one_last_doctor_details'>
            <div className='last_one_last_1_doctor_details'>
              <ul>
                <li>Patient's Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <Link to={"/doctorcasedetail"}>
                <div className='view_details_doctor'>View Details</div>
                </Link>
              </ul>
            </div>
            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Patient's Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='view_details_doctor'>View Details</div>
              </ul>
            </div>
            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Patient's Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='view_details_doctor'>View Details</div>
              </ul>
            </div>
            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Patient's Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='view_details_doctor'>View Details</div>
              </ul>
            </div>

            
            <div>
            <div className='pagination_pag_doctor'>
                    <a href=''>< PiCaretDoubleLeftBold className='arr_doctor'/></a>
                    <a href=''><PiCaretLeftBold className='arr_doctor'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< PiCaretRightBold className='arr_doctor'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='arr_doctor'/></a>

                </div>
                </div>
          </div>
          
          </div>
          
          

          
          <div className='last_last_doctor_details'>
          <div className='last_one_doctor_details_2'>
            <div className='last_one_left_doctor_details'>Transaction History</div>
              <div className='last_two_right_doctor_details'>
                <div className='last_two_right_page_doctor_details'>Page</div>
                <div className='last_two_right_1_doctor_details'>1 < BiChevronDown className='drip_doctor_details'/></div>
                <div className='last_two_right_low_doctor_details'>of 10</div>
                
                
              </div>
              

              
          </div>
          <span className='deta_doctor'>View Account Details</span>
          <div className='last_one_last_doctor_details'>
            <div className='last_one_last_1_doctor_details'>
              <ul>
                <li>Home Care #1234</li>
      
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Transaction #1234</li>
            
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Home care #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Transaction #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
              
              </ul>
            </div>

            <div className='last_one_last_1_doctor_details'>
            <ul>
                <li>Home Care #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
              
              </ul>
            </div>

            <div>
            <div className='pagination_pag_doctor'>
            <a href=''>< PiCaretDoubleLeftBold className='arr'/></a>
                    <a href=''><PiCaretLeftBold className='arr_doctor'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< PiCaretRightBold className='arr_doctor'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='arr_doctor'/></a>

                </div>
                </div>

          </div>
          </div>
          
          </div>
    </div>
    <div className='footer_dha_doctor_details'><Footer/></div>
    </>
  )
}

export default Doctordetails
