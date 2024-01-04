import React,{useState} from 'react';
import {Navbar} from '../Dhamanagement/Navbar';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {Footer} from '../Dhamanagement/Footer';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {FaCaretDown} from 'react-icons/fa';
import Menu from "../Labsmanagement/Menu";
import Pagination from '../Dhamanagement/Pagination';

export const Labmanagement = () => {
    
   
    /* Logic For Switch Vaccine to Medicine */
    const [activateTab, setActivateTab] = useState("Urgent");

    const handleTabClick = (tab) => {
        setActivateTab(tab);
      };
  return (
    <>
    <div className=''><Navbar/></div>
    <div className='bg-[#F4F4F4] w-[100%] pt-[20px]'>
        <div className='flex justify-between items-center '>
            <div className='flex justify-start items-center ml-[70px]'><h2 className='text-[#1A1C1F] font-bold font-montserrat text-[22px] flex justify-center items-center '><PiArrowLeftFill className='pr-[10px] justify-center items-center text-[30px]'/>Lab Management</h2></div>
            <div className='flex justify-end items-center mr-[70px]'>
            <div className='mr-[10px]'><Link to={"/labdetails"}><button className='bg-[#E40443] w-[168px] h-[38px] border-none rounded-[6px] text-[white] text-[15px] font-medium font-montserrat'>View Lab Details</button></Link></div>
            <div className=''><Link to={"/addlab"}><button className='bg-[#E40443] w-[168px] h-[38px] border-none rounded-[6px] text-[white] text-[15px] font-medium font-montserrat'>Add Lab</button></Link></div>
            </div>
        </div>
        <div className='flex justify-between ml-[70px] mr-[70px] border-b-[1px] border-b-solid border-b-[#E1E5E8] mt-[20px]'>
            <div className='flex justify-start items-center'>
        
            <div className={`text-[#E40443] text-[16px] font-semibold font-montserrat
            ${
                activateTab === "Urgent" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
              }`}
              onClick={() => handleTabClick("Urgent")}
            
            >Urgent</div>
        
            <div className={`text-[#E40443] text-[16px] font-semibold font-montserrat ml-[10px]
            ${
                activateTab === "Nonurgent" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
              }`}
              onClick={() => handleTabClick("Nonurgent")}
            
            
            >Non-urgent</div>
            
            
            <div className={`text-[#E40443] text-[16px] font-semibold font-montserrat ml-[10px]
             ${
                activateTab === "Standalone" ? "font-bold, border-b-[2px] border-b-solid border-b-[#E40443]" : "text-gray-400"
              }`}
              onClick={() => handleTabClick("Standalone")}
            
            
            >Standalone</div>
            
            </div>
            
            </div>
            <div className="">
                {activateTab === "Urgent" && <Urgent/>}
                {activateTab === "Nonurgent" && <Nonurgent />}
                {activateTab === "Standalone" && <Standalone />}
          
            </div>
</div>

    <div className='lab_footer'><Footer/></div>
    </>
  );
};

const Urgent = () => {

    const [isActive, setIsActive]= useState(false);
    const [items,setItems] = useState(Menu);

    const filterItem = (categItem) =>{
        const updatedItem = Menu.filter((curElem) =>{
            return curElem.category === categItem;
        });
        setItems(updatedItem);
    }
    return(
        <>
        <div className='mt-[-25px] flex justify-end items-center mr-[70px]'>
        <div className='flex justify-end items-center font-montserrat font-medium text-[18px] text-[#1A1C1F]' onClick={(e)=> setIsActive(!isActive)}>All <FaCaretDown/></div>
        {isActive &&(
            <div className='labmanagement_dropdown_content_drop'>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop' onClick={() =>setItems (Menu)}>All</div>
            </Link>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop'onClick={() =>filterItem ('pending')}>Pending</div>
            </Link>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop' onClick={() =>filterItem ('completed')}>Completed</div>
            </Link>
            </div>
      )}
    </div>

<div className='ml-[70px] mr-[70px] flex flex-wrap gap-[38px] mt-[20px]'>

    {
        items.map((elem) =>{
            const {id,button}=elem;
            return(
                <Link to={"/labbooking"} className='labmanagement_link'>
                <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px] h-[147px]'>
                    <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                        <div className='flex justify-between items-center mt-[10px]'>
                            <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                            <div className='flex justify-end mr-[10px]'>
                                <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat'>13 June, 2023</div>
                                <div className='text-[#5B6572] text-[12px] font-medium font-montserrat'>09:00AM</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-[10px] mb-[10px]'>
                            <div className='flex justify-start ml-[10px]'>
                                <div className='border-r-[2px] border-r-solid border-r-[#E40443]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Test 1</div></div>
                                <div className='border-r-[2px] border-r-solid border-r-[#E40443] ml-[5px]'> <div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Test 2 </div></div>
                                <div className='ml-[5px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Test 3</div></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-center mt-[5px]'>
                        <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px]'>
                            <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                        </div>
                        <div className='w-[284px] mt-[10px] mb-[10px] ml-[20px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat'>Patient Name</div>
                              
                                <div className='flex justify-end ml-[20px]'>
                                {
                                    button.map((btn) => {
                                        const {name,color,colors} =btn;
                                        return(
                                           <div >
                                           <button className='rounded-[24px] border-none h-[20px] w-[80px] text-[10px] font-medium font-montserrat'  style={{color:color,background:colors}}> {name}
                                           
                                            
                                            </button>
                                            </div>
                                        )
                                    })
                                }
                                   </div> 
                            </div>
                            <div className='flex justify-between items-center mt-[5px]'>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-start'>
                            XYZ, street name, City
                            </div>
                            <div className='flex justify-end text-[#5B6572] text-[12px] font-medium font-montserrat'>Earning 400</div>
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
    )
}
            
const Nonurgent = () =>{
    const [isActive, setIsActive]= useState(false);
    const [items,setItems] = useState(Menu);

    const filterItem = (categItem) =>{
        const updatedItem = Menu.filter((curElem) =>{
            return curElem.category === categItem;
        });
        setItems(updatedItem);
    }


        return(
            <>
        <div className='mt-[-25px] flex justify-end items-center mr-[70px]'>
        <div className='flex justify-end items-center font-montserrat font-medium text-[18px] text-[#1A1C1F]' onClick={(e)=> setIsActive(!isActive)}>All <FaCaretDown/></div>
        {isActive &&(
            <div className='labmanagement_dropdown_content_drop'>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop' onClick={() =>setItems (Menu)}>All</div>
            </Link>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop'onClick={() =>filterItem ('pending')}>Pending</div>
            </Link>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop' onClick={() =>filterItem ('completed')}>Completed</div>
            </Link>
            </div>
      )}
    </div>

<div className='ml-[70px] mr-[70px] flex flex-wrap gap-[38px] mt-[20px]'>

    {
        items.map((elem) =>{
            const {id,button}=elem;
            return(
                <Link to={"/labbooking"} className='labmanagement_link'>
                <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px] h-[147px]'>
                    <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                        <div className='flex justify-between items-center mt-[10px]'>
                            <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                            <div className='flex justify-end mr-[10px]'>
                                <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat'>13 June, 2023</div>
                                <div className='text-[#5B6572] text-[12px] font-medium font-montserrat'>09:00AM</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-[10px] mb-[10px]'>
                            <div className='flex justify-start ml-[10px]'>
                                <div className='border-r-[2px] border-r-solid border-r-[#E40443]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Test 1</div></div>
                                <div className='border-r-[2px] border-r-solid border-r-[#E40443] ml-[5px]'> <div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Test 2 </div></div>
                                <div className='ml-[5px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Test 3</div></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-center mt-[5px]'>
                        <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px]'>
                            <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                        </div>
                        <div className='w-[284px] mt-[10px] mb-[10px] ml-[20px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat'>Patient Name</div>
                              
                                <div className='flex justify-end ml-[20px]'>
                                {
                                    button.map((btn) => {
                                        const {name,color,colors} =btn;
                                        return(
                                           <div >
                                           <button className='rounded-[24px] border-none h-[20px] w-[80px] text-[10px] font-medium font-montserrat'  style={{color:color,background:colors}}> {name}
                                           
                                            
                                            </button>
                                            </div>
                                        )
                                    })
                                }
                                   </div> 
                            </div>
                            <div className='flex justify-between items-center mt-[5px]'>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-start'>
                            XYZ, street name, City
                            </div>
                            <div className='flex justify-end text-[#5B6572] text-[12px] font-medium font-montserrat'>Earning 400</div>
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
    
        )
}
    
const Standalone = () => {

    const [isActive, setIsActive]= useState(false);
    const [items,setItems] = useState(Menu);

    const filterItem = (categItem) =>{
        const updatedItem = Menu.filter((curElem) =>{
            return curElem.category === categItem;
        });
        setItems(updatedItem);
    }
    return(
        <>
        <div className='mt-[-25px] flex justify-end items-center mr-[70px]'>
        <div className='flex justify-end items-center font-montserrat font-medium text-[18px] text-[#1A1C1F]' onClick={(e)=> setIsActive(!isActive)}>All <FaCaretDown/></div>
        {isActive &&(
            <div className='labmanagement_dropdown_content_drop'>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop' onClick={() =>setItems (Menu)}>All</div>
            </Link>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop'onClick={() =>filterItem ('pending')}>Pending</div>
            </Link>
            <Link to={""} className='labmanagement_dropdown_link'>
            <div className='labmanagement_dropdown_item_drop' onClick={() =>filterItem ('completed')}>Completed</div>
            </Link>
            </div>
      )}
    </div>

<div className='ml-[70px] mr-[70px] flex flex-wrap gap-[38px] mt-[20px]'>

    {
        items.map((elem) =>{
            const {id,button}=elem;
            return(
                <Link to={"/labbooking"} className='labmanagement_link'>
                <div className='border-[1px] border-solid border-[#D3D3D3] rounded-[12px] bg-[white] w-[380px] h-[147px]'>
                    <div className='border-b-[1px] border-b-solid border-b-[#E4E4E4]'>
                        <div className='flex justify-between items-center mt-[10px]'>
                            <div className='flex justify-start text-[#E40443] text-[18px] font-semibold font-montserrat ml-[10px]'>#123456</div>
                            <div className='flex justify-end mr-[10px]'>
                                <div className='mr-[5px] text-[#5B6572] text-[12px] font-medium font-montserrat'>13 June, 2023</div>
                                <div className='text-[#5B6572] text-[12px] font-medium font-montserrat'>09:00AM</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-[10px] mb-[10px]'>
                            <div className='flex justify-start ml-[10px]'>
                                <div className='border-r-[2px] border-r-solid border-r-[#E40443]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Test 1</div></div>
                                <div className='border-r-[2px] border-r-solid border-r-[#E40443] ml-[5px]'> <div className='text-[#E40443] text-[12px] font-semibold font-montserrat mr-[5px]'>Test 2 </div></div>
                                <div className='ml-[5px]'><div className='text-[#E40443] text-[12px] font-semibold font-montserrat '>Test 3</div></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-center mt-[5px]'>
                        <div className='ml-[10px] flex justify-start mt-[10px] mb-[10px]'>
                            <img src={pharimg} alt="" className='w-[48px] h-[48px]'/>
                        </div>
                        <div className='w-[284px] mt-[10px] mb-[10px] ml-[20px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-start text-[#1A1C1F] text-[18px] font-semibold font-montserrat'>Patient Name</div>
                              
                                <div className='flex justify-end ml-[20px]'>
                                {
                                    button.map((btn) => {
                                        const {name,color,colors} =btn;
                                        return(
                                           <div >
                                           <button className='rounded-[24px] border-none h-[20px] w-[80px] text-[10px] font-medium font-montserrat'  style={{color:color,background:colors}}> {name}
                                           
                                            
                                            </button>
                                            </div>
                                        )
                                    })
                                }
                                   </div> 
                            </div>
                            <div className='flex justify-between items-center mt-[5px]'>
                            <div className='text-[#5B6572] text-[12px] font-medium font-montserrat flex justify-start'>
                            XYZ, street name, City
                            </div>
                            <div className='flex justify-end text-[#5B6572] text-[12px] font-medium font-montserrat'>Earning 400</div>
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
    )
}
export default Labmanagement
