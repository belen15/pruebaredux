import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from "react-number-format";
import {ActionInteres} from '../actions/ActionInteres'

const InteresInputComponent = () => {
  const intereses = useSelector(state => state.InteresesReducer);
  const dispatcher = useDispatch()

  const lluvia = useCallback((m) => {
    //dispatcher({ type: "SETINTERES", val: p.target.value })
    //console.log(m)
    dispatcher(ActionInteres(m))
  }, [dispatcher, ActionInteres])

  return (
    <div className="input">
      <span>Ingrese el interes*</span>
      <NumberFormat
        value={intereses}
        placeholder={intereses}
        thousandSeparator={true}
        onValueChange={(values) => lluvia(values.floatValue)}
        allowNegative={false}
        allowLeadingZeros={false}
        fixedDecimalScale={true}
        decimalScale={2}
        onClick={e => e.target.select()}
        suffix={'%'} />
    </div>
  )
}
export default InteresInputComponent
