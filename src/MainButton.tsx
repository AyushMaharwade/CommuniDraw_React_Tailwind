import { Card } from "./Card"
import { useState } from 'react'

const MainButton =()=>{

    const [isVisible,setisVisible]=useState(false);

    const toggleShow = () =>{
      setisVisible(!isVisible)
  
    }
        
    return(
        <>
        {/* Buttons */}
        <button type="button" className="text-[#FFBE0B]
         bg-white border-[4px] border-[#FFBE0B]
         hover:bg-[#FFBE0B] hover:text-white focus:border-white focus:bg-[#FFBE0B] focus:text-white transition-all
        rounded-3xl focus:text-sm text-lg px-6 py-2 me-2 mb-2 
         font-bold">Private</button>

         

        <button type="button" onClick={toggleShow} className="text-[#FFBE0B]
         bg-white border-[4px] border-[#FFBE0B]
         hover:bg-[#FFBE0B] hover:text-white focus:border-white focus:bg-[#FFBE0B] focus:text-white transition-all
         rounded-3xl focus:text-sm text-lg px-6 py-2 me-2 mb-2 font-bold
         ">Room</button>

          {/* Card For Room        */}
         {isVisible && <div className="absolute lg:top-[20vh] lg:left-[35vw] top-[30vh] left-2 z-20"><Card /></div>}
        </>
    )
}
export default MainButton