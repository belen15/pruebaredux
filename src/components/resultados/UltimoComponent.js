import React from 'react';

import { useSelector } from 'react-redux'



const UltimoComponent = () => {
  const ultimo = useSelector(state => state.UltimoReducer)
  const lista = useSelector(state => state.CapitalesReducer )
  
  if (! ultimo.capital) return null



 
  return (
    <div className="resultado-parcial">
      Ultimo: 
      <ul> Ultimo Capital: {ultimo.capital}</ul>
      <ul>Ultimo Interes: {ultimo.interes}</ul>
      <ul>Ultimo Plazo: {ultimo.plazo}</ul>
      
      <br/>
     </div>
  )
}

export default UltimoComponent
