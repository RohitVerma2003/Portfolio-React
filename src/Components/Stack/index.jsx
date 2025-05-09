import React, { useEffect } from 'react'

const Stack = () => {
    useEffect(()=>{
        document.title = "Rohit's Portfolio - Stack"
    },[]);
    return (
        <div className='w-full h-[73%] md:h-[83%] flex justify-center'>
            <div className='w-full md:w-1/2 mx-2 py-[20%] md:py-[17%]'>
                <p className='text-center font-semibold text-4xl text-white mb-9'>The Tech Stack I work with.</p>
                <p className='text-center font-light text-mid-blue text-2xl'>C++ , C , JavaScript , NodeJS , React , MongoDB , Git , ExpressJS , HTML , CSS , Tailwind , Bootstrap , Socket.io</p>
                <p className='text-white text-xl font-light text-center italic mt-4'>-Yup, this is my arsenal.</p>
            </div>
        </div>
    )
}

export default Stack
