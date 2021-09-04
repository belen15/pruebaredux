import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from "react-number-format";


const CapitalComponent = () => {
  const capital = useSelector(state => state.CapitalReducer)

  return (
    <div className="input">
      <span>el capital es</span>
      {capital === 0 ? "-" : 
        <NumberFormat 
          value={parseFloat(capital).toFixed(2)} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'$ '}/>
      }
    </div>
  )
}

export default CapitalComponent
