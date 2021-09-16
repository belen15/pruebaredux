import React from 'react'
import { useSelector } from 'react-redux'

const ListaNombreComponent = () => {
  const lista = useSelector(state => state.ListaNombreReducer)
  return (
    <div className="resultado-parcial">
      <h4 className="titulo">Nombres </h4>
      <ul> Array de nombres:
        {lista.listanombre.map((x, index) =>
          <span key={index}>{x} - </span>)}
        <span>{lista.contador}</span>
      </ul>

      <br />
    </div>
  )
}

export default ListaNombreComponent
