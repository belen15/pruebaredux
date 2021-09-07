import React from 'react'
import { useSelector } from 'react-redux'

const MaximoComponent = () => {
  const maximo = useSelector(state => state.MaximoReducer)
  if (!maximo.capital) return null

  return (
    <div>
      Maximo:
      <ul> Capital Maximo: {maximo.capital}<br /></ul>
      <ul> Interes Maximo:{maximo.interes}<br /></ul>
      <ul>Plazo Maximo: {maximo.plazo}</ul>
      <ul>Total: {maximo.capital * maximo.interes * maximo.plazo /100 /360}</ul>
      <br />
    </div>
  )
}

export default MaximoComponent
