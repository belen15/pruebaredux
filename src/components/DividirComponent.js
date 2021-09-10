import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux'

import { DividirAction } from '../actions/ActionDoble';


const DividirComponent = () => {
  const dispatcher = useDispatch()
  //const capital = useSelector(state => state.CapitalReducer)
  //const plazo = useSelector(state => state.PlazoReducer)
  //const interes = useSelector(state => state.InteresesReducer)

  //const TotalInteres = capital * interes * plazo / 360 / 100;


  const DividirCapitalPlazo = useCallback(() => {
    console.log('funciona')
    dispatcher(DividirAction()) //emitiendo un evento, que esta encapsulacdo en el action

  }, [dispatcher, DividirAction])

  return (
    <div>
      <button className="botones guardar" onClick={() => DividirCapitalPlazo()}>Dividir capital y plazo</button>
    </div>
  )
}

export default DividirComponent
