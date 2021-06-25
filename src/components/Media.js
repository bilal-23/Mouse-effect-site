import React from 'react'
const Media = ({ url, active }) => {

    return (
        <img src={url}
            className={`${active && 'is-active'}`}
            alt="sample data" />
    )

}

export default Media;
