import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from "react-number-format";
import { ActionPlazo } from '../actions/ActionPrestamos'

const PlazoInputComponent = () => {
  const plazo = useSelector(state => state.PlazoReducer);
  const dispatcher = useDispatch()
  const MAX_VAL = 360;

  const plazoFunction = useCallback((p) => {
    //dispatcher({ type: "SETINTERES", val: p.target.value })
    //console.log(m)
    dispatcher(ActionPlazo(p))
  }, [dispatcher, ActionPlazo])

  
  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value <= MAX_VAL) return true;
    return false;
  };

  return (
    <div className="input">
      <span>El plazo es</span>
      <NumberFormat
        value={plazo}
        placeholder={plazo}
        thousandSeparator={true}
        //onValueChange={(values) => lluvia(values.floatValue)}
        onValueChange={(values) => plazoFunction(values.floatValue)}
        allowNegative={false}
        allowLeadingZeros={false}
        fixedDecimalScale={true}
        decimalScale={0}
        onClick={e => e.target.select()}
        isAllowed={withValueCap}
        />
    </div>
      
   
  )
}

export default PlazoInputComponent
