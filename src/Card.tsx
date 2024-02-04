import { useState } from "react"

export const Card = () => {

  const [create,setcreate] = useState(true);

  const showcreate = () =>{
    setcreate(true);
    setjoin(false);
  }

  const [join,setjoin] = useState(false);

  const showjoin = () =>{
    setjoin(true);
    setcreate(false);
  }

  return (
    <div className="lg:w-[25vw] w-[full] h-auto bg-white shadow-lg font-Inter py-4 px-6 rounded-lg border-2">

      {/* toggle btn */}
        <div className="flex justify-evenly w-[100%] lg:gap-5">
        
          <button onClick={showcreate} className="text-[#FFBE0B]
         bg-white border-[4px] border-[#FFBE0B]
         hover:bg-[#FFBE0B] hover:text-white focus:border-white focus:bg-[#FFBE0B] focus:text-white transition-all
        rounded-3xl focus:text-sm text-lg px-6 py-2 me-2 mb-2 
         font-bold">Create</button>
         
          <div className="h-10 w-[1.8px] bg-[#BEADAD] "></div>
        
          <button onClick={showjoin} className="text-[#FFBE0B]
         bg-white border-[4px] border-[#FFBE0B]
         hover:bg-[#FFBE0B] hover:text-white focus:border-white focus:bg-[#FFBE0B] focus:text-white transition-all
        rounded-3xl focus:text-sm text-lg px-6 py-2 me-2 mb-2 
         font-bold">Join</button>
         
        </div>

        {/* Create main */}

        {create && <div>
        <div>
          <h2 className="text-lg font-semibold lg:py-3">Room Code</h2>
          <input type="text" className="border-[#BEADAD] border-2 rounded-md p-2 w-full"/>
          <p className="text-[#BEADAD] lg:my-2 my-4">Ask your Teammate to join your room with this Code</p>

          <h2 className="text-lg font-semibold ">Name</h2>
          <input type="text" placeholder="Enter Name" className="border-[#BEADAD] border-2 rounded-md p-2 w-full my-3"/>
        </div>

       

        <button className="text-white bg-[#FFBE0B] hover:bg-[#FB5607]
                dark:text-white focus:bg-[#FB5607] 
                rounded-[12px] text-md text-center py-2 mt-2 focus:outline-none font-Inter font-medium w-full">Create Room
        </button>
        </div>}

        {/* join Main */}

        {join && <div>
        <div>
          <h2 className="text-lg font-semibold lg:py-3"> Enter Room Code</h2>
          <input type="text" className="border-[#BEADAD] border-2 rounded-md p-2 w-full"/>
          <p className="text-[#BEADAD] lg:my-2 my-4">Enter the code given by the Host to join the room</p>

          <h2 className="text-lg font-semibold ">Name</h2>
          <input type="text" placeholder="Enter Name" className="border-[#BEADAD] border-2 rounded-md p-2 w-full my-3"/>
        </div>

       

        <button className="text-white bg-[#FFBE0B] hover:bg-[#FB5607]
                dark:text-white focus:bg-[#FB5607] 
                rounded-[12px] text-md text-center py-2 mt-2 focus:outline-none font-Inter font-medium w-full">Enter Room
        </button>
        </div>}


    </div>
  )
}
