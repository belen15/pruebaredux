import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import './../../App.css'
const ListaCapitalFilterComponent = () => {
  const lista = useSelector(state => state.CapitalesReducer)
  
  const [filtrado, setFiltrado] = useState(false)
  
  const listafiltrada = lista.filter(lista => lista > 50000);

  //const filtrar = useCallback(() => {
  // const nuevalista = filtrado 
   //nuevalista = !filtrado
   //setFiltrado(nuevalista)
    //console.log(filtrado)
    
  //}, [],)


  return (
    <div className="resultado-parcial">
      <h4 className="titulo">Nuevos Capitales filtrado</h4>
      <button className="botones" onClick={()=> setFiltrado(!filtrado)}>Filtrar</button>
      <ul>Tercer Array de capitales:
        {filtrado ? listafiltrada.map((item, index) =>
          <li className="lista-item" key={index}>{item}</li>)
         : lista.map((item, index) =>
         <li className="lista-item" key={index}>{item}</li>)
         }
      </ul>

      <br />
    </div>
  )
}

export default ListaCapitalFilterComponent
