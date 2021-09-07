import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'

const MinimoComponent = () => {
  const minimo = useSelector(state => state.MinimoReducer)
  if (!minimo.capital) return null

  return (
    <div className="resultado-parcial">
      Minimo:
      <ul> Capital Minimo: {minimo.capital}<br /></ul>
      <ul> Interes minimo:{minimo.interes}<br /></ul>
      <ul>Plazo minimo: {minimo.plazo}</ul>
     
      <ul>Total:
        <NumberFormat
          value={minimo.capital * minimo.interes * minimo.plazo / 100 / 360}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$ '}
          decimalSeparator={"."}
          decimalScale={2} />
      </ul>
      <br />
    </div>
  )
}

export default MinimoComponent
