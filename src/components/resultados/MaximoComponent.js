import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'

const MaximoComponent = () => {
  const maximo = useSelector(state => state.MaximoReducer)
  if (!maximo.capital) return null

  return (
    <div className="resultado-parcial">
      Maximo:
      <ul> Capital Maximo: {maximo.capital}<br /></ul>
      <ul> Interes Maximo:{maximo.interes}<br /></ul>
      <ul>Plazo Maximo: {maximo.plazo}</ul>
      <ul>Total:
        <NumberFormat
          value={maximo.capital * maximo.interes * maximo.plazo / 100 / 360}
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

export default MaximoComponent
