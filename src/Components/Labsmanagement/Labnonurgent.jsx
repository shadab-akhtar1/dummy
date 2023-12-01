import React from 'react';
import './Labnonurgent.css';
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

export const Labnonurgent = () => {
  return (
    <>
    <div className='labnonurgent_managemenet'><Navbar/></div>
    <div className='labnonurgent_management_container'>
        <div className='labnonurgent_management_container_1'>
            <div className='labnonurgent_management_heading_box_1'><h2><Link to={"/labmanagement"}><PiArrowLeftFill className='labnonurgent_management_left_arrow'/></Link>Lab Management</h2></div>
            <div className='labnonurgent_management_heading_box_2'><Link to={"/labdetails"}><button>View Lab Details</button></Link></div>
        </div>
        <div className='labnonurgent_management_container_2'>
            <div className='labnonurgent_management_container_2_up'>
            <Link to={"/labmanagement"} className='urgentlab_link'>
            <div className='labnonurgent_management_container_2_p_1'>Urgent</div>
            </Link>
        
            <div className='labnonurgent_management_container_2_p_2'>Non-urgent</div>
            <Link to={"/labstandalone"} className='urgentlab_link'>
            <div className='labnonurgent_management_container_2_p_3'>Standalone</div>
            </Link>
            </div>
            <div className='labnonurgent_management_container_2_down'>
                <div className='labnonurgent_management_all'>All <FaCaretDown/></div>

            </div>
        </div>
        <div className='labnonurgent_management_container_3_all'>All</div>
        <div className='labnonurgent_management_container_3'>
            
            <div className='labnonurgent_management_container_3_1'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>Test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>Test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn'>Pending</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='labnonurgent_management_container_3_2'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>Test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>Test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn_2'>Completed</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='labnonurgent_management_container_3_3'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>Test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>Test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn'>Pending</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='labnonurgent_management_container_3_4'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn_2'>Completed</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

            <div className='labnonurgent_management_container_3_5'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn'>Pending</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

            <div className='labnonurgent_management_container_3_6'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn_2'>Completed</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

            <div className='labnonurgent_management_container_3_7'>
                <div className='labnonurgent_management_container_3_1_up'>
                    <div className='labnonurgent_management_container_3_1_up_box'>
                        <div className='labnonurgent_management_container_3_1_up_box_left'>#123456</div>
                        <div className='labnonurgent_management_container_3_1_up_box_right'>
                            <div className='labnonurgent_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='labnonurgent_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='labnonurgent_management_container_3_1_up_box2'>
                        <div className='labnonurgent_management_container_3_1_up_box2_left'>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_1'><div className='labnonurgent_vaac_1'>Test 1</div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_2'> <div className='labnonurgent_vaac_2'>test 2 </div></div>
                            <div className='labnonurgent_management_container_3_1_up_box2_left_3'><div className='labnonurgent_vaac_3'>test 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='labnonurgent_management_container_3_1_down'>
                    <div className='labnonurgent_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='labnonurgent_management_container_3_1_down_right'>
                        <div className='labnonurgent_management_container_3_1_down_right_up'>
                            <div className='labnonurgent_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='labnonurgent_management_container_3_1_down_right_up_btn'><button className='labnonurgent_btn'>Pending</button></div>
                        </div>
                        <div className='labnonurgent_management_container_3_1_down_right_down'>
                        <div className='labnonurgent_management_container_3_1_down_right_down_left'>
                        XYZ, street name, City
                        </div>
                        <div className='labnonurgent_management_3_1_down_right_down_right'>Earning 400</div>
                        </div>

                    </div>
                </div>

                

            </div>

        </div>

        <div className='labnonurgent_pagination'>
                    <a href='' className='labnonurgent_anchi'><PiCaretDoubleLeftBold className='labnonurgent_less_1'/></a>
                    <a href='' className='labnonurgent_anchi'><PiCaretLeftBold className='labnonurgent_less_doctor'/></a>
                    <a href=''className='labnonurgent_anch_active'>1</a>
                    <a href='' className='labnonurgent_anchi'>2</a>
                    <a href='' className='labnonurgent_anchi'>3</a>
                    <a href='' className='labnonurgent_anchi'>...</a>
                    <a href='' className='labnonurgent_anchi'>10</a>
                    <a href='' className='labnonurgent_anchi'><PiCaretRightBold className='labnonurgent_less_doctor'/></a>
                    <a href='' className='labnonurgent_anchi'><PiCaretDoubleRightBold className='labnonurgent_less_doctor'/></a>

                </div>

    </div>
    <div className='labnonurgent_footer'><Footer/></div>
    </>
  )
}
export default Labnonurgent
