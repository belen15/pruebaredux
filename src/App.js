import './App.css';
import CapitalInputComponent from './components/CapitalInputComponent';
import CapitalComponent from './components/prestamo/CapitalComponent';
import InteresComponent from './components/prestamo/InteresComponent';
import InteresInputComponent from './components/InteresInputComponent';
import ResetComponent from './components/ResetComponent';
import PlazoInputComponent from './components/PlazoInputComponent';
import GuardarComponent from './components/GuardarComponent';
import UltimoComponent from './components/resultados/UltimoComponent';
import { Parallax } from 'react-parallax';
import ImagenFondo from './images3.jpg';
import MaximoComponent from './components/resultados/MaximoComponent';
import MinimoComponent from './components/resultados/MinimoComponent';
import ContadorComponent from './components/ContadorComponent';
import SumaComponent from './components/resultados/SumaComponent';
import NombreInputComponent from './components/NombreInputComponent';
import NombreComponent from './components/NombreComponent';
import LocoComponent from './components/LocoComponent';
import GuardarDobleComponent from './components/GuardarDobleComponent';
import TripleInteresComponent from './components/TripleInteresComponent';
import DividirComponent from './components/DividirComponent';
import ListaCapitalComponent from './components/Listas/ListaCapitalComponent';
import ListaInteresComponent from './components/Listas/ListaInteresesComponent';
import ListaPlazosComponent from './components/Listas/ListaPlazosComponents';
import ListaCapitalesComponent from './components/Listas/ListaCapitalesComponent';
import ListaNombreComponent from './components/Listas/ListaNombreComponent';
import ListaCapitalFilterComponent from './components/Listas/ListaCapitalFilterComponent';


function App() {
  return (

    <Parallax bgImage={ ImagenFondo } strength={700}>
      <div style={{height: 1300}} className="App">
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
          <DividirComponent/>
        </div>
        
        <ContadorComponent/>
        <NombreComponent/>
        <div className="listas">
          <ListaCapitalComponent />
          <ListaCapitalFilterComponent/>
          <ListaInteresComponent />
          <ListaPlazosComponent />
          <ListaCapitalesComponent/>
          <ListaNombreComponent/>
        </div>
        <div className="resultados listas">
          <UltimoComponent />
          <MaximoComponent />
          <MinimoComponent />
          <SumaComponent />
        </div>
        
        <LocoComponent />

      </div>
    </Parallax>
  );
}

export default App;
