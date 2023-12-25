import React,{useState} from 'react';
import './Labmanagement.css';
import {Navbar} from '../Dhamanagement/Navbar';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {FaCaretDown} from 'react-icons/fa';
import Menu from "../Labsmanagement/Menu";
import lab from '../Labsmanagement/Lab.json';

export const Labmanagement = () => {
    const [isActive, setIsActive]= useState(false);
    const [items,setItems] = useState(Menu);

    const filterItem = (categItem) =>{
        const updatedItem = Menu.filter((curElem) =>{
            return curElem.category === categItem;
        });
        setItems(updatedItem);
    }
   
  return (
    <>
    <div className='lab_managemenet'><Navbar/></div>
    <div className='lab_management_container'>
        <div className='lab_management_container_1'>
            <div className='lab_management_heading_box_1'><h2><PiArrowLeftFill className='lab_management_left_arrow'/>Lab Management</h2></div>
            <div className='lab_management_header_box'>
            <div className='lab_management_heading_box_2_1'><Link to={"/labdetails"}><button>View Lab Details</button></Link></div>
            <div className='lab_management_heading_box_2'><Link to={"/addlab"}><button>Add Lab</button></Link></div>
            </div>
        </div>
        <div className='lab_management_container_2'>
            <div className='lab_management_container_2_up'>
        
            <div className='lab_management_container_2_p_1'>Urgent</div>
            <Link to={"/labnonurgent"} className='lab_non_urgent_link'>
            <div className='lab_management_container_2_p_2'>Non-urgent</div>
            </Link>
            <Link to={"/labstandalone"} className='lab_non_urgent_link'>
            <div className='lab_management_container_2_p_2'>Standalone</div>
            </Link>
            </div>
            <div className='lab_management_container_2_down'>
                <div className='lab_management_all' onClick={(e)=> setIsActive(!isActive)}>All <FaCaretDown/></div>
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
        </div>
        <div className='lab_management_container_3_all'>All</div>
        <div className='lab_management_container_3'>

            {
                items.map((elem) =>{
                    const {id,button}=elem;
                    return(
                        <Link to={"/labbooking"} className='labmanagement_link'>
                        <div className='lab_management_container_3_1'>
                            <div className='lab_management_container_3_1_up'>
                                <div className='lab_management_container_3_1_up_box'>
                                    <div className='lab_management_container_3_1_up_box_left'>#123456</div>
                                    <div className='lab_management_container_3_1_up_box_right'>
                                        <div className='lab_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                                        <div className='lab_management_container_3_1_up_box_right_2'>09:00AM</div>
                                    </div>
                                </div>
                                <div className='lab_management_container_3_1_up_box2'>
                                    <div className='lab_management_container_3_1_up_box2_left'>
                                        <div className='lab_management_container_3_1_up_box2_left_1'><div className='lab_vaac_1'>Test 1</div></div>
                                        <div className='lab_management_container_3_1_up_box2_left_2'> <div className='lab_vaac_2'>Test 2 </div></div>
                                        <div className='lab_management_container_3_1_up_box2_left_3'><div className='lab_vaac_3'>Test 3</div></div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='lab_management_container_3_1_down'>
                                <div className='lab_management_container_3_1_down_left'>
                                    <img src={pharimg} alt="" />
                                </div>
                                <div className='lab_management_container_3_1_down_right'>
                                    <div className='lab_management_container_3_1_down_right_up'>
                                        <div className='lab_management_container_3_1_down_right_up_text'>Patient Name</div>
                                      
                                        <div className='lab_management_container_3_1_down_right_up_btn'>
                                        {
                                            button.map((btn) => {
                                                const {name,color,colors} =btn;
                                                return(
                                                   <div >
                                                   <button className='lab_btn'  style={{color:color,background:colors}}> {name}
                                                   
                                                    
                                                    </button>
                                                    </div>
                                                )
                                            })
                                        }
                                           </div> 
                                    </div>
                                    <div className='lab_management_container_3_1_down_right_down'>
                                    <div className='lab_management_container_3_1_down_right_down_left'>
                                    XYZ, street name, City
                                    </div>
                                    <div className='lab_management_3_1_down_right_down_right'>Earning 400</div>
                                    </div>
            
                                </div>
                            </div>
            
                        </div>
                        </Link>
                    )
                })
            }

        </div>

        <div className='lab_pagination'>
                    <a href='' className='lab_anchi'><PiCaretDoubleLeftBold className='lab_less_1'/></a>
                    <a href='' className='lab_anchi'><PiCaretLeftBold className='lab_less_doctor'/></a>
                    <a href=''className='lab_anch_active'>1</a>
                    <a href='' className='lab_anchi'>2</a>
                    <a href='' className='lab_anchi'>3</a>
                    <a href='' className='lab_anchi'>...</a>
                    <a href='' className='lab_anchi'>10</a>
                    <a href='' className='lab_anchi'><PiCaretRightBold className='lab_less_doctor'/></a>
                    <a href='' className='lab_anchi'><PiCaretDoubleRightBold className='lab_less_doctor'/></a>

                </div>

    </div>
    <div className='lab_footer'><Footer/></div>
    </>
  )
}

export default Labmanagement
