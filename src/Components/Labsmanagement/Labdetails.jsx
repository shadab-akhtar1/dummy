import React,{useState} from 'react';
import './Labdetails.css';
import {Navbar} from '../Dhamanagement/Navbar';
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

export const Labdetails = () => {
    const [modali, setModali] = useState(false);

  const toggleModali = () => {
    setModali(!modali);
  };

  if(modali) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [popupi,setPopupi] = useState(false);

  const togglePopupi = () =>{
    setPopupi(!popupi);
  };

  if(popupi){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  const [popmedi,setPopmedi] = useState(false);

  const togglePopmedi = () =>{
    setPopmedi(!popmedi);
  };

  if(popmedi){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  const [popcanceli,setPopcanceli] = useState(false);

  const togglePopcanceli = () =>{
    setPopcanceli(!popcanceli);
  };

  if(popcanceli){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <div className='labdetails_pharma_detail_navbar'><Navbar/></div>
    <div className='labdetails_pharma_detail_container'>
      <div className='labdetails_pharma_detail_container_heading'>
        <div className='labdetails_pharma_detail_container_heading_box'>
          <h2> <Link to={"/labmanagement"} className='labdetails_pharma_detail_detailsview_link'>< PiArrowLeftFill className='labdetails_pharma_detail_details_arrow'/></Link>Lab Details</h2>
        </div>
        <Link to={"/labdetailedit"}>
        <button className='labdetails_pharma_detail_container_btn'><AiOutlineEdit className='labdetails_pharma_detail_container_btn_icon1'/>Edit</button>
        </Link>
        <Link to={"/blocklab"}>
        <button className='labdetails_pharma_detail_container_btn1'><MdBlockFlipped className='labdetails_pharma_detail_container_btn_icon'/>Block</button>
        </Link>

      </div>

      <div className='labdetails_pharma_detail2'>
        <div className='labdetails_pharma_detail2_profile'>
          <img src={profile_logo} alt="profile" />
          <div className='labdetails_pharma_detail2_profile_name'>Lab Name <p>Owner Name</p></div>
          <div className='labdetails_pharma_detail2_profile_status'>237 <p>Completed Cases</p></div>
        </div>
        <div className='labdetails_pharma_detail2_box'>Rs 5000 <p>Total Earnings</p></div>
        <div className='labdetails_pharma_detail2_boxes'>Rs 3000 <p>This Months Earnings</p></div>
        <div className='labdetails_pharma_detail2_boxer'>Rs 2000 <p>Total Reedemeed</p></div>
        <div className='labdetails_pharma_detail2_boxex'><div className='labdetails_pharma_detail2_calling'>< IoCallOutline /></div>Call Doctor</div>
      </div>
      <div className='labdetails_pharma_detail3'>
      <div className='labdetails_pharma_detail3_Container'>
        <h4>Basic Details</h4>
                <form className='labdetails_pharma_detail3_container_input'>
              <div className='labdetails_pharma_detail3_inputs_data'>
              <label >Full Name :</label>
              <input type="text" placeholder='Jaydip Sakhiya' className='labdetails_pharma_detail3_inputs_data_letter' />
                
                
                
                </div>

                
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Mobile No. :</label>
                <input type="text" placeholder='+910987654321' className='labdetails_pharma_detail3_inputs_data_letter' />
                
                
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Lab Name:</label>
                <input type="text" placeholder='Pharmacy Name' className='labdetails_pharma_detail3_inputs_data_letter'/>
                
                
                </div>
                
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Address :</label>
                <input type="text" placeholder='2800 Oakwood Avenue, New York, NY 10018' className='labdetails_pharma_detail3_inputs_data_letter' />
                
                
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >City :</label>
                <input type="text" placeholder='Surat' className='labdetails_pharma_detail3_inputs_data_letter' />
                
                
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >State :</label>
                <input type="text" placeholder='Gujarat' className='labdetails_pharma_detail3_inputs_data_letter'/>
                
                
                </div>
                
                
                </form>
                </div>

                <div className='labdetails_pharma_detail3_Container'>
        <h4>Documents</h4>
                <form className='labdetails_pharma_detail3_container_input'>
              <div className='labdetails_pharma_detail3_inputs_data'>
              <label >Aadhar Card :
              
              </label>
              
              <div onClick={toggleModali} className='labdetails_pharma_detail3_inputs_data_view'>View</div>
              {modali && (
        <div className="labdetails_modal">
          <div onClick={toggleModali} className="labdetails_overlay"></div>
          <div className="labdetails_modal-content">
        
            <img src={aadhar} alt="" className='labdetails_aadhar_img'/>
            <button className="labdetails_close-modal" onClick={toggleModali}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                </div>

                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Pan card :</label>
                <div onClick={togglePopupi} className='labdetails_pharma_detail3_inputs_data_view'>View</div>
                {popupi && (
        <div className="labdetails_modal">
          <div onClick={togglePopupi} className="labdetails_overlay"></div>
          <div className="labdetails_modal-content">
            <h2>Hello Modal</h2>
            <img src={pan} alt="" />
            <button className="labdetails_close-modal" onClick={togglePopupi}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Lab License :</label>
                <div onClick={togglePopmedi} className='labdetails_pharma_detail3_inputs_data_view'>View</div>
                {popmedi && (
        <div className="labdetails_modal">
          <div onClick={togglePopmedi} className="labdetails_overlay"></div>
          <div className="labdetails_modal-content">
        
            <img src={medical} alt="" className='labdetails_med_img'/>
            <button className="labdetails_close-modal" onClick={togglePopmedi}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Lab Nabal License :</label>
                <div className='labdetails_pharma_detail3_inputs_data_view'>View</div>
                
                </div>

                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >GST :</label>
                <div className='labdetails_pharma_detail3_inputs_data_view'>View</div>
                
                </div>
            
                </form>
                </div>
        

                <div className='labdetails_pharma_detail3_Container'>
        <h4>Bank Info</h4>
                <form className='labdetails_pharma_detail3_container_input'>
              <div className='labdetails_pharma_detail3_inputs_data'>
              <label >Bank Name :</label>
                <input type="text" placeholder='Bank Name' className='labdetails_pharma_detail3_inputs_data_letter' />
               
                </div>

                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Acc No. :</label>
                <input type="text" placeholder='1234567890' className='labdetails_pharma_detail3_inputs_data_letter'/>
                
                
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >IFSC :</label>
                <input type="text" placeholder='ABCDEF' className='labdetails_pharma_detail3_inputs_data_letter'/>
                
               
                </div>
                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Bank Statement :</label>
                <div  className='labdetails_pharma_detail3_inputs_data_view_letter'>View</div>
                
                
        
                </div>

                <div className='labdetails_pharma_detail3_inputs_data'>
                <label >Cancel checque :</label>
                <div onClick={togglePopcanceli} className='labdetails_pharma_detail3_inputs_data_view_letter'>View</div>
                {popcanceli && (
        <div className="labdetails_modal">
          <div onClick={togglePopcanceli} className="labdetails_overlay"></div>
          <div className="labdetails_modal-content">
        
            <img src={cheque} alt="" className='labdetails_med_img'/>
            <button className="labdetails_close-modal" onClick={togglePopcanceli}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
        
                </div>
                </form>
                </div>
        
      </div>
        <div className='labdetails_pharma_detail3_last'>
          <div className='labdetails_pharma_detail3_last_last_last'>
          <div className='labdetails_pharma_detail3_last_one'>
            <div className='labdetails_pharma_detail3_last_one_left'>Past Cases</div>
              <ul className='labdetails_pharma_detail3_last_two_right'>
                <li className='labdetails_pharma_detail3_last_two_right_page'>Page</li>
                <li className='labdetails_pharma_detail3_last_two_right_1'>1 < BiChevronDown className='labdetails_pharma_detail3_drip'/></li>
                <li className='labdetails_pharma_detail3_last_two_right_low'>of 10</li>
              </ul>

              
          </div>
          <div className='labdetails_pharma_detail3_last_one_last'>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
              <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <Link to={"/labbooking"}>
                <div className='labdetails_pharma_detail3_view_details'>View Details</div>
                </Link>
              </ul>
            </div>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <Link to={""}>
                <div className='labdetails_pharma_detail3_view_details'>View Details</div>
                </Link>
              </ul>
            </div>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='labdetails_pharma_detail3_view_details'>View Details</div>
              </ul>
            </div>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Project Name</li>
                <li>Booking</li>
                <li>16 june 2023</li>
              </ul>
              <ul>
                <li><button>Completed</button></li>
                <div className='labdetails_pharma_detail3_view_details'>View Details</div>
              </ul>
            </div>

            
            <div>
            <div className='labdetails_pharma_detail3_pagination_pag'>
                    <a href=''>< PiCaretDoubleLeftBold className='labdetails_pharma_detail3_less_pag-1'/></a>
                    <a href=''><PiCaretLeftBold className='labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''className='labdetails_pharma_detail3_anchi_pag_active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href='' >...</a>
                    <a href='' >10</a>
                    <a href=''>< PiCaretRightBold className='labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''>< PiCaretDoubleRightBold className='labdetails_pharma_detail3_les_pag'/></a>

                </div>
                </div>
          </div>
          
          </div>
          
          

          
          <div className='labdetails_pharma_detail3_last_last'>
          <div className='labdetails_pharma_detail3_last_one'>
            <div className='labdetails_pharma_detail3_last_one_left'>Transaction History</div>
              <div className='labdetails_pharma_detail3_last_two_right'>
                <div className='labdetails_pharma_detail3_last_two_right_page'>Page</div>
                <div className='labdetails_pharma_detail3_last_two_right_1'>1 < BiChevronDown className='labdetails_pharma_detail3_drip'/></div>
                <div className='labdetails_pharma_detail3_last_two_right_low'>of 10</div>
                
                
              </div>
              

              
          </div>
          <p className='labdetails_pharma_detail3_deta'>View Account Details</p>
          <div className='labdetails_pharma_detail3_last_one_last'>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
              <ul>
                <li>Home Care #1234</li>
      
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Transaction #1234</li>
            
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Home care #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
                
              </ul>
            </div>
            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Transaction #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
              
              </ul>
            </div>

            <div className='labdetails_pharma_detail3_last_one_last_1'>
            <ul>
                <li>Home Care #1234</li>
                
                <li>16,june 2023</li>
              </ul>
              <ul>
                <li><button>RS 500</button></li>
              
              </ul>
            </div>

            <div>
            <div className='labdetails_pharma_detail3_pagination_pag'>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'><PiCaretDoubleLeftBold className='labdetails_pharma_detail3_less_1_pag'/></a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'><PiCaretLeftBold className='labdetails_pharma_detail3_less_pag'/></a>
                    <a href=''className='labdetails_pharma_detail3_anchi_pag_active'>1</a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'>2</a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'>3</a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'>...</a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'>10</a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'><PiCaretRightBold className='labdetails_pharma_detail3_less_pag'/></a>
                    <a href='' className='labdetails_pharma_detail3_anchi_pag'><PiCaretDoubleRightBold className='labdetails_pharma_detail3_less_pag'/></a>

                </div>
                </div>

          </div>
          </div>
          
          </div>
    </div>
    
    </>
  )
}
export default Labdetails
