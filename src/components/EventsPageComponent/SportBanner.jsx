
// Now I want to find proper image for the rest of the sports and populate individual sports too
// make use of array for banner info
// add hover effect =-> more backdrop and the slanted container shift animation

const SportBanner = ({sportImg, sportName}) => {
    return (
        <div className="h-[35vh] w-[80vw] bg-black my-10 rounded-2xl overflow-hidden relative shadow-[0_0_4px_2px_] shadow-[#727272] ">
            <img src={sportImg} alt="sport" className='w-full'/>
            <span className='w-[80vw] h-[120vh] bg-black/30 backdrop-blur-md absolute z-10 top-0 -left-96 rotate-45'>s</span>
            <span className='text-white text-6xl absolute top-[50%] -translate-y-[50%] left-14 z-20'>{sportName}</span>
        </div>
    )
}

export default SportBanner;