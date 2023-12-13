import React from 'react';
import './Managerole.css';
import { RiPencilFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Managerole = () => {
  return (
    <>
    <div className='manage_role'>
        <div className='manage_role_container'>
                <Link to={"/addrole"} className='cross_link_managerole'><div className='managerole_cross'><RxCross2/></div></Link>
            <div className='manage_role_container_1'>
                <div className='manage_role_container_1_left'>Manage Role</div>
            </div>
            <div className='manage_role_container_2'>
                <div className='manage_role_container_2_1'>All Roles</div>
                <div className='manage_role_container_2_2'>
                    <div className='manage_role_container_2_2_left'>Doctor</div>
                    <div className='manage_role_container_2_2_right'>
                        <div className='manage_role_container_2_first_icon'><RiPencilFill className='manage_role_contain_icon_inner'/></div>
                        <div className='manage_role_container_2_second_icon'><RiDeleteBin5Fill className='manage_role_contain_icon_inner_2'/></div>
                    </div>
                </div>
           
        
                <div className='manage_role_container_2_2'>
                    <div className='manage_role_container_2_2_left'>DHA</div>
                    <div className='manage_role_container_2_2_right'>
                        <div className='manage_role_container_2_first_icon'><RiPencilFill className='manage_role_contain_icon_inner'/></div>
                        <div className='manage_role_container_2_second_icon'><RiDeleteBin5Fill className='manage_role_contain_icon_inner_2'/></div>
                    </div>
                </div>
            
                <div className='manage_role_container_2_2'>
                    <div className='manage_role_container_2_2_left'>Pharmacy</div>
                    <div className='manage_role_container_2_2_right'>
                        <div className='manage_role_container_2_first_icon'><RiPencilFill className='manage_role_contain_icon_inner'/></div>
                        <div className='manage_role_container_2_second_icon'><RiDeleteBin5Fill className='manage_role_contain_icon_inner_2'/></div>
                    </div>
                </div>
                <div className='manage_role_container_2_2'>
                    <div className='manage_role_container_2_2_left'>Front Desk</div>
                    <div className='manage_role_container_2_2_right'>
                        <div className='manage_role_container_2_first_icon'><RiPencilFill className='manage_role_contain_icon_inner'/></div>
                        <div className='manage_role_container_2_second_icon'><RiDeleteBin5Fill className='manage_role_contain_icon_inner_2'/></div>
                    </div>
                </div>
            
                <div className='manage_role_container_2_2'>
                    <div className='manage_role_container_2_2_left'>Hospital Admin</div>
                    <div className='manage_role_container_2_2_right'>
                        <div className='manage_role_container_2_first_icon'><RiPencilFill className='manage_role_contain_icon_inner'/></div>
                        <div className='manage_role_container_2_second_icon'><RiDeleteBin5Fill className='manage_role_contain_icon_inner_2'/></div>
                    </div>
                </div>
            
            
                <div className='manage_role_container_2_2'>
                    <div className='manage_role_container_2_2_left'>Hospital Sub Admin</div>
                    <div className='manage_role_container_2_2_right'>
                        <div className='manage_role_container_2_first_icon'><RiPencilFill className='manage_role_contain_icon_inner'/></div>
                        <div className='manage_role_container_2_second_icon'><RiDeleteBin5Fill className='manage_role_contain_icon_inner_2'/></div>
                    </div>
                </div>
            </div>
            <button className='manage_role_btn'>Save</button>
            
        </div>
    </div>
    
    </>
  )
}
export default Managerole;