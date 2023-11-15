import React from 'react';
import './Dhadetailsview.css';
import {Navbar} from './Navbar';
import profile_logo from '../Assets/Ellipse 2.svg';

import {FaGreaterThan} from 'react-icons/fa6';
import {PiArrowLeftFill} from 'react-icons/pi';
import {BiChevronDown} from 'react-icons/bi';
import {IoCallOutline} from 'react-icons/io5';
import {FaLessThan} from 'react-icons/fa6';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {Link} from 'react-router-dom';

export const Dhadetailsview = () => {
  return (
    <div>
    <div className='management_navbar'><Navbar/></div>
    <div className='middle_container'>
      <div className='middle_container_heading'>
        <div className='middle_container_heading_box'>
          <h2> <Link to={"/dharequest"} className='detailsview_link'>< PiArrowLeftFill className='details_arrow'/></Link>DHA Details</h2>
        </div>
        <Link to={"/dhadetailsedit"}>
        <button className='middle_container_btn'>Edit</button>
        </Link>
        <Link to={"/blockdha"}>
        <button className='middle_container_btn1'>Block</button>
        </Link>

      </div>

      <div className='middle2'>
        <div className='middle2_profile'>
          <img src={profile_logo} alt="profile" />
          <div className='middle2_profile_name'>Jacob Jones <span>Psychlogist</span></div>
          <div className='middle2_profile_status'>237 <p>Completed Cases</p></div>
        </div>
        <div className='middle2_box'>Rs 5000 <p>Total Earnings</p></div>
        <div className='middle2_boxes'>Rs 3000 <p>This Months Earnings</p></div>
        <div className='middle2_boxer'>Rs 2000 <p>Total Reedemeed</p></div>
        <div className='middle2_boxex'><div className='calling'>< IoCallOutline /></div>Call DHA</div>
      </div>
      <div className='middle3'>
      <div className='Container'>
        <h4>Basic Details</h4>
                <form className='container_input'>
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
                <form className='container_input'>
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
                <form className='container_input'>
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
        <div className='last'>
          <div className='last_last_last'>
          <div className='last_one'>
            <div className='last_one_left'>Past Cases</div>
              <ul className='last_two_right'>
                <li className='last_two_right_page'>Page</li>
                <li className='last_two_right_1'>1 < BiChevronDown className='drip'/></li>
                <li className='last_two_right_low'>of 10</li>
              </ul>

              
          </div>
          <div className='last_one_last'>
            <div className='last_one_last_1'>
              <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <Link to={"/dhacasedetail"}>
                <div className='view_details'>View Details</div>
                </Link>
              </ul>
            </div>
            <div className='last_one_last_1'>
            <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='view_details'>View Details</div>
              </ul>
            </div>
            <div className='last_one_last_1'>
            <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='view_details'>View Details</div>
              </ul>
            </div>
            <div className='last_one_last_1'>
            <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='view_details'>View Details</div>
              </ul>
            </div>

            
            <div>
            <div className='pagination_pag'>
                    <a href=''>< PiCaretDoubleLeftBold className='less_pag-1'/></a>
                    <a href=''><FaLessThan className='less_pag'/></a>
                    <a href=''className='anchi_pag_active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< FaGreaterThan className='less_pag'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='les_pag'/></a>

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
                    <a href='' className='anchi_pag'><PiCaretDoubleLeftBold className='less_1_pag'/></a>
                    <a href='' className='anchi_pag'><FaLessThan className='less_pag'/></a>
                    <a href=''className='anchi_pag_active'>1</a>
                    <a href='' className='anchi_pag'>2</a>
                    <a href='' className='anchi_pag'>3</a>
                    <a href='' className='anchi_pag'>...</a>
                    <a href='' className='anchi_pag'>10</a>
                    <a href='' className='anchi_pag'><FaGreaterThan className='less_pag'/></a>
                    <a href='' className='anchi_pag'><PiCaretDoubleRightBold className='less_pag'/></a>

                </div>
                </div>

          </div>
          </div>
          
          </div>
    </div>
    </div>
  )
}
export default Dhadetailsview
