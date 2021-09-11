import React from 'react'
import { useSelector } from 'react-redux'


const ListaInteresComponent = () => {
  const lista = useSelector(state => state.InteresReducer)
  return (
    <div className="resultado-parcial">
      Intereses:
      <ul>Array de capitales:
        {lista.map((interes, index) =>
          <span key={index}>{interes} - </span>)}
      </ul>

      <br />
    </div>
  )
}

export default ListaInteresComponent
