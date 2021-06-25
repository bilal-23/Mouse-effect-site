import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import sampleData from './utils/sampleData';
import Media from './components/Media';
function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="page-wrapper">
      <div className="project__list">
        {sampleData.map((item, index) => <Title key={index} index={index} title={item.title} setActiveIndex={setActiveIndex} />)}
      </div>

      <div className="project__media">
        {sampleData.map((item, index) => {
          const isActive = index === activeIndex;
          return <Media url={item.mediaUrl} key={index} active={isActive} />
        })}

      </div>
    </div>

  )
}

export default App;
