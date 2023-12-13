import React from 'react'
import './Pendingaddquotation3.css';
import docimg from '../Assets/image 201.png';
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";


export const Pendingaddquotation3 = () => {
  return (
    <>
   <div className='addquotation3'>
    <div className='addquotation3_container'>
    <Link to={"/pendingpharmacycase1"} className='cross_link_pendingaddquotation3'><div className='pendingaddquotation3_cross'><RxCross2/></div></Link>
        <img src={docimg} alt="" />

    </div>

   </div>
    </>
  )
}
export default Pendingaddquotation3
