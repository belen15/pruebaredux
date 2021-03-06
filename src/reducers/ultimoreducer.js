function UltimoReducer(state = {}, action) { //devuelve como valor inicial un diccionario VACIO
  switch (action.type) {
    case 'guardar-ultimo': //cuando se ejecuta este evento (action)
      return {//reemplaza el state con el nnuevo valor que sera, en este caso, otro diccionario 
        plazo: action.p, //plazo sera igual al valor que se pasa en el action.p
        capital: action.c,
        interes: action.i,
        nombre: action.n
      }
  

    case 'borrar-ultimo': //cuando se ejecuta este evento
      return {} // devuelve un diccionaario vacio
    default:
      return state;
  }
}

export { UltimoReducer }