const Header=()=>{
    return (
        <>
    <nav className="px-4 lg:px-6 lg:py-0 py-2.5 lg:h-[9vh] border-b-2 border-[#BEADAD] ">
        <div className="flex flex-wrap lg:justify-between
        items-center mx-auto max-w-screen-xl font-Inter justify-center gap-3 lg:h-[9vh]">
            <a href="#" className="flex items-center">
                <span className="self-center flex justify-center items-center
                whitespace-nowrap font-Roboto font-semibold text-3xl text-black">
                    COMMUNIDRAW!</span>
            </a>
            <div className="flex items-center justify-evenly lg:order-2 w-[320px]">
                <button className="text-white bg-[#FFBE0B] hover:bg-[#FB5607]
                dark:text-white focus:bg-[#FB5607] 
                rounded-[12px] text-md text-center lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none font-Inter px-4 font-medium">Sign up</button>
                
                <div className="h-10 w-[1.8px] bg-[#BEADAD] "></div>

                <button className="text-black bg-white 
                hover:text-[#FF006E] focus:text-[#FF006E] 
                 rounded-lg text-md py-2 lg:py-2
                ml-2 dark:bg-primary-600 
                dark:hover:bg-primary-700 focus:outline-none 
                dark:focus:ring-primary-800 font-Inter font-semibold">Login</button>
            </div>       
        </div>
    </nav>

        </>
    )
}
export default Header