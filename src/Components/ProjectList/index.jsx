import React from 'react'
import { Link } from 'react-router-dom'

const ProjectList = () => {
  return (
    <div className='my-5 w-fit'>
      <div className='text-xl font-medium text-white my-3 w-fit'>2025</div>
      <ul className='text-white text-normal font-light mx-10 list-disc'>
        <Link to={'/project-details/semantic_segmentation'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Semantic Segmentation
          </li>
        </Link>
        <Link to={'/project-details/chat_app'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Chat Application
          </li>
        </Link>
        <Link to={'/project-details/google_calendar'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Google Calendar Clone
          </li>
        </Link>
        <Link to={'/project-details/chess'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Chess.com Clone
          </li>
        </Link>
        <Link to={'/project-details/round_robin'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Round Robin Coupon Distribution
          </li>
        </Link>
        <Link to={'/project-details/giphy'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Giphy Clone
          </li>
        </Link>
      </ul>
      <div className='text-xl font-medium text-white my-3 w-fit'>2024</div>
      <ul className='text-white text-normal font-light mx-10 list-disc'>
        <Link to={'/project-details/tetris'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Tetris - C++
          </li>
        </Link>
        <Link to={'/project-details/aktu_mania'}>
          <li className='border-b border-b-1 border-white w-fit'>AKTU Mania</li>
        </Link>
        <Link to={'/project-details/weather'}>
          <li className='border-b border-b-1 border-white w-fit'>
            Weather App - React
          </li>
        </Link>
      </ul>
      <div className='text-xl font-medium text-white my-3'>2023</div>
      <ul className='text-white text-normal font-light mx-10 list-disc'>
        <a href='https://alctravels.com/' target='_blank'>
          <li className='border-b border-b-1 border-white w-fit'>
            ALC Travels
          </li>
        </a>
        <a
          href='https://github.com/RohitVerma2003/Spotify-Clone'
          target='_blank'
        >
          <li className='border-b border-b-1 border-white w-fit'>
            Spotify Clone
          </li>
        </a>
      </ul>
    </div>
  )
}

export default ProjectList
