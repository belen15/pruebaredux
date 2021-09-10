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
import SumaComponent from './components/SumaComponent';
import NombreInputComponent from './components/NombreInputComponent';
import NombreComponent from './components/NombreComponent';
import LocoComponent from './components/LocoComponent';
import GuardarDobleComponent from './components/GuardarDobleComponent';
import TripleInteresComponent from './components/TripleInteresComponent';

function App() {
  return (

    <Parallax bgImage={ ImagenFondo } strength={700}>
      <div style={{height: 900}} className="App">
        <NombreInputComponent/>
        <CapitalInputComponent />
        <InteresInputComponent />
        <PlazoInputComponent />
        <CapitalComponent />
        <InteresComponent />
        <div className="botones-component">
          <ResetComponent />
          <GuardarComponent />
          <GuardarDobleComponent/>
          <TripleInteresComponent/>
        </div>
        <div className="resultados">
          <UltimoComponent />
          
          <MaximoComponent />
          <MinimoComponent /> 
          <SumaComponent />
        </div>
        <ContadorComponent/>
        <NombreComponent/>
        <LocoComponent />
      </div>
    </Parallax>
  );
}

export default App;
