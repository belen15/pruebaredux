import React from 'react'
import { useSelector } from 'react-redux'


const ListaInteresComponent = () => {
  const lista = useSelector(state => state.InteresReducer)
  return (
    <div className="resultado-parcial">
      <h4 className="titulo">Intereses:</h4>  
      <ul>Array de intereses:
        {lista.map((interes, index) =>
          <span key={index}>{interes} - </span>)}
      </ul>

      <br />
    </div>
  )
}

export default ListaInteresComponent
