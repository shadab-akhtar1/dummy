import React from 'react';
import './Editpermision.css';
import profile_logo from '../Assets/Ellipse 2.svg';
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Editpermision = () => {
  return (
    <>
    <div className='editpermision'>
      <div className='editpermision_container'>
      <Link to={"/rolemanagement"} className='cross_link_editpermision'><div className='editpermision_cross'><RxCross2/></div></Link>
            <div className='editpermision_container_1'>
                <div className='editpermision_container_1_left'>Edit Permision</div>
            </div>
            <div className='editpermision_container_2'>
              <div className='editpermision_container_2_1'>
                <div className='editpermision_container_2_1_image'><img src={profile_logo} alt="" /></div>
                <div className='editpermision_container_2_1_para'>Jacob Jones</div>
              </div>
              <div className=''>
                <select name="" id="" placeholder='Booking Manager' className='editpermision_container_2_2'>
                  <option value="">Booking manager</option>

                </select>
              </div>
            </div>
            <form action="" className='editpermision_form'>
            <div className='addsubadmincompleted_editpermision_form_3'>
                    <div className='addsubadmincompleted_editpermision_form_3_1'>General Permission</div>
                    <div className='addsubadmincompleted_editpermision_form_3_2'>
                        <p>Permission 1</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_editpermision_input_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_editpermision_form_3_2'>
                        <p>Permission 2</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_editpermision_input_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_editpermision_form_3_2'>
                        <p>Permission 3</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_editpermision_input_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_editpermision_form_3_1'>User Permission</div>
                    <div className='addsubadmincompleted_editpermision_form_3_2'>
                        <p>Permission 4</p>
                        <label >
                            <input type="checkbox" checked className='addsubadmincompleted_editpermision_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_editpermision_form_3_2'>
                        <p>Permission 5</p>
                        <label >
                            <input type="checkbox" checked/>
                        </label>
                    </div>

                </div>
                <button className='addsubadmincompleted_editpermision_btn'>Add Sub-Admin</button>
            </form>
      </div>
    </div>
    
    </>
  )
}
export default Editpermision
