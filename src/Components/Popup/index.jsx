import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Popup = ({ show, setShow }) => {
    const notify = () => { toast.success('Copied')};

    const handleLinkCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success('Copied'); 
        } catch (err) {
            toast.error('Failed');
        } finally {
            setShow(false);
        }
    };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
            <div className="relative w-3/4 md:w-2/5 h-1/2 bg-[#1c191c] rounded-md z-50 overflow-y-scroll">
                <div className='flex justify-between items-center pt-3 pb-2'>
                    <small className='uppercase text-white font-light text-[12px] px-6'>general</small>
                    <img className='invert mr-6 cursor-pointer' src="/Icons/close.png" alt="" width={15} onClick={() => setShow(false)} />
                </div>
                <p onClick={handleLinkCopy} className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/link.png" alt="" width={18} />Copy Link</p>
                <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=rvermajio78300@gmail.com&tf=cm"} target='_blank' onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/email.png" alt="" width={18} />Send Email</p></Link>
                <Link to={"https://github.com/RohitVerma2003/Portfolio-React"} target='_blank' onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/code.png" alt="" width={18} />View Source</p></Link>
                <small className='uppercase text-white font-light text-[12px] px-6'>go to</small>
                <Link to={"/"} onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/home.png" alt="" width={18} />Home</p></Link>
                <Link to={"/about"} onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/user.png" alt="" width={18} />About</p></Link>
                <Link to={"/projects"} onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/rocket.png" alt="" width={18} />Projects</p></Link>
                <Link to={"/reminder"} onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/clock.png" alt="" width={18} />Reminder</p></Link>
                <Link to={"/stack"} onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/layer.png" alt="" width={18} />Stack</p></Link>
                <Link to={"/hacks"} onClick={() => setShow(false)}><p className="hover:cursor-pointer text-mid-blue hover:text-white h-fit hover:bg-[#333033] px-6 py-3 font-[300] text-base flex items-center gap-3"><img className='invert' src="/Icons/calendar.png" alt="" width={18} />Hacks</p></Link>
            </div>
        </div>
    );
};

export default Popup;
