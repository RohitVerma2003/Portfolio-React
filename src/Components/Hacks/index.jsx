import React, { useEffect } from 'react'

const Hacks = () => {
    useEffect(()=>{
        document.title = "Rohit's Portfolio - Hackathons"
    },[]);
    return (
        <div className='w-full h-[73%] md:h-[83%] flex justify-center'>
            <div className='w-full md:w-1/2 mx-2 py-[20%] md:py-[17%]'>
                <p className='text-white text-xl font-light text-center italic mt-4'>Soon...</p>
            </div>
        </div>
    )
}

export default Hacks
