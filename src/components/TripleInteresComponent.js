import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux'

import { TripleAction } from '../actions/ActionDoble';


const TripleInteresComponent = () => {
  const dispatcher = useDispatch()
  //const capital = useSelector(state => state.CapitalReducer)
  //const plazo = useSelector(state => state.PlazoReducer)
  //const interes = useSelector(state => state.InteresesReducer)

  //const TotalInteres = capital * interes * plazo / 360 / 100;


  const guardarTripleInteres = useCallback(() => {
    console.log('funciona')
    dispatcher(TripleAction()) //emitiendo un evento, que esta encapsulacdo en el action

  }, [dispatcher, TripleAction])

  return (
    <div>
      <button className="botones guardar" onClick={() => guardarTripleInteres()}>Guardar Triple Interes</button>
    </div>
  )
}

export default TripleInteresComponent
