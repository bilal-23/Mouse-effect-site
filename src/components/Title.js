import React from 'react'
import './Title.css';
const title = ({ title }) => {
    return (
        <div className="project__item">
            <h3 className="project__title">
                <span>{title}</span>
            </h3>
        </div>
    )
}

export default title
