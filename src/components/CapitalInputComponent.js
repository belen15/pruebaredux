import React, {useCallback } from 'react'
import NumberFormat from "react-number-format";
import { useSelector, useDispatch } from 'react-redux'
import {ActionCapital} from '../actions/actions';

const CapitalInputComponent = () => {
  const capital = useSelector(state => state.CapitalReducer)
  const dispatcher = useDispatch()

  const martin = useCallback((p) => {
    //dispatcher({ type: "SETINTERES", val: p.target.value })
    //console.log(p)
      dispatcher(ActionCapital(p))
  }, [dispatcher, ActionCapital])

  return (
    <div className="input">
      ingrese su capital
      <NumberFormat
        value={capital}
        placeholder={capital}
        thousandSeparator={true}
        onValueChange={(values) => martin(values.floatValue)}
        allowNegative={false}
        allowLeadingZeros={false}
        fixedDecimalScale={true}
        decimalScale={2}
        onClick={e => e.target.select()}
        prefix={'$ '} />
    </div>
  )
}

export default CapitalInputComponent
