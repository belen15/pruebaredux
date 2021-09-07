import React, {useCallback} from 'react';

import { useDispatch } from 'react-redux'
import {ActionReset} from '../actions/ActionReset';


const ResetComponent = () => {
  const dispatcher = useDispatch()

  const mifuncion = useCallback (() => {
    //dispatcher({type: 'holis', valor1: 0})
    dispatcher(ActionReset())
  },[dispatcher, ActionReset])

  return (
    <div>
      <button className="botones" onClick={()=> mifuncion()}>Reset</button>
    </div>
  )
}

export default ResetComponent
