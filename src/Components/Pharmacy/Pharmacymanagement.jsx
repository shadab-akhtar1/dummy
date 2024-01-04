import React,{useState} from 'react';
import {Navbar} from '../Dhamanagement/Navbar';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';
import {Link} from 'react-router-dom';
import Pharmacard from './Pharmacard';
import Pagination from '../Dhamanagement/Pagination';

export const Pharmacymanagement = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }

    /* Logic For Switch Vaccine to Medicine */
    const [activateTab, setActivateTab] = useState("Vaccine");

    const handleTabClick = (tab) => {
        setActivateTab(tab);
      };
    
      
  return (
    <>
    <div className='w-[100%]'><Navbar/></div>
    <div className='bg-[#F4F4F4] w-[100%]'>
        <div className='flex justify-between items-center ml-[70px] mr-[70px] pt-[20px]'>
            <div className='flex justify-start'><h2 className='text-[#1A1C1F] font-bold font-montserrat text-[22px]'>Dashboard</h2></div>
            <div className='flex justify-end items-center'><p className='text-[#1A1C1F] font-semibold font-montserrat text-[14px]  mr-[10px]'>Availability</p>
            <div  className='mr-[30px] flex items-center'>
                <div onClick={handleClick} className='bg-[#DCFAEB] h-[10px] w-[28px] rounded-[30px] flex absolute '>
                    {toggleButton?<div  className='h-[15px] w-[15px] bg-[#41B079] rounded-[20px] relative bottom-[3px]'></div>:
                    <div className='h-[15px] w-[15px] bg-[#41B079] rounded-[20px] relative bottom-[3px] ml-[15px]'></div>}
                
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-start ml-[70px] mr-[70px] mt-[10px] border-b-[1px] border-b-solid border-b-[#E1E5E8]'>
            
            <div className={`text-[16px] font-medium font-montserrat
            ${
                activateTab === "Basic" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
              }`}
              onClick={() => handleTabClick("Basic")}
            
            >Medicines</div>
            
            <div className={`text-[16px] font-medium font-montserrat ml-[20px]
            ${
                activateTab === "Vaccine" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
              }`}
              onClick={() => handleTabClick("Vaccine")}>Vacination</div>

       
        </div>
        <div className="">
          {activateTab === "Vaccine" && <Vaccine/>}
          {activateTab === "Basic" && <Basic />}
          
          
        </div>
        </div>
    <div className='footer_pharmacy'><Footer/></div>
    </>
  )
}

const Vaccine = () => {
    /* take card data from pharmacard.jsx as an array*/
    const [isActive, setIsActive]= useState(false);
    const [items,setItems] = useState(Pharmacard);
    return(
        <>
        <div className='ml-[70px] mr-[70px] mt-[30px] flex flex-wrap gap-[38px]'>
        {
                items.map((elem) =>{
                    const {id,button}=elem;
                    return(
                        <Link to={"/pharmabookingvaccine"} className='no-underline'>
                        <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px]'>
                            <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                                <div className='flex justify-between items-center mt-[10px]'>
                                    <div className='flex justify-start text-[#E40443] text-[14px] font-semibold font-montserrat ml-[15px]'>#123456</div>
                                    <div className='flex justify-end mr-[15px] '>
                                        <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat '>13 June, 2023</div>
                                        <div className='text-[#5B6572] text-[12px] font-medium font-montserrat'>09:00AM</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center mt-[10px] mb-[10px]'>
                                    <div className='flex justify-start ml-[15px]'>
                                        <div className='border-r-[2px] border-r-solid border-r-[#E40443]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Vaccine 1</div></div>
                                        <div className='border-r-[2px] border-r-solid border-r-[#E40443] ml-[5px]'> <div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Vaccine 2 </div></div>
                                        <div className='ml-[5px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Vaccine 3</div></div>
                                    </div>
                                    <div className='flex justify-end mr-[15px] text-[#5B6572] text-[12px] font-medium font-montserrat'>Quotation: 560</div>
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <div className='ml-[15px] flex justify-start mt-[10px] mb-[10px]'>
                                    <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                                </div>
                                <div className='w-[284px] mt-[10px] ml-[20px] mb-[10px]'>
                                    <div className='flex justify-between items-center '>
                                        <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat '>Patient Name</div>
                                        <div className='flex justify-end'>
                                        {
                                            button.map((btn) => {
                                                const {name,color,colors,width} =btn;
                                                return(
                                                    <button className='rounded-[24px] border-none h-[22px] w-[73px] text-[#7C67FB] text-[10px] font-medium font-montserrat bg-[#F4F4F4]' style={{color:color,background:colors,width:width}}>{name}</button>
                                                )
                                            
                                            })
                                        }
                                            </div>
                                    </div>
                                    <div className='text-[#5B6572] text-[12px] font-medium font-montserrat '>
                                    XYZ, street name, City
                                    </div>
            
                                </div>
                            </div>
            
                        </div>
                        </Link>
                    )
                })
            }
            
            
            
            

        </div>


        <div className='pb-[30px] mt-[20px]'><Pagination/></div>
        </>
    );
};

const Basic = () => {
        /* take card data from pharmacard.jsx as an array*/
    const [isActive, setIsActive]= useState(false);
    const [items,setItems] = useState(Pharmacard);
    return(
        <>
        <div className='ml-[70px] mr-[70px] mt-[30px] flex flex-wrap gap-[38px]'>
        {
                items.map((elem) =>{
                    const {id,button}=elem;
                    return(
                        <Link to={"/pharmabooking"} className='no-underline'>
                        <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px]'>
                            <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                                <div className='flex justify-between items-center mt-[10px]'>
                                    <div className='flex justify-start text-[#E40443] text-[14px] font-semibold font-montserrat ml-[15px]'>#123456</div>
                                    <div className='flex justify-end mr-[15px] '>
                                        <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat '>13 June, 2023</div>
                                        <div className='text-[#5B6572] text-[12px] font-medium font-montserrat'>09:00AM</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center mt-[10px] mb-[10px]'>
                                    <div className='flex justify-start ml-[15px]'>
                                        <div className='border-r-[2px] border-r-solid border-r-[#E40443]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Medicine 1</div></div>
                                        <div className='border-r-[2px] border-r-solid border-r-[#E40443] ml-[5px]'> <div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Medicine 2 </div></div>
                                        <div className='ml-[5px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Medicine 3</div></div>
                                    </div>
                                    <div className='flex justify-end mr-[15px] text-[#5B6572] text-[12px] font-medium font-montserrat'>Quotation: 560</div>
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <div className='ml-[15px] flex justify-start mt-[10px] mb-[10px]'>
                                    <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                                </div>
                                <div className='w-[284px] mt-[10px] ml-[20px] mb-[10px]'>
                                    <div className='flex justify-between items-center '>
                                        <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat '>Patient Name</div>
                                        <div className='flex justify-end'>
                                        {
                                            button.map((btn) => {
                                                const {name,color,colors,width} =btn;
                                                return(
                                                    <button className='rounded-[24px] border-none h-[22px] w-[73px] text-[#7C67FB] text-[10px] font-medium font-montserrat bg-[#F4F4F4]' style={{color:color,background:colors,width:width}}>{name}</button>
                                                )
                                            
                                            })
                                        }
                                            </div>
                                    </div>
                                    <div className='text-[#5B6572] text-[12px] font-medium font-montserrat '>
                                    XYZ, street name, City
                                    </div>
            
                                </div>
                            </div>
            
                        </div>
                        </Link>
                    )
                })
            }
            
            
            
            

        </div>


        <div className='pb-[30px] mt-[20px]'><Pagination/></div>
        </>
    );
};
        

    
export default Pharmacymanagement;
