import React from 'react'
import { useSelector } from 'react-redux'

const ContadorComponent = () => {
  const contador = useSelector(state => state.ContadorReducer)
  

  return (
    <div>
      Cantidad de prestamos: {contador}
    </div>
  )
}

export default ContadorComponent
