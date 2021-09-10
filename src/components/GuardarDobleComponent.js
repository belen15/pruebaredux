import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux'

import { DobleAction } from '../actions/ActionDoble';


const GuardarDobleComponent = () => {
  const dispatcher = useDispatch()
  //const capital = useSelector(state => state.CapitalReducer)
  //const plazo = useSelector(state => state.PlazoReducer)
  //const interes = useSelector(state => state.InteresesReducer)

  //const TotalInteres = capital * interes * plazo / 360 / 100;


  const guardarDoblePrestamo = useCallback(() => {
    console.log('funciona')
    dispatcher(DobleAction()) //emitiendo un evento, que esta encapsulacdo en el action
 
  }, [dispatcher, DobleAction])

  return (
    <div>
      <button className="botones guardar" onClick={() => guardarDoblePrestamo()}>Guardar Doble</button>
    </div>
  )
}

export default GuardarDobleComponent
