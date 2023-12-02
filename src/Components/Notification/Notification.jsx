import React from 'react';
import './Notification.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import avatar1 from '../Assets/Label Initials.png';
import avatar2 from '../Assets/Avatar (1).png';
import avatar3 from '../Assets/Avatar.png';
import avatar4 from '../Assets/Avatar (2).png';
import avatar5 from '../Assets/Avatar (3).png';

export const Notification = () => {
  return (
    <>
    <div className='notification'><Navbar/></div>
    <div className='notification_container'>
        <div className='notification_pharma_edit_heading_basic'><h2><Link to={""} className='notification_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='notification_arrow_edit_basic'/></Link>Notifications</h2></div>
        <div className='notification_container_2'>
          <div className='notification_container_2_1'>
            <div className='notification_container_2_1_right'>
              <div className='notification_container_2_1_right_1'>Mark all as read</div>
              <div className='notification_container_2_1_right_2'>clear all</div>
              <div className='notification_container_2_1_right_3'>1-10 of 10</div>
              <div className='notification_container_2_1_right_4'>hfjd</div>

            </div>

          </div>
          <div className='notification_container_2_2'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar1} alt="" /></div>
              <div className='notification_container_2_2_left_2'>John(DHA) has assigned you Doctor for your symptoms for fever and other issue</div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
          <div className='notification_container_2_3'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar3} alt="" /></div>
              <div className='notification_container_2_2_left_2'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
          <div className='notification_container_2_3'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar2} alt="" /></div>
              <div className='notification_container_2_2_left_2'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
          <div className='notification_container_2_3'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar4} alt="" /></div>
              <div className='notification_container_2_2_left_2'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
          <div className='notification_container_2_3'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar1} alt="" /></div>
              <div className='notification_container_2_2_left_2'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
          <div className='notification_container_2_3'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar5} alt="" /></div>
              <div className='notification_container_2_2_left_2'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
          <div className='notification_container_2_3'>
            <div className='notification_container_2_2_left'>
              <div className='notification_container_2_2_left_1'><img src={avatar3} alt="" /></div>
              <div className='notification_container_2_2_left_2'>Lorem ipsum dolor sit amet, </div>
            </div>
            <div className='notification_container_2_2_right'>
              <div className='notification_container_2_2_right_1'>25-07-2023</div>
              <div className='notification_container_2_2_right_2'>05:10 AM</div>
            </div>

          </div>
            
        </div>

    </div>
    </>
  )
}
export default Notification
