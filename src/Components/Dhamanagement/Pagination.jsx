import React from 'react';
import './Pagination.css';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';

export const Pagination = () => {
  return (
    <>
     <div className="flex justify-center text-center">
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'><PiCaretDoubleLeftBold className='less_1'/></a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'><PiCaretLeftBold className='less'/></a>
                    <a href=''className='bg-[#E40443] text-white no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-normal border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'>1</a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'>2</a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'>3</a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'>...</a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'>10</a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'><PiCaretRightBold className='less'/></a>
                    <a href='' className='bg-white text-[#8D98A4] no-underline ml-[2px] mr-[2px] rounded-[32px] text-[13px] font-semibold border-1 border solid border-[#F1F1F1] h-[30px] w-[30px] flex justify-center items-center text-center'><PiCaretDoubleRightBold className='less'/></a>
                    

                </div>
    </>
  )
}
export default Pagination