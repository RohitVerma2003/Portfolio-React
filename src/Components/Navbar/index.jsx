import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import Karaoke from '../Karaoke';

const Navbar = () => {
    const [show , setShow] = useState(false);
    return (
        <>
            {show && <Popup show={show} setShow={setShow}/>}
            <div className="flex my-3 flex-wrap items-center w-full justify-between overflow-hidden">
                <div className="border-b border-mid-blue pl-5 pr-2">
                    <Link to={"/"}>
                        <h1 className="text-3xl font-semibold text-white cursor-pointer m-auto">
                            RV
                        </h1>
                    </Link>
                </div>
                <div className="flex justify-center gap-1 md:gap-10 border-b border-mid-blue h-min px-5 overflow-x-auto w-full md:w-auto mt-5 md:mt-0 order-2 md:order-none">
                    <Link to={"/about"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">about</p></Link>
                    <Link to={"/projects"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">project</p></Link>
                    <Link to={"/reminder"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">reminder</p></Link>
                    <Link to={"/stack"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">stacks</p></Link>
                    <Link to={"/hacks"}><p className="uppercase p-2 border-0 rounded hover:bg-neutral-800 transition ease-in-out text-mid-blue text-sm font-light hover:text-white cursor-pointer h-min">hacks</p></Link>
                </div>
                <div className='flex gap-4 items-center'>
                    <Karaoke/>
                    <img src="/Icons/command.png" onClick={()=>setShow(true)} alt="..." width={22} className="invert mr-5 md:mr-10 cursor-pointer m-auto" />
                </div>
            </div>
        </>
    );
}

export default Navbar;
