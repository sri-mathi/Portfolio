
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Project from './project/project';
import Exper from './Exper/Exper';
import Resume from './Resume/Resume'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project/>}/>
          <Route path="/exper" element={<Exper/>}/>
          <Route path="/resume" element={<Resume />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

