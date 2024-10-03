import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-center gap-4 md:gap-10 h-min px-5 overflow-x-auto w-full md:w-auto mt-5 md:mt-0 md:order-none py-5 bg-[#08070b] backdrop-blur">
                <p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">email</p>
                <p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">linkedin</p>
                <p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">github</p>
                <p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">instagram</p>
                <p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">leetcode</p>
            </div>
        </div>
    )
}

export default Footer
