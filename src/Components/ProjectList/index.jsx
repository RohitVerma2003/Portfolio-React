import React from 'react'

const ProjectList = () => {
    return (
        <div className='my-5 w-fit'>
            <div className='text-xl font-medium text-white my-3 w-fit'>2024</div>
            <ul className='text-white text-normal font-light mx-10 list-disc'>
                <a href="https://github.com/RohitVerma2003/Tetris-CPP" target='_blank'><li className='border-b border-b-1 border-white w-fit'>Tetris - C++</li></a>
                <a href="https://github.com/RohitVerma2003/AKTU-Mania" target='_blank'><li className='border-b border-b-1 border-white w-fit'>AKTU Mania</li></a>
                <a href="https://github.com/RohitVerma2003/WeatherApp-React-" target='_blank'><li className='border-b border-b-1 border-white w-fit'>Weather App - React</li></a>
            </ul>
            <div className='text-xl font-medium text-white my-3'>2023</div>
            <ul className='text-white text-normal font-light mx-10 list-disc'>
                <a href="https://alctravels.com/" target='_blank'><li className='border-b border-b-1 border-white w-fit'>ALC Travels</li></a>
                <a href="https://github.com/RohitVerma2003/Spotify-Clone" target='_blank'><li className='border-b border-b-1 border-white w-fit'>Spotify Clone</li></a>
            </ul>
        </div>
    )
}

export default ProjectList
