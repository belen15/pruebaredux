import React from 'react'
import { useSelector } from 'react-redux'

const SumaComponent = () => {
  const suma = useSelector(state => state.SumaReducer)


  return (
    <div>
      Suma de prestamos:
      <ul>capital: {suma.capital}</ul>
      <ul>Intereses: {suma.interes}</ul>
      <ul>Plazo: {suma.plazo}</ul>
      <br />
    </div>
  )
}

export default SumaComponent