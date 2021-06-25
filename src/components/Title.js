import './Title.css';
const title = ({ index, title, setActiveIndex }) => {
    return (
        <div className="project__item" onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)}>
            <h3 className="project__title">
                <span>{title}</span>
            </h3>
        </div>
    )
}

export default title
