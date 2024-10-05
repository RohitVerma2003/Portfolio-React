import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-center gap-4 md:gap-10 h-min px-5 overflow-x-auto w-full md:w-auto mt-5 md:mt-0 md:order-none py-5 bg-[#08070b] backdrop-blur">
                <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=rvermajio78300@gmail.com&tf=cm"} target='_blank'><p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">email</p></Link>
                <Link to={"https://www.linkedin.com/in/rohit-verma-639837281/"} target='_blank'><p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">linkedin</p></Link>
                <Link to={"https://github.com/RohitVerma2003"} target='_blank'><p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">github</p></Link>
                <Link to={"https://www.instagram.com/vrohit.exe/"} target='_blank'><p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">instagram</p></Link>
                <Link to={"https://leetcode.com/u/rohit_verma123/"} target='_blank'><p className="text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">leetcode</p></Link>
            </div>
        </div>
    )
}

export default Footer
