import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { FiltrarCapitalAction } from '../actions/ActionDoble';
import './../App.css'

const GuardarCapitalFilterComponent = () => {
  const dispatcher = useDispatch()
  const capital = useSelector(state => state.CapitalReducer)
  

  const guardarcapitalfilter = useCallback(() => {
    //dispatcher({type: 'holis', valor1: 0})
    dispatcher(FiltrarCapitalAction())
    //dispatcher(GuardarMaximoAction(capital, interes, plazo))
    //if (TotalInteres >= interes) {
    //  dispatcher(GuardarMaximoAction(capital, interes, plazo))
    //  console.log(TotalInteres)}

  }, [dispatcher, FiltrarCapitalAction])

  return (
    <div>
      <button className="botones guardar" onClick={() => guardarcapitalfilter()}>Guardar</button>
    </div>
  )
}

export default GuardarCapitalFilterComponent
