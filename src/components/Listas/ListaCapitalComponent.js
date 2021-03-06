import React from 'react'
import { useSelector } from 'react-redux'


const ListaCapitalComponent = () => {
  const lista = useSelector(state => state.CapitalesReducer)
  return (
     <div className="resultado-parcial">
      <h4 className="titulo">Capitales</h4> 
      <ul>Array de capitales: 
        {lista.map((x, index) => 
          <span key={index}>{x} - </span>)}
      </ul>
      
      <br/>
     </div>
  )
}

export default ListaCapitalComponent
