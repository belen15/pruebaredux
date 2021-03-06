import React from 'react'
import { useSelector } from 'react-redux'


const ListaPlazosComponent = () => {
  const lista = useSelector(state => state.PlazosReducer)
  return (
    <div className="resultado-parcial">
      <h4 className="titulo">Plazos:</h4> 
      <ul>Array de Plazos:
        {lista.map((x, index) =>
          <span key={index}>{x} - </span>)}
      </ul>

      <br />
    </div>
  )
}

export default ListaPlazosComponent
