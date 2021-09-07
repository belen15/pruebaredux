import React from 'react'
import { useSelector } from 'react-redux'

const MinimoComponent = () => {
  const minimo = useSelector(state => state.MinimoReducer)
  if (!minimo.capital) return null

  return (
    <div>
      Minimo:
      <ul> Capital Minimo: {minimo.capital}<br /></ul>
      <ul> Interes minimo:{minimo.interes}<br /></ul>
      <ul>Plazo minimo: {minimo.plazo}</ul>
      <ul>Total: {minimo.capital * minimo.interes * minimo.plazo / 100 / 360}</ul>
      <br />
    </div>
  )
}

export default MinimoComponent
