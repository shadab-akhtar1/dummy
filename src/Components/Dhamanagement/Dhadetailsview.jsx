import React,{useState} from 'react';
import './Dhadetailsview.css';
import {Navbar} from './Navbar';
import profile_logo from '../Assets/Ellipse 2.svg';

import {FaGreaterThan} from 'react-icons/fa6';
import {PiArrowLeftFill} from 'react-icons/pi';
import {BiChevronDown} from 'react-icons/bi';
import {IoCallOutline} from 'react-icons/io5';
import aadhar from '../Assets/aadhaar-card-dummy.png';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import pan from '../Assets/pan dummy.png';
import medical from '../Assets/medical dummy.png';
import cheque from '../Assets/cancelled-cheque-1.png';

export const Dhadetailsview = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [popup,setPopup] = useState(false);

  const togglePopup = () =>{
    setPopup(!popup);
  };

  if(popup){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  const [popmed,setPopmed] = useState(false);

  const togglePopmed = () =>{
    setPopmed(!popup);
  };

  if(popmed){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  const [popcancel,setPopcancel] = useState(false);

  const togglePopcancel = () =>{
    setPopcancel(!popup);
  };

  if(popcancel){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
    <div className='management_navbar'><Navbar/></div>
    <div className='middle_container'>
      <div className='middle_container_heading'>
        <div className='middle_container_heading_box'>
          <h2> <Link to={"/dharequest"} className='detailsview_link'>< PiArrowLeftFill className='details_arrow'/></Link>DHA Details</h2>
        </div>
        <Link to={"/dhadetailsedit"}>
        <button className='middle_container_btn'><AiOutlineEdit className='middle_container_btn_icon1'/>Edit</button>
        </Link>
        <Link to={"/blockdha"}>
        <button className='middle_container_btn1'><MdBlockFlipped className='middle_container_btn_icon'/>Block</button>
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
              <input type="text" placeholder='Jaydip Sakhiya' className='inputs_data_letter' />
                
                
                
                </div>

                <div className='inputs_data'>
                <label >Gender :</label>
                <input type="text" placeholder='Male' className='inputs_data_letter' />
                
                
                </div>
                <div className='inputs_data'>
                <label >Mobile No. :</label>
                <input type="text" placeholder='+910987654321' className='inputs_data_letter' />
                
                
                </div>
                <div className='inputs_data'>
                <label >Address :</label>
                <input type="text" placeholder='2800 Oakwood Avenue, New York, NY 10018' className='inputs_data_letter' />
                
                
                </div>
                <div className='inputs_data'>
                <label >City :</label>
                <input type="text" placeholder='Surat' className='inputs_data_letter' />
                
                
                </div>
                <div className='inputs_data'>
                <label >State :</label>
                <input type="text" placeholder='Gujarat' className='inputs_data_letter'/>
                
                
                </div>
                <div className='inputs_data'>
                <label >Qualification :</label>
                <input type="text" placeholder='MBBS' className='inputs_data_letter'/>
                
                
                </div>
                <div className='inputs_data'>
                <label >Speciality :</label>
                <input type="text" placeholder='DHA' className='inputs_data_letter'/>
                
                
                </div>
                </form>
                </div>

                <div className='Container'>
        <h4>Documents</h4>
                <form className='container_input'>
              <div className='inputs_data'>
              <label >Aadhar Card :
              
              </label>
              
              <div onClick={toggleModal} className='inputs_data_view'>View</div>
              {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
        
            <img src={aadhar} alt="" className='aadhar_img'/>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                </div>

                <div className='inputs_data'>
                <label >Pan card :</label>
                <div onClick={togglePopup} className='inputs_data_view'>View</div>
                {popup && (
        <div className="modal">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <img src={pan} alt="" />
            <button className="close-modal" onClick={togglePopup}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
                </div>
                <div className='inputs_data'>
                <label >Medical Council Certificate :</label>
                <div onClick={togglePopmed} className='inputs_data_view'>View</div>
                {popmed && (
        <div className="modal">
          <div onClick={togglePopmed} className="overlay"></div>
          <div className="modal-content">
        
            <img src={medical} alt="" className='med_img'/>
            <button className="close-modal" onClick={togglePopmed}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                </div>
            
                </form>
                </div>
        

                <div className='Container'>
        <h4>Bank Info</h4>
                <form className='container_input'>
              <div className='inputs_data'>
              <label >Bank Name :</label>
                <input type="text" placeholder='Bank Name' className='inputs_data_letter' />
               
                </div>

                <div className='inputs_data'>
                <label >Acc No. :</label>
                <input type="text" placeholder='1234567890' className='inputs_data_letter'/>
                
                
                </div>
                <div className='inputs_data'>
                <label >IFSC :</label>
                <input type="text" placeholder='ABCDEF' className='inputs_data_letter'/>
                
               
                </div>
                <div className='inputs_data'>
                <label >Cancel checque :</label>
                <div onClick={togglePopcancel} className='inputs_data_view_letter'>View</div>
                {popcancel && (
        <div className="modal">
          <div onClick={togglePopcancel} className="overlay"></div>
          <div className="modal-content">
        
            <img src={cheque} alt="" className='med_img'/>
            <button className="close-modal" onClick={togglePopcancel}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
        
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
                    <a href=''><PiCaretLeftBold className='less_pag'/></a>
                    <a href=''className='anchi_pag_active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< PiCaretRightBold className='less_pag'/></a>
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
                    <a href='' className='anchi_pag'><PiCaretLeftBold className='less_pag'/></a>
                    <a href=''className='anchi_pag_active'>1</a>
                    <a href='' className='anchi_pag'>2</a>
                    <a href='' className='anchi_pag'>3</a>
                    <a href='' className='anchi_pag'>...</a>
                    <a href='' className='anchi_pag'>10</a>
                    <a href='' className='anchi_pag'><PiCaretRightBold className='less_pag'/></a>
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
