import React from 'react'

const Media = ({ url, active, x, y }) => {

    return (
        <img src={url}
            className={`${active && 'is-active'}`}
            alt="sample data"
            style={{ transform: 'translate(' + (x - 164.5) + 'px,' + (y - 164.5) + 'px)' }}
        />
    )

}

export default Media;


//in transform we subtract the x and y by half of height and width to center it.
//Custom hook wasnt working in deployment so i hardcoded the value