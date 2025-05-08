import React, { useEffect } from 'react'

const Hacks = () => {
  useEffect(() => {
    document.title = "Rohit's Portfolio - Hackathons"
  }, [])
  return (
    <div className='w-full h-[73%] md:h-[83%] flex justify-center'>
      <div className='w-full md:w-1/2 mx-2 py-[20%] md:py-[17%]'>
        <div className='text-mid-blue text-normal font-light'>
          As <span className='text-white'>Charles Dickens</span> put it: It was
          the <span className='text-white'>best</span> of times, it was the{' '}
          <span className='text-white'>worst</span> of times.
        </div>
        <div className='text-xl font-medium text-white my-3'>2024</div>
        <ul className='text-white text-normal font-light mx-10 list-disc'>
          <a
            href='https://www.linkedin.com/posts/rohit-verma-639837281_sih2024-smartindiahackathon-isro-activity-7280117572971241472-Uyp4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESlFc0BWVABrS1_MtA8X_rotjEj38xiqRQ'
            target='_blank'
          >
            <li className='border-b border-b-1 border-white w-fit'>
              Smart India Hackathon
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Hacks
