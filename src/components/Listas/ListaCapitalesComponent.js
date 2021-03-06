import React from 'react'
import { useSelector } from 'react-redux'

const ListaCapitalesComponent = () => {
  const lista = useSelector(state => state.ListaCapitalesReducer)
  return (
    <div className="resultado-parcial">
      <h4 className="titulo">Nuevos Capitales</h4>
      <ul>Segundo Array de capitales:
        {lista.llave444555.map((x, index) =>
          <span key={index}>{x} - </span>)}
      </ul>

      <br />
    </div>
  )
}

export default ListaCapitalesComponent
