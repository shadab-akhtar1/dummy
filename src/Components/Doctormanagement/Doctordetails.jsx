import React from 'react';
import './Doctordetails.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Footer} from '../Dhamanagement/Footer';
import profile_logo from '../Assets/Ellipse 2.svg';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {FaGreaterThan} from 'react-icons/fa6';
import {BiArrowBack} from 'react-icons/bi';
import {BiChevronDown} from 'react-icons/bi';
import {IoCallOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom';

export const Doctordetails = () => {
  return (
    <>
    <div className='management_doctor_details'><Navbar/></div>
    <div className='middle_container_doctor_details'>
      <div className='middle_container_heading_doctor_details'>
        <div className='middle_container_heading_1_doctor_details'>
          <h2>< BiArrowBack className='details_arrow'/>Doctor Details</h2>
        </div>
        <Link to={"/dhadetailsedit"}>
        <button className='middle_container_btn_doctor_details'>Edit</button>
        </Link>
        <button className='middle_container_btn1_doctor_details'>Block</button>

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
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>

                <div className='inputs_data'>
                <label >Gender :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >Mobile No. :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >Address :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >City :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >State :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >Qualification :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >Speciality :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                </form>
                </div>

                <div className='Container'>
        <h4>Documents</h4>
                <form className='container_doctor_details_input'>
              <div className='inputs_data'>
              <label >Aadhar Card :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>

                <div className='inputs_data'>
                <label >Pan card :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >Medical Council Certificate :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
            
                </form>
                </div>
        

                <div className='Container'>
        <h4>Bank Info</h4>
                <form className='container_doctor_details_input'>
              <div className='inputs_data'>
              <label >Bank Name :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
               
                </div>

                <div className='inputs_data'>
                <label >Acc No. :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
                </div>
                <div className='inputs_data'>
                <label >IFSC :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
               
                </div>
                <div className='inputs_data'>
                <label >Cancel checque :</label>
                <input 
                  type="name"
              
                  name="name"
                  autoComplete="off"
                  required
                />
                
        
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
                    <a href=''><FaLessThan className='arr_doctor'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< FaGreaterThan className='arr_doctor'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='arr_doctor'/></a>

                </div>
                </div>
          </div>
          
          </div>
          
          

          
          <div className='last_last'>
          <div className='last_one'>
            <div className='last_one_left'>Transaction History</div>
              <div className='last_two_right'>
                <div className='last_two_right_page'>Page</div>
                <div className='last_two_right_1'>1 < BiChevronDown className='drip'/></div>
                <div className='last_two_right_low'>of 10</div>
                
                
              </div>
              

              
          </div>
          <p className='deta'>View Account Details</p>
          <div className='last_one_last'>
            <div className='last_one_last_1'>
              <ul>
                <li>Home Care #1234</li>
      
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='last_one_last_1'>
            <ul>
                <li>Transaction #1234</li>
            
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='last_one_last_1'>
            <ul>
                <li>Home care #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='last_one_last_1'>
            <ul>
                <li>Transaction #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
              
              </ul>
            </div>

            <div className='last_one_last_1'>
            <ul>
                <li>Home Care #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
              
              </ul>
            </div>

            <div>
            <div className='pagination_pag'>
            <a href=''>< PiCaretDoubleLeftBold className='arr'/></a>
                    <a href=''><FaLessThan className='arr'/></a>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< FaGreaterThan className='arr'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='arr'/></a>

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
