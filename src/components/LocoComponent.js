import React from 'react';

import { useSelector } from 'react-redux'



const LocoComponent = () => {
  const loco = useSelector(state => state.LocoReducer)
  if (!loco.capital) return null

  return (
    <div className="resultado-parcial">
      Loco:
      <ul> Ultimo Capital: {loco.capital}</ul>
      <ul>Ultimo Interes: {loco.interes}</ul>
      <ul>Ultimo Plazo: {loco.plazo}</ul
      >
      <br />
    </div>
  )
}

export default LocoComponent
