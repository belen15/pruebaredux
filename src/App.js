import './App.css';
import CapitalInputComponent from './components/CapitalInputComponent';
import CapitalComponent from './components/CapitalComponent';
import InteresComponent from './components/InteresComponent';
import InteresInputComponent from './components/InteresInputComponent';
import ResetComponent from './components/ResetComponent';
import PlazoInputComponent from './components/PlazoInputComponent';
import { Parallax } from 'react-parallax';

import ImagenFondo from './images3.jpg';

function App() {
  return (

      <Parallax bgImage={ ImagenFondo } strength={700}>
        <div style={{height: 600}} className="App">
          <CapitalInputComponent />
          <CapitalComponent />
          <InteresComponent />
          <InteresInputComponent />
          <PlazoInputComponent />
          <ResetComponent />
          <p className="llamada">*El interes total es del 30%</p>
        </div>
      </Parallax>

  );
}

export default App;
