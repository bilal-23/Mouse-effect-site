import React, { useCallback, useState, useLayoutEffect } from 'react'

const getDimensionsObject = (object) => {
    const rect = object.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height
    };
}
const useSize = () => {
    const [dimensions, setDimensions] = useState({});
    const [node, setNode] = useState(null);
    const ref = useCallback((node) => {
        setNode(node)
    }, [])
    useLayoutEffect(() => {
        if (node) {
            const measure = () => setDimensions(getDimensionsObject(node));
            measure();
        }
    }, [node])
    return [ref, dimensions]
}

const Media = ({ url, active, x, y }) => {
    const [ref, { width, height }] = useSize();
    console.log(width, height)
    return (
        <img src={url}
            ref={ref}
            className={`${active && 'is-active'}`}
            alt="sample data"
            style={{ transform: 'translate(' + (x - width / 2) + 'px,' + (y - height / 2) + 'px)' }}
        />
    )

}

export default Media;


//in transform we subtract the x and y by half of height and width to center