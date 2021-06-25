import React, { useRef, useState, useEffect } from 'react'

const Media = ({ url, active, x, y }) => {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        if (targetRef.current) {
            console.log('workking')
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);
    return (
        <img src={url}
            ref={targetRef}
            className={`${active && 'is-active'}`}
            alt="sample data"
            style={{ transform: 'translate(' + (x - (dimensions.width / 2)) + 'px,' + (y - (dimensions.height / 2)) + 'px)' }}
        />
    )

}

export default Media;


//in transform we subtract the x and y by half of height and width to center