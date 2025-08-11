import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useProjectData from '../../Hooks/useProjectData'

const ProjectDetails = () => {
  const { slug } = useParams()
  const data = useProjectData(slug)

  useEffect(() => {
    document.title = `Rohit's Portfolio - ${slug}`
  }, [])

  return (
    <div className='w-full my-5 h-[70%] md:h-4/5 overflow-scroll'>
      <div className='w-full flex justify-center'>
        <div className='w-4/5 h-36 md:h-48 rounded-lg flex justify-center relative border border-cyan-400'>
          <img
            src={data?.image}
            alt='...'
            className='object-cover w-full rounded-lg opacity-75'
          />
          <div className='absolute text-2xl md:text-5xl font-semibold text-[cyan] top-1/3 backdrop-brightness-50 px-2'>
            {data.project_name}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className='w-full flex justify-center mt-4'>
        <div className='w-4/5'>
          <div className='w-full text-xl text-cyan-400 border-b border-cyan-400   '>
            Overview
          </div>
          <div className='text-cyan-400 mt-2'>{data.overview}</div>
        </div>
      </div>

      {/* Features Section */}
      <div className='w-full flex justify-center mt-4'>
        <div className='w-4/5'>
          <div className='w-full text-xl text-cyan-400 border-b border-cyan-400   '>
            Features
          </div>
          <div className='w-full'>
            {data?.features?.map((feature, index) => (
              <div key={index}>
                <div className='text-cyan-400 mt-2'>
                  {index + 1}. {feature?.heading}:
                </div>
                <div className='text-cyan-400 ml-3'>{feature?.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className='w-full flex justify-center mt-4'>
        <div className='w-4/5'>
          <div className='w-full text-xl text-cyan-400 border-b border-cyan-400   '>
            Tech Stack
          </div>
          <div className='w-full'>
            {data?.tech_stack?.map((tech, index) => (
              <div className='text-cyan-400' key={index}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className='w-full flex justify-center mt-4'>
        <div className='w-4/5'>
          <div className='w-full text-xl text-cyan-400 border-b border-cyan-400   '>
            Related Links
          </div>
          <div className='w-full mt-2'>
            <Link
              className='w-32 group flex justify-center items-center border border-cyan-400 gap-2 p-2 rounded-md hover:bg-cyan-500 transition-all'
              to={data?.github_link}
              target='_blank'
            >
              <span className='text-gray-400 group-hover:text-black'>
                Github
              </span>
              <img
                src='/Icons/github.png'
                alt='...'
                className='w-6 text-white bg-white rounded-full'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
