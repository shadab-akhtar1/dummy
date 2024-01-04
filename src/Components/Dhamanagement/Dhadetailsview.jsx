import React,{useState} from 'react';
import {Navbar} from './Navbar';
import profile_logo from '../Assets/Ellipse 2.svg';
import {PiArrowLeftFill} from 'react-icons/pi';
import {BiChevronDown} from 'react-icons/bi';
import {IoCallOutline} from 'react-icons/io5';
import aadhar from '../Assets/aadhaar-card-dummy.png';
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import pan from '../Assets/pan dummy.png';
import medical from '../Assets/medical dummy.png';
import cheque from '../Assets/cancelled-cheque-1.png';
import Pagination from './Pagination';

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
    <div className='w-[100%]'><Navbar/></div>
    <div className='bg-[#F5F6F7] pt-[20px]'>
      <div className='flex justify-between items-center ml-[70px] mr-[70px] h-[68px]'>
        <div className='flex justify-start items-center'>
          <h2 className='font-bold font-montserrat flex justify-around items-center text-[#1A1C1F] text-[22px]'> <Link to={"/dharequest"} className='no-underline'>< PiArrowLeftFill className='text-[#1A1C1F] text-center  pr-[10px] text-[30px]'/></Link>DHA Details</h2>
        </div>
        <div className='flex justify-end items-center'>
          <Link to={"/dhadetailsedit"} className='no-underline'>
            <button className='h-[36px] w-[100px] bg-[#E40443] rounded-[8px] border-none mr-[5px] text-[white] font-semibold text-[14px] font-montserrat flex justify-center items-center'><AiOutlineEdit className='pr-[10px] items-center text-[25px]'/>Edit</button>
          </Link>
          <Link to={"/blockdha"} className='no-underline'>
            <button className='h-[36px] w-[100px] bg-[#E40443] rounded-[8px] border-none ml-[5px] text-[white] font-semibold text-[14px] font-montserrat flex justify-center items-center'><MdBlockFlipped className='pr-[10px] items-center text-[25px]'/>Block</button>
          </Link>
        </div>

      </div>

      <div className='flex justify-between bg-[white] mr-[70px] ml-[70px] items-center rounded-[8px]'>
        <div className='flex justify-between items-center w-[400px] p-[10px]'>
          <img src={profile_logo} alt="profile" />
          <div className='pl-[10px] text-[16px] font-montserrat font-semibold'>Jacob Jones <span className='text-[#E40443] font-montserrat font-medium text-[14px]'>Psychlogist</span></div>
          <div className='text-[18px] font-semibold pl-[10px] border-[1px] border-solid border-[#EEF0F3] rounded-[8px] w-[200px] text-center h-[60px] text-[#1A1C1F] pt-[10px] font-montserrat '>237 <p className='text-[#5B6572] text-[12px] font-medium text-center pr-[2px] font-montserrat '>Completed Cases</p></div>
        </div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat'>Rs 5000 <p className='text-[#5B6572] font-medium text-[12px]  font-montserrat'>Total Earnings</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat text-[#1A1C1F]'>Rs 3000 <p className='text-[#5B6572] font-medium text-[12px]  font-montserrat'>This Months Earnings</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat text-[#1A1C1F]'>Rs 2000 <p className='text-[#5B6572] font-medium text-[12px]  font-montserrat'>Total Reedemeed</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left mr-[20px] text-[#1A1C1F] text-[18px] font-semibold flex justify-center items-center text-center font-montserrat '><div className='bg-[#3EB655] text-[white] h-[30px] w-[30px] rounded-[8px] mr-[5px] flex justify-center items-center '>< IoCallOutline /></div>Call DHA</div>
      </div>
      <div className='grid grid-cols-3 gap[20px] bg-[white] mr-[70px] ml-[70px] rounded-[8px] mt-[10px]'>
      <div className='mt-[1px] justify-left ml-[15px]'>
        <h4 className='font-montserrat font-bold text-[16px] mt-[20px]'>Basic Details</h4>
                <form className='w-[300px] mt-[10px]' >
              <div className='w-[100%] mb-[10px] flex justify-start items-center  border-b-[1px] border-solid border[#E3E6E8]'>
              <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Full Name :</label>
              <input type="text" placeholder='Jaydip Sakhiya' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium' />
                
                
                
                </div>

                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Gender :</label>
                <input type="text" placeholder='Male' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium' />
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Mobile No. :</label>
                <input type="text" placeholder='+910987654321' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium' />
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Address :</label>
                <input type="text" placeholder='2800 Oakwood Avenue, New York, NY 10018' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium' />
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>City :</label>
                <input type="text" placeholder='Surat' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium' />
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>State :</label>
                <input type="text" placeholder='Gujarat' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium'/>
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Qualification :</label>
                <input type="text" placeholder='MBBS' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium'/>
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat' >Speciality :</label>
                <input type="text" placeholder='DHA' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium'/>
                
                
                </div>
                </form>
                </div>

                <div className='mt-[1px] justify-left ml-[15px]'>
        <h4 className='font-montserrat font-bold text-[16px] mt-[20px]'>Documents</h4>
                <form className='w-[300px] mt-[10px]'>
              <div className='w-[100%] mb-[10px] mt-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
              <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Aadhar Card :
              
              </label>
              
              <div onClick={toggleModal} className='text-[#E40443] text-[12px] font-medium font-montserrat cursor-pointer ml-[120px] mt-[5px] mb-[5px]'>View</div>
              {modal && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
          <div onClick={toggleModal} className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] py-10 px-10 rounded-[3px] max-w[600px] min-w[300px]">
        
            <img src={aadhar} alt="" className='h-[300px w-[500px]'/>
            <button className="absolute top-[10px] right-[10px] py-2 px-2 " onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                </div>

                <div className='w-[100%] mb-[10px] mt-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Pan card :</label>
                <div onClick={togglePopup} className='text-[#E40443] text-[12px] font-medium font-montserrat cursor-pointer ml-[120px] mt-[5px] mb-[5px]'>View</div>
                {popup && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
          <div onClick={togglePopup} className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] py-10 px-10 rounded-[3px] max-w[600px] min-w[300px]">
            <h2>Hello Modal</h2>
            <img src={pan} alt="" />
            <button className="absolute top-[10px] right-[10px] py-2 px-2 " onClick={togglePopup}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
                </div>
                <div className='w-[100%] mb-[10px] mt-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between  items-center  font-montserrat'>Medical Council Certificate :</label>
                <div onClick={togglePopmed} className='text-[#E40443] text-[12px] font-medium font-montserrat cursor-pointer ml-[120px] mt-[5px] mb-[5px]'>View</div>
                {popmed && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
          <div onClick={togglePopmed} className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] py-10 px-10 rounded-[3px] max-w[600px] min-w[300px]">
        
            <img src={medical} alt="" className='h-[300px] w-[500x] mt-[20px]'/>
            <button className="absolute top-[10px] right-[10px] py-2 px-2 " onClick={togglePopmed}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                </div>
            
                </form>
                </div>
        

                <div className='mt-[1px] justify-left ml-[15px]'>
        <h4 className='font-montserrat font-bold text-[16px] mt-[20px]'>Bank Info</h4>
                <form className='w-[300px] mt-[10px]'>
              <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
              <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Bank Name :</label>
                <input type="text" placeholder='Bank Name' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium' />
               
                </div>

                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Acc No. :</label>
                <input type="text" placeholder='1234567890' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium'/>
                
                
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>IFSC :</label>
                <input type="text" placeholder='ABCDEF' className='w-[212px] border-none outline-none text-[12px] transition-[0.3s] mt-[5px] ml-[5px] mb-[5px] font-montserrat text-[#1A1C1F] font-medium'/>
                
               
                </div>
                <div className='w-[100%] mb-[10px] flex justify-start border-b-[1px] border-solid border[#E3E6E8]'>
                <label className='left-0 w-[140px] text-[12px] text-[#8D98A4] transition-[0.3s] font-medium  flex justify-between text-center items-center  font-montserrat'>Cancel checque :</label>
                <div onClick={togglePopcancel} className='text-[#E40443] text-[12px] font-medium font-montserrat cursor-pointer '>View</div>
                {popcancel && (
        <div className='w-screen h-screen top-0 left-0 right-0 bottom-0 fixed'>
          <div onClick={togglePopcancel} className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed"></div>
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] py-10 px-10 rounded-[3px] max-w[600px] min-w[300px]">
        
            <img src={cheque} alt="" className='mt-[20px] h-[300px] w-[500px] '/>
            <button className="absolute top-[10px] right-[10px] py-2 px-2 " onClick={togglePopcancel}>
              CLOSE
            </button>
          </div>
        </div>
      )}
                
        
                </div>
                </form>
                </div>
        
      </div>
        <div className='flex justify-between ml-[70px] mr-[110px] items-center rounded-[8px] mt-[10px]  '>
          <div className=' w-[484px]'>
          <div className='flex justify-between items-center'>
            <div className='w-[240px] text-[14px] font-montserrat text-[#1A1C1F] font-bold '>Past Cases</div>
              <ul className='flex justify-between items-center w-[200px] list-none'>
                <li className='text-[#333333] w-[37px] text-[12px] ml-[30px] font-montserrat font-medium'>Page</li>
                <li className='bg-[white] border-[1px] border-solid border-[#DDDDDD] rounded-[8px] w-[50px] items-center pl-[10px] pr-[10px] flex justify-between text-[14px] font-semibold'>1 < BiChevronDown className='flex justify-end'/></li>
                <li className='text-[#333333] text-[12px] font-medium mr-[10px] font-mongtserrat'>of 10</li>
              </ul>

              
          </div>
          <div className='bg-[white] rounded-[16px] p-[20px] mt-[30px] '>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[100px]'>
              <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Project Name</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Booking</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16 june 2023</li>
              </ul>
              <ul >
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[100px] h-[30px]'>Completed</button></li>
                <Link to={"/dhacasedetail"}>
                <div className='text-[#E40443] mt-[10px] ml-[20px] text-[12px] font-normal font-montserrat cursor-pointer no-underline list-none'>View Details</div>
                </Link>
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[100px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Project Name</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Booking</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16 june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[100px] h-[30px]'>Completed</button></li>
                <div className='text-[#E40443] mt-[10px] ml-[20px] text-[12px] font-normal font-montserrat cursor-pointer no-underline list-none'>View Details</div>
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[100px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Project Name</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Booking</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16 june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[100px] h-[30px]'>Completed</button></li>
                <div className='text-[#E40443] mt-[10px] ml-[20px] text-[12px] font-normal font-montserrat cursor-pointer no-underline list-none'>View Details</div>
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[100px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Project Name</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Booking</li>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16 june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[100px] h-[30px]'>Completed</button></li>
                <div className='text-[#E40443] mt-[10px] ml-[20px] text-[12px] font-normal font-montserrat cursor-pointer no-underline list-none'>View Details</div>
              </ul>
            </div>

            
            
            <div className='mb-[20px] mt-[20px]'><Pagination/></div>
                
          </div>
          
          </div>
          
          

          
          <div className='w-[484px] mr-[100px] mt-[20px] '>
          <div className='flex justify-between items-center'>
            <div className='w-[240px] text-[14px] font-montserrat text-[#1A1C1F] font-bold'>Transaction History</div>
              <div className='flex justify-between items-center w-[200px] list-none'>
                <div className='text-[#333333] w-[37px] text-[12px] ml-[30px] font-montserrat font-medium'>Page</div>
                <div className='bg-[white] border-[1px] border-solid border-[#DDDDDD] rounded-[8px] w-[50px] items-center pl-[10px] pr-[10px] flex justify-between text-[14px] font-semibold'>1 < BiChevronDown className='flex justify-end'/></div>
                <div className='text-[#333333] text-[12px] font-medium mr-[10px] font-mongtserrat'>of 10</div>
                
                
              </div>
              

              
          </div>
          <span className='flex justify-end text-[#E40443] text-[14px] font-montserrat font-medium cursor-pointer mt-[10px]'>View Account Details</span>
          <div className='bg-[white] rounded-[16px] p-[20px] mt-[20px]'>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
              <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Home Care #1234</li>
      
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Transaction #1234</li>
            
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Home care #1234</li>
                
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Transaction #1234</li>
                
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
              
              </ul>
            </div>

            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[10px]'>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>Home Care #1234</li>
                
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'>16,june 2023</li>
              </ul>
              <ul className=''>
                <li className='list-none mr-[20px] pt-[5px] text-[12px] font-medium font-montserrat text-[#1A1C1F]'><button className='bg-[#E5FFF2] rounded-[40px] border-none text-[#41B079] text-[12px] font-medium font-montserrat w-[75px] h-[30px]'>RS 500</button></li>
              
              </ul>
            </div>

            
            <div className='mb-[20px] mt-[20px] '><Pagination/></div>
                

          </div>
          </div>
          
          </div>
    </div>
    </div>
  )
}
export default Dhadetailsview
