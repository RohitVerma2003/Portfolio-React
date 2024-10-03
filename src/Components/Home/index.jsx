import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <div className='w-full h-[72%] md:h-5/6 flex justify-center'>
            <div className='w-full md:w-1/2 mx-5 py-[30%] md:py-[12%]'>
                <h1 className='text-5xl mx-2 font-medium text-white cursor-pointer m-auto'>Rohit Verma</h1>
                <div className='mt-6 mx-2 h-6'>
                    <TypeAnimation
                        sequence={[
                            'Programmer.',
                            2500,
                            'Software Developer.',
                            2500,
                            'Competitive Programmer.',
                            2500,
                        ]}
                        wrapper="span"
                        speed={40}
                        cursor={false}
                        className='text-white text-md font-light'
                        repeat={Infinity}
                    />
                </div>
                <p className="text-mid-blue mx-2 text-md font-light">How You Doin'?...</p>
                <button className='my-2 p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out'><p className='text-white'>Press <kbd className='tracking-[.20rem]'>ctrl</kbd> <kbd className='tracking-[.20rem]'>k</kbd> to start ➝</p></button>
            </div>
        </div>
    )
}

export default Home
