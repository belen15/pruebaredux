import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from "react-number-format";

const InteresComponent = () => {
  const capital = useSelector(state => state.CapitalReducer);
  //const intereses = parseFloat(capital) *0.3;
  const intereses = useSelector(state => state.InteresesReducer);
  const plazo = useSelector(state => state.PlazoReducer);

  const TotalInteres = capital * intereses * plazo /360 / 100;

  return (
    <div className="input">
      <span>los intereses son*</span>
      <NumberFormat 
        value={TotalInteres ? TotalInteres : "-"} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'$ '} 
        decimalSeparator={"."}
        decimalScale={2}/>
        
    </div>
  )
}

export default InteresComponent
