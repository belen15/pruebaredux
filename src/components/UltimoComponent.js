import React from 'react';

import { useSelector } from 'react-redux'



const UltimoComponent = () => {
  const ultimo = useSelector(state => state.UltimoReducer)
  const maximo = useSelector(state => state.MaximoReducer)
  
  if (! ultimo.capital) return null



 
  return (
    <div>
      Ultimo: 
      <ul> Capital: {ultimo.capital}</ul>
      <ul>Interes: {ultimo.interes}</ul>
      <ul>Plazo: {ultimo.plazo}</ul
      >
      <br/>
     </div>
  )
}

export default UltimoComponent
