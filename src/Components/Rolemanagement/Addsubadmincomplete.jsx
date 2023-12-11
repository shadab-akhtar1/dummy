import React from 'react';
import './Addsubadmincomplete.css';
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Addsubadmincomplete = () => {
  return (
    <>
      <div className='addsubadmincompleted'>
        <div className='addsubadmincompleted_container'>
            <Link to={"/addsubadmin"} className='cross_link_addsubadmincomplete'><div className='addsubadmincomplete_cross'><RxCross2/></div></Link>
          <div className='addsubadmincompleted_container_1'>
                <div className='addsubadmincompleted_container_1_left'>Add Sub Admin</div>
          </div>
          <div className='addsubadmincompleted_container_2'>
                <span className='addsubadmincompleted_container_2_1'>01</span>
                <span className='addsubadmincompleted_container_2_2'>02</span>
                <div className='addsubadmincompleted_container_2_progress'> 
                    <span className='addsubadmincompleted_container_2_indicator'></span>
                </div>

            </div>
            <form action="" className='addsubadmincompleted_form'>
            <div className='addsubadmincompleted_form_3'>
                    <div className='addsubadmincompleted_form_3_1'>General Permission</div>
                    <div className='addsubadmincompleted_form_3_2'>
                        <p>Permission 1</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_input_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_form_3_2'>
                        <p>Permission 2</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_input_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_form_3_2'>
                        <p>Permission 3</p>
                        <label >
                            <input type="checkbox" className='addsubadmincompleted_input_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_form_3_1'>User Permission</div>
                    <div className='addsubadmincompleted_form_3_2'>
                        <p>Permission 4</p>
                        <label >
                            <input type="checkbox" checked className='addsubadmincompleted_inp'/>
                        </label>
                    </div>
                    <div className='addsubadmincompleted_form_3_2'>
                        <p>Permission 5</p>
                        <label >
                            <input type="checkbox" checked/>
                        </label>
                    </div>

                </div>
                <button className='addsubadmincompleted_btn'>Add Sub-Admin</button>

            </form>

        </div>
      </div>
    </>
  )
}
export default Addsubadmincomplete
