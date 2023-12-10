import React from 'react';
import './Addrole.css';
import { Link } from "react-router-dom";

export const Addrole = () => {
  return (
    <>
    <div className='addrole'>
        <div  className='addrole_container'>
            <div className='addrole_container_1'>
                <div className='addrole_container_1_left'>Add Role</div>
                <Link to={"/managerole"} className='managerole_link'>
                <div className='addrole_container_1_right'>Manage</div>
                </Link>
            </div>

            <form className='addrole_form'>
                <div className='addrole_form_1'>
                    <label className='addrole_form_label'>Role Name</label>
                    <select className='addrole_form_select' placeholder='Enter Role Name'>
                        <option>Doctor</option>
                        <option>DHA</option>
                        <option>Pharmacy</option>
                        <option>Lab</option>
                        <option>Front Desk</option>
                        <option>Hospital Admin</option>
                        <option>Hospital Sub Admin</option>
                    </select>
                </div>

                <div className='addrole_form_2'>
                    <label className='addrole_form_label_1'>Additional Note</label>
                    <input type="text" className='addrole_form_input' placeholder='Write here'/>

                </div>
                <div className='addrole_form_3'>
                    <div className='addrole_form_3_1'>General Permission</div>
                    <div className='addrole_form_3_2'>
                        <p>Permission 1</p>
                        <label >
                            <input type="checkbox" className='addrole_input_inp'/>
                        </label>
                    </div>
                    <div className='addrole_form_3_2'>
                        <p>Permission 2</p>
                        <label >
                            <input type="checkbox" className='addrole_input_inp'/>
                        </label>
                    </div>
                    <div className='addrole_form_3_2'>
                        <p>Permission 3</p>
                        <label >
                            <input type="checkbox" className='addrole_input_inp'/>
                        </label>
                    </div>
                    <div className='addrole_form_3_1'>User Permission</div>
                    <div className='addrole_form_3_2'>
                        <p>Permission 4</p>
                        <label >
                            <input type="checkbox" checked className='addrole_inp'/>
                        </label>
                    </div>
                    <div className='addrole_form_3_2'>
                        <p>Permission 5</p>
                        <label >
                            <input type="checkbox" checked/>
                        </label>
                    </div>

                </div>
                <button className='addrole_btn'>Add Role</button>
                

            </form>

        </div>

    </div>
    </>
  )
}
export default Addrole