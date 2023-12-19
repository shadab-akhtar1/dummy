import React,{useState} from 'react';
import './Labstandalone.css';
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

export const Labstandalone = () => {
    const [isActive, setIsActive]= useState(false);
  return (
    <>
    <div className='labstandalone_managemenet'><Navbar/></div>
    <div className='labstandalone_management_container'>
        <div className='labstandalone_management_container_1'>
            <div className='labstandalone_management_heading_box_1'><h2><Link to={"/labnonurgent"}><PiArrowLeftFill className='labstandalone_management_left_arrow'/></Link>Lab Management</h2></div>
            <div className='labstandalone_management_heading_box_2'><Link to={"/labdetails"}><button>View Lab Details</button></Link></div>
        </div>
        <div className='labstandalone_management_container_2'>
            <div className='labstandalone_management_container_2_up'>
            <Link to={"/labmanagement"} className='standalone_link'>
            <div className='labstandalone_management_container_2_p_1'>Urgent</div>
            </Link>
            <Link to={"/labnonurgent"} className='standalone_link'>
            <div className='labstandalone_management_container_2_p_2'>Non-urgent</div>
            </Link>
            <div className='labstandalone_management_container_2_p_3'>Standalone</div>
            </div>
            <div className='labstandalone_management_container_2_down'>
                <div className='labstandalone_management_all' onClick={(e)=> setIsActive(!isActive)}>All <FaCaretDown/></div>
                {isActive &&(
                    <div className='labnonurgent_dropdown_content_drop'>
                    <Link to={""} className='labnonurgent_dropdown_link'>
                    <div className='labnonurgent_dropdown_item_drop'>All</div>
                    </Link>
                    <Link to={""} className='labnonurgent_dropdown_link'>
                    <div className='labnonurgent_dropdown_item_drop'>Pending</div>
                    </Link>
                    <Link to={""} className='labnonurgent_dropdown_link'>
                    <div className='labnonurgent_dropdown_item_drop'>Requested</div>
                    </Link>
                    </div>
              )}
            </div>
        </div>
        <div className='labstandalone_management_container_3_all'>All</div>
        <div className='labstandalone_management_container_3'>
            
            <div className='labstandalone_management_container_3_1'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>Test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>Test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn'>Pending</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='labstandalone_management_container_3_2'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>Test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>Test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn_2'>Completed</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='labstandalone_management_container_3_3'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>Test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>Test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn'>Pending</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='labstandalone_management_container_3_4'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn_2'>Completed</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

            <div className='labstandalone_management_container_3_5'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn'>Pending</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

            <div className='labstandalone_management_container_3_6'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn_2'>Completed</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

            <div className='labstandalone_management_container_3_7'>
                <div className='labstandalone_management_container_3_1_up'>
                    <div className='labstandalone_management_container_3_1_up_box'>
                        <div className='labstandalone_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labstandalone_management_container_3_1_up_box_right'>
                            <div className='labstandalone_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labstandalone_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labstandalone_management_container_3_1_up_box2'>
                        <div className='labstandalone_management_container_3_1_up_box2_left'>
                            <div className='labstandalone_management_container_3_1_up_box2_left_1'><div className='labstandalone_vaac_1'>Test 1</div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_2'> <div className='labstandalone_vaac_2'>test 2 </div></div>
                            <div className='labstandalone_management_container_3_1_up_box2_left_3'><div className='labstandalone_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labstandalone_management_container_3_1_down'>
                    <div className='labstandalone_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labstandalone_management_container_3_1_down_right'>
                        <div className='labstandalone_management_container_3_1_down_right_up'>
                            <div className='labstandalone_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labstandalone_management_container_3_1_down_right_up_btn'><button className='labstandalone_btn'>Pending</button></div>
                        </div>
                        <div className='labstandalone_management_container_3_1_down_right_down'>
                        <div className='labstandalone_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labstandalone_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

        </div>

        <div className='labstandalone_pagination'>
                    <a href='' className='labstandalone_anchi'><PiCaretDoubleLeftBold className='labstandalone_less_1'/></a>
                    <a href='' className='labstandalone_anchi'><PiCaretLeftBold className='labstandalone_less_doctor'/></a>
                    <a href=''className='labstandalone_anch_active'>1</a>
                    <a href='' className='labstandalone_anchi'>2</a>
                    <a href='' className='labstandalone_anchi'>3</a>
                    <a href='' className='labstandalone_anchi'>...</a>
                    <a href='' className='labstandalone_anchi'>10</a>
                    <a href='' className='labstandalone_anchi'><PiCaretRightBold className='labstandalone_less_doctor'/></a>
                    <a href='' className='labstandalone_anchi'><PiCaretDoubleRightBold className='labstandalone_less_doctor'/></a>

                </div>

    </div>
    <div className='labstandalone_footer'><Footer/></div>
    </>
  )
}
export default Labstandalone