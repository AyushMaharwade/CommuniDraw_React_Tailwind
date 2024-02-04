import MainButton from "./MainButton"

const MainText =()=>{
    return(
    <div className="hero font-Inter lg:h-[66vh] bg-base-200 lg:flex lg:items-center">
     <div className="hero-content w-screen lg:h-[66vh] lg:flex lg:items-center lg:px-[10rem] lg:justify-between">
        {/* Text Content */}

      <div className=" lg:w-[35.5vw] lg:h-[55vh] flex flex-col justify-center items-center p-5 py-10 lg:p-0">
       <h1 className="lg:text-5xl font-bold text-5xl">Draw<br></br>Alone or Together with<br></br><span className="text-[#FFBE0B] lg:text-7xl font-Roboto">COMMUNIDRAW!</span></h1>
       <p className="text-[#BEADAD] lg:my-2 my-4">Provident cupiditate voluptatem et in.
       Quaerat fugiat ut assumenda excepturi exercitationem quasi.
       In deleniti eaque aut repudiandae et a.</p>

       {/* Buttons */}
       <div className="w-[18rem] lg:flex lg:items-center lg:justify-between lg:w-[20rem] md:gap flex justify-between items-center gap-3 my-3 lg:m-0">
       <MainButton/>
       </div>

      </div>
      {/* Image */}

      <div>
        <span>
        <img src="asset/4738060.jpg" alt="main-img" className="lg:h-[490px]"/>
        </span>


        <span className="lg:top-[60px] lg:left-[275px] absolute top-[114px] left-[120px] rotate-[24deg] lg:rotate-1 lg:block hidden">
        <img src="asset/Frame 4.png" alt="arrow"/>
        </span>
      </div>

     </div>
    </div>
    )
}
export default MainText