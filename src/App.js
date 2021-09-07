import './App.css';
import CapitalInputComponent from './components/CapitalInputComponent';
import CapitalComponent from './components/CapitalComponent';
import InteresComponent from './components/InteresComponent';
import InteresInputComponent from './components/InteresInputComponent';
import ResetComponent from './components/ResetComponent';
import PlazoInputComponent from './components/PlazoInputComponent';
import GuardarComponent from './components/GuardarComponent';

import UltimoComponent from './components/UltimoComponent';

import { Parallax } from 'react-parallax';

import ImagenFondo from './images3.jpg';
import MaximoComponent from './components/MaximoComponent';
import MinimoComponent from './components/MinimoComponent';
import ContadorComponent from './components/ContadorComponent';

function App() {
  return (

      <Parallax bgImage={ ImagenFondo } strength={700}>
        <div style={{height: 900}} className="App">
          <CapitalInputComponent />
          <CapitalComponent />
          <InteresComponent />
          <InteresInputComponent />
          <PlazoInputComponent />
          <div className="botones-component">
            <ResetComponent />
            <GuardarComponent />
          </div>
   
          <UltimoComponent />
          <MaximoComponent />
          <MinimoComponent />
         
         
         <ContadorComponent/>
         
        </div>
      </Parallax>

  );
}

export default App;
