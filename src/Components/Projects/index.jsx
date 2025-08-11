import React, { useEffect } from 'react'
import ProjectList from '../ProjectList'

const Projects = () => {
    useEffect(()=>{
        document.title = "Rohit's Portfolio - Projects"
    },[]);
    return (
        <div className='w-full md:h-max flex justify-center'>
            <div className='w-full md:w-1/2 mx-2 py-[20%] md:py-[8%]'>
                <h1 className='text-3xl text-center md:text-5xl font-semibold text-[cyan]'>Work. Open Source. Vibing.</h1>
                <div className='text-mid-blue text-base my-10 font-extralight'>Built some projects to <span className='font-normal text-white'>UpSkill</span> myself. Some of them are listed down below.</div>
                <h3 className='text-2xl font-medium text-white'>Featured Projects</h3>
                <ProjectList/>
            </div>
        </div>
    )
}

export default Projects
