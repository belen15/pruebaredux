import React from 'react'
import { useSelector } from 'react-redux'

const SumaComponent = () => {
  const suma = useSelector(state => state.SumaReducer)

  if (!suma.capital) return null

  return (
    <div className="resultado-parcial">
      Suma de prestamos:
      <ul>capital: {suma.capital}</ul>
      <ul>Intereses: {suma.interes}</ul>
      <ul>Plazo: {suma.plazo}</ul>
      <br />
    </div>
  )
}

export default SumaComponent