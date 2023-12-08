import React from 'react';
import './Notificationcomplete.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {PiArrowLeftFill} from 'react-icons/pi';
import {Link} from 'react-router-dom';
import mobile from '../Assets/OBJECTS.png';

export const Notificationcomplete = () => {
  return (
    <>
    <div className='notification_complete'><Navbar/></div>
    <div className='notification_complete_container'>

      <div className='notification_complete_pharma_edit_heading_basic'><h2><Link to={"/notification"} className='notification_complete_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='notification_complete_arrow_edit_basic'/></Link>Notifications</h2></div>
      <div className='notification_complete_container_2'>
          <div className='notification_complete_container_2_1'>
            <div className='notification_container_2_1_right'>
              <div className='notification_complete_container_2_1_right_1'>Mark all as read</div>
              <div className='notification_complete_container_2_1_right_2'>clear all</div>
              <div className='notification_complete_container_2_1_right_3'>1-10 of 10</div>
              <div className='notification_complete_container_2_1_right_4'>hfjd</div>

            </div>

          </div>
          <div className='notification_complete_container_2_2'>
            <div className='notification_complete_container_2_2_up'><img src={mobile} alt="" /></div>
            <div className='notification_complete_container_2_2_down'>"No new notifications at the moment. Stay tuned for updates!"</div>
          </div>

         

      </div>
      
    </div>
    
    </>
  )
}
export default Notificationcomplete
