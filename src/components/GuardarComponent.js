import React, {useCallback} from 'react';

import { useSelector, useDispatch } from 'react-redux'

import {UltimoAction} from '../actions/UltimoAction';


const GuardarComponent = () => {
  const dispatcher = useDispatch()
  const capital = useSelector(state => state.CapitalReducer)
  const plazo = useSelector(state => state.PlazoReducer)
  const interes = useSelector(state => state.InteresesReducer)

  const TotalInteres = capital * interes * plazo / 360 / 100;


  const guardarPrestamo = useCallback (() => {
    //dispatcher({type: 'holis', valor1: 0})
    console.log(capital)
    dispatcher(UltimoAction(capital, interes, plazo))
    //dispatcher(GuardarMaximoAction(capital, interes, plazo))
    //if (TotalInteres >= interes) {
    //  dispatcher(GuardarMaximoAction(capital, interes, plazo))
    //  console.log(TotalInteres)}
      
  },[dispatcher, UltimoAction,  capital, interes, plazo, TotalInteres])

  return (
    <div>
      <button className="botones guardar" onClick={()=> guardarPrestamo()}>Guardar</button>
    </div>
  )
}

export default GuardarComponent
