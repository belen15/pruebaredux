import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ActionNombre } from '../actions/ActionNombre';

const NombreInputComponent = () => {
  const nombre = useSelector(state => state.NombreReducer)
  const dispatcher = useDispatch()

 const nombrefunction = useCallback((p) => {
    //dispatcher({ type: "SETINTERES", val: p.target.value })
    //console.log(p)
   dispatcher(ActionNombre(p.target.value))
  }, [dispatcher, ActionNombre])
  return (
    <div className="input">
      ingrese su Nombre
      <input value={nombre} onChange={i => nombrefunction(i)} />
      {/*<input value={nombre} onChange={i => dispatcher({ type: "nombre", nom: i.target.value })} />
      <input type="text" value={nombre} placeholder={nombre} onChange={p => nombrefunction(p)} />*/}
    </div>

  )

}

export default NombreInputComponent