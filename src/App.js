import { useState } from 'react'
import useMousePos from './hooks/use-mousePos';
import Title from './components/Title';
import sampleData from './utils/sampleData';
import Media from './components/Media';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePos();
  return (
    <div className="page-wrapper">
      <div className="project__list">
        {sampleData.map((item, index) => <Title key={index} index={index} title={item.title} setActiveIndex={setActiveIndex} />)}
      </div>

      <div className="project__media">
        {sampleData.map((item, index) => {
          const isActive = index === activeIndex;
          const xPos = isActive ? x : 0;
          const yPos = isActive ? y : 0;
          return <Media url={item.mediaUrl} key={index} active={isActive} x={xPos} y={yPos} />
        })}

      </div>
    </div>

  )
}

export default App;
