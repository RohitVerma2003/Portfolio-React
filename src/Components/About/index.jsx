import React, { useEffect } from 'react'

const About = () => {
    useEffect(()=>{
        document.title = "Rohit's Portfolio - About"
    },[]);
    return (
        <div className='w-full md:h-[180vh] flex justify-center relative'>
            <div className='w-full md:w-1/2 mx-2 py-[20%] md:py-[8%]'>
                <h1 className='text-5xl font-semibold text-[cyan]'>Learning. Maturing.</h1>
                <div className='flex justify-center flex-wrap md:flex-nowrap items-center my-10 top-16 gap-5'>
                    <div className='w-2/3 md:w-1/2 h-2/3 border rounded-md'><img src="/Icons/why.jpg" alt="..." className='w-full h-full z-10 bg-contain' /></div>
                    <div className='w-3/4 md:w-1/2 h-2/3 text-justify'>
                        <p className='text-mid-blue font-light mt-3'>👋 Hello there! <span className='text-white font-base'>I'm Rohit Verma</span>, a B.Tech CS student.</p>
                        <p className='text-mid-blue font-light mt-3'>👋I'm all about <span className='text-white font-base'>coding</span> and <span className='text-white font-base'>problem-solving</span>. Currently diving into the world of <span className='text-white font-base'>algorithms and software engineering</span>. I love collaborating on <span className='text-white font-base'>projects and learning as I go</span>.</p>
                        <p className='text-mid-blue font-light mt-3'>Seeking opportunities to expand my <span className='text-white font-base'>skills and connect with fellow tech enthusiasts</span>. Let's chat and explore the exciting possibilities in the world of computer science!</p>
                    </div>
                </div>
                <div className='h-[400px]'>
                    <div className='text-3xl text-white'>Career</div>
                    <div className='text-white'>
                        <p className='pt-8 pb-3 text-lg'>Frontend Developer - Freelance</p>
                        <p><a href="https://www.papercodetech.com/" target='_blank' className='w-min font-light border-b px-1'>Paper Code Technologies</a> <span className='text-mid-blue font-extralight'> - Remote</span></p>
                        <p className='text-mid-blue font-light pt-3'>Oct 2023 - Dec 2023 · 3 mos</p>
                    </div>
                    <div className='text-white'>
                        <p className='pt-8 pb-3 text-lg'>B.Tech , Computer Science and Engineering</p>
                        <p><span className='w-min font-light border-b px-1'>Abdul Kalam Technical University</span> <span className='text-mid-blue font-extralight'> - Agra, Uttar Pradesh</span></p>
                        <p className='text-mid-blue font-light pt-3'>Sep 2022 - Present</p>
                    </div>
                    <div className='text-white'>
                        <p className='pt-8 pb-3 text-lg'>Science Stream , PCM</p>
                        <p><span className='w-min font-light border-b px-1'>G.L. Public School</span> <span className='text-mid-blue font-extralight'> - Agra, Uttar Pradesh</span></p>
                        <p className='text-mid-blue font-light pt-3'>Jul 2020 - Mar 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
