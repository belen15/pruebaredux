import React from 'react'
import { useSelector } from 'react-redux'



const NombreComponent = () => {
  const nombre = useSelector(state => state.NombreReducer)

  return (
    <div>
      <span>el nombre es:</span>
      {nombre}
    </div>
  )
}

export default NombreComponent
