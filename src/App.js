import { useState } from 'react'
import useMousePos from './hooks/use-mousePos';
import Title from './components/Title';
import sampleData from './utils/sampleData';
import Media from './components/Media';
import './App.css';
function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePos();
  console.log(x, y)
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
