import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { TripleAction } from '../actions/ActionDoble';


const TripleInteresComponent = () => {
  const ultimo = useSelector(state => state.UltimoReducer)
  const dispatcher = useDispatch()
  //const capital = useSelector(state => state.CapitalReducer)
  //const plazo = useSelector(state => state.PlazoReducer)
  //const interes = useSelector(state => state.InteresesReducer)

  //const TotalInteres = capital * interes * plazo / 360 / 100;


  const guardarTripleInteres = useCallback(() => {
    console.log('funciona')
    dispatcher(TripleAction()) //emitiendo un evento, que esta encapsulacdo en el action

  }, [dispatcher, TripleAction])
  if (!ultimo.capital) return null
  return (
    <div>
      <button className="botones guardar" onClick={() => guardarTripleInteres()}>Guardar Triple Interes</button>
    </div>
  )
}

export default TripleInteresComponent
