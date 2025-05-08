import React, { useRef, useState } from 'react';

const Karaoke = () => {
    const ref = useRef(null);
    const barsRef = useRef([]);
    const [audioToggle, setAudioToggle] = useState(false);

    const handleClick = () => {
        const newValue = !audioToggle;
        setAudioToggle(newValue);

        if (newValue) {
            ref.current.play();
            barsRef.current.forEach(bar => bar.style.animationPlayState = 'running');
        } else {
            ref.current.pause();
            barsRef.current.forEach(bar => bar.style.animationPlayState = 'paused');
        }
    };

    return (
        <div>
            <div
                className="icon-bar relative flex w-5 h-5 gap-1 cursor-pointer"
                onClick={handleClick}
            >
                {Array.from({ length: 4 }).map((_, index) => (
                    <span
                        key={index}
                        ref={el => (barsRef.current[index] = el)}
                        className="w-1 h-100 bg-white border-r-2 bar-animate"
                        style={{animationPlayState : 'paused'}}
                    ></span>
                ))}
            </div>
            <audio ref={ref} src="/intersteller.mp3" loop autoPlay={false} className="hidden"></audio>
        </div>
    );
};

export default Karaoke;
