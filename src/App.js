import './App.css';
import Title from './components/Title';
import sampleData from './utils/sampleData';
function App() {
  return (
    <div className="page-wrapper">
      <div className="project__list">
        {sampleData.map((item, index) => <Title key={index} title={item.title} />)}
      </div>
    </div>
  )
}

export default App;
