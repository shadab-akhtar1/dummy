import React,{useState} from 'react';

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
import Navbars from '../Dhamanagement/Navbars';
import Pagination from '../Dhamanagement/Pagination';

export const Earninghistory = () => {
  const [formearn, setFormearn] = useState(false);

  const toggleFormearn = () => {
    setFormearn(!formearn);
  };

  if(formearn) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
        <div><Navbars/></div>
    <div className='w-[100%] bg-[#F4F4F4] pt-[20px]'>
        <div className='ml-[70px] pt-[1px] mr-[70px]'><h2 className='flex justify-start font-bold font-montserrat text-[22px]'><Link to={"/profile"} className='earning_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='text-[#1A1C1F] text-center pt=[3px] pr-[10px] text-[30px]'/></Link>My Earnings</h2></div>
        <div className='flex justify-start ml-[80px]  border-b-[1px] border-b-solid border-b-[#E1E5E8]'>
            <div className='mt-[20px] mr-[20px] border-b-[2px] border-b-solid border-b-[#E40443] text-[#1A1C1F] text-[16px] font-medium font-montserrat'>All</div>
            <Link to={"/earningdha" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]  text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>DHA</div>
            </Link>
            <Link to={"/earningdoctor" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]   text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>Doctor</div>
            </Link>
            <Link to={"/earningpharmacy" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]   text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>Pharmacy</div>
            </Link>
            <Link to={"/earninglab" } className='no-underline'>
            <div className='mt-[20px] mr-[20px]   text-[#8D98A4] text-[16px] font-medium font-montserrat cursor-pointer'>Lab</div>
            </Link>
        </div>
        <div className='flex justif-between bg-[white] mr-[70px] ml-[70px] items-center rounded-[8px] mt-[20px]'>
        <div className='flex justify-start items-center w-[500px] p-[10px]'>
          <img src={profile_logo} alt="profile" />
          <div className='pl-[10px] text-[16px] font-semibold font-montserrat w-[180px]'>Hospital Name <p className='text-[#E40443] text-[14px] font-medium font-montserrat'>Location</p></div>
          
        </div>
        <div className='flex justify-end items-center'>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>786544<p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>Total Cases</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#E40443] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>Rs 500000 <p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>Total Earnings</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#1A1C1F] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>Rs 300000 <p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>This Months Earnings</p></div>
        <div className='w-[150px] rounded-[8px] border-[1px] border-solid border-[#EEF0F3] h-[60px] text-left text-[#1A1C1F] text-[18px] font-semibold pt-[10px] pl-[12px] font-montserrat ml-[30px]'>Rs 200000 <p className='text-[#5B6572] text-[12px] font-medium font-montserrat '>Total Reedemeed</p></div>
        </div>
      </div>

      <div className='flex justify-start items-center mt-[20px] ml-[70px]'>
        <div className='w-[370px] h-[44px] rounded-[8px] bg-[white] flex justify-start items-center'>
            <input type="text" name="" id=""placeholder='Amount' className='border-none text-[#5B6572] bg-[white] text-[14px] font-medium font-montserrat flex justify-center items-center'/>
        </div>
        <div className='ml-[20px] flex justify-center items-center'>
            <button className='w-[370px] h-[44px] bg-[#E40443] rounded-[8px] border-none text-[white] flex justify-center items-center text-[14px] font-semibold font-montserrat' onClick={toggleFormearn}>Withdraw money</button>
        </div>
        {formearn && (
                                                <div className="w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0">
                                                        <div onClick={toggleFormearn} className="w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bottom-0"></div>
                                                        <div className="absolute left-[50%] top-[50%] rounded-[16px] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] py-[14px] px-[28px] rounded-[16px] w-[438px] grid -justify-center items-center bg-[white] h-[200px] ">
                                                          <div className='w-[378px] grid justify-center items-center '>
                                                          <p className='text-[#000000] font-montserrat text-[18px] font-medium text-center '>Your <span className='text-[#E40443] font-montserrat text-[18px] font-semibold'>Withdrawal</span> request have been submitted .</p>
                                                          <div className='flex justify-center items-center '>
                                                          <button className='flex justify-center items-center bg-[#E40443] border-none rounded-[8px] w-[226px] h-[38px] text-[14px] font-semibold font-montserrat text-[white]'>Done</button>
                                                          </div>
                                                          </div>
        
                                                        
                                                                
                                                                    

                                                            

                                                                
                                                            <button className="absolute top-[10px] right-[10px] py-[5px] px-[7px]" onClick={toggleFormearn}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}
      </div>

      <div className='flex justify-between items-center ml-[80px] mr-[70px] border-b-[1px] border-b-solid border-b-[#E1E5E8] h-[32px] mt-[20px]'>
        <div className='flex justify-start items-center mt-[10px]'>
        <Link to={"/earning"} className='no-underline'>
            <div className='text-[1A1C1F]  text-[16px] font-medium font-montserrat'>History</div>
            </Link>
            <div className='ml-[20px] text-[#8D98A4] text-[16px] font-medium font-montserrat border-b-[2px] border-b-solid border-b-[#E40443] '>Withdrawls</div>
            
        </div>
        <div className='flex justify-end items-center '>
            <div className='mr-[20px] flex justify-center items-center text-[#E40443] text-[14px] font-medium font-montserrat'>sort by <HiChevronUpDown/></div>
            <div className='flex justify-around items-center w-[160px]'>
                <div className='text-[#333333] text-[14px] font-medium font-montserrat'>page</div>
                <div className='flex justify-center items-center border-[1px] border-solid border-[#DDDDDD] rounded-[8px] bg-[white] w-[60px]'>1 <MdOutlineKeyboardArrowDown/></div>
                <div className='text-[#333333] text-[14px] font-medium font-montserrat'>of 10</div>
            </div>

        </div>
      </div>

      <div className='flex justify-between w-[1240px] ml-[70px] mr-[40px] items-center rounded-[8px] mt-[10px] bg-[#F4F4F4]'>
          <div className='mb-[20px] w-[500px] h-[606px]'>
          <div className='flex justify-between items-center '>
            

              
          </div>
          <div className='bg-[white] rounded-[16px] p-[32px] mt-[20px] '>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
              <ul className='ml-[20px]'>
                <li className='list-none mr-[30px] pt-[5px] text-[14px] font-medium font-montserrat text-[#1A1C1F]'>Transction #1234</li>
                
                <li className='list-none mr-[30px] pt-[5px] text-[12px] font-normal font-montserrat text-[#38404A]'>16 june 2023</li>
              </ul>
              <ul>
                <li className='list-none'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px] flex justify-center items-center mr-[20px]'>RS 500</button></li>
                <Link to={""}>
                
                </Link>
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[20px]'>
                <li className='list-none mr-[30px] pt-[5px] text-[14px] font-medium font-montserrat text-[#1A1C1F]'>Transction #1234</li>
            
                <li className='list-none mr-[30px] pt-[5px] text-[12px] font-normal font-montserrat text-[#38404A]'>16 june 2023</li>
              </ul>
              <ul>
                <li className='list-none'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px] flex justify-center items-center mr-[20px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[20px]'>
                <li className='list-none mr-[30px] pt-[5px] text-[14px] font-medium font-montserrat text-[#1A1C1F]'>Transction #1234</li>
                
                <li className='list-none mr-[30px] pt-[5px] text-[12px] font-normal font-montserrat text-[#38404A]'>16 june 2023</li>
              </ul>
              <ul>
                <li className='list-none'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px] flex justify-center items-center mr-[20px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[20px]'>
                <li className='list-none mr-[30px] pt-[5px] text-[14px] font-medium font-montserrat text-[#1A1C1F]'>Transction #1234</li>
                
                <li className='list-none mr-[30px] pt-[5px] text-[12px] font-normal font-montserrat text-[#38404A]'>16 june 2023</li>
              </ul>
              <ul>
                <li className='list-none'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px] flex justify-center items-center mr-[20px]'>RS 500</button></li>
                
              </ul>
            </div>
            <div className='flex justify-between items-center bg-[white] rounded-[8px] border-[1px] border-solid border-[#E3E6E8] mt-[10px] mb-[10px] h-[78px]'>
            <ul className='ml-[20px]'>
                <li className='list-none mr-[30px] pt-[5px] text-[14px] font-medium font-montserrat text-[#1A1C1F]'>Transction #1234</li>
                
                <li className='list-none mr-[30px] pt-[5px] text-[12px] font-normal font-montserrat text-[#38404A]'>16 june 2023</li>
              </ul>
              <ul>
                <li className='list-none'><button className='bg-[#F5F6F7] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat w-[75px] h-[30px] flex justify-center items-center mr-[20px]'>RS 500</button></li>
                
              </ul>
            </div>

            
            <div>
            <Pagination/>
                </div>
          </div>
          
          </div>
          
          

          
          <div className='w-[500px] h-[606px]'>
          
          
          <div className='bg-[white] rounded-[16px] p-[32px] rounded-[10px] '>
            <div className='text-[18px] font-semibold font-montserrat text-[#1A1C1F]'>Withdrawal Status</div>

            <div className='flex justify-between items-center h-[102px] mt-[20px]'>
                <div className='grid justify-start items-center '>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat '>Withdrawal #1234</div>
                    <div className='text-[#1A1C1F] text-[14px] font-medium font-montserrat mt-[10px]'>RS 5000</div>
                    <div className='text-[#38404A] text-[12px] font-normal font-montserrat mt-[10px]'>16,June 2023</div>
                </div>
                <div className='flex justify-end items-center '>
                    <button className='bg-[#F5F6F7] w-[85px] h-[30px] rounded-[40px] border-none text-[#F1614B] text-[12px] font-medium font-montserrat  '>Pending</button>
                </div>
            </div>

                        <div className='  flex gap-[20px] mt-[20px]'>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#3EB655] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                
                                <div className='h-full border border-dashed border-[#3EB655]'></div>
                            </div>
                            <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] '>Payment Request Generated</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>17, June 2023 | 08:00 AM</p>

                                    </div>
                            </div>
                        </div>
                        <div className='  flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#3EB655] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center '><div><IoCheckmark className='text-[white]' /></div></div>
                                <div className='h-full border border-dashed border-[#3EB655]'></div>
                            </div>
                            <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] '>Payment Sent</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>17 june, 2023</p>

                                    </div>
                            </div>
                        </div>
                        <div className='  flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#3EB655] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[white]'>03</div>
                                <div className='h-full border border-dashed border-[#EEF0F3]'></div>
                            </div>
                            <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] '>In Process</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>17 June, 2023</p>

                                    </div>
                            </div>
                        </div>
                        <div className='  flex gap-[20px] '>
                            <div className='flex flex-col items-center'>
                                <div className='w-[32px] h-[32px] bg-[#EEF0F3] rounded-[40px] p-[12px] gap-[8px] flex justify-center items-center text-[#5B6572]'>04</div>
                                <div className=' border border-dashed border-[#EEF0F3]'></div>
                            </div>
                            <div className=' flex justify-center items-center '>
                                    <div className='grid justify-start mb-[20px]'>
                                        <h4 className='text-[18px] font-medium font-montserrat text-[#1A1C1F] '>Payment Credit</h4>
                                        <p className='text-[#5B6572] text-[14px] font-medium font-montserrat'>Remaining</p>

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
export default Earninghistory