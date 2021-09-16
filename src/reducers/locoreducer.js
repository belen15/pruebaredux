function LocoReducer(state = {}, action) { //devuelve como valor inicial un diccionario VACIO
  switch (action.type) {
    case 'guardar-ultimo': //cuando se ejecuta este evento (action)
      return {//reemplaza el state con el nnuevo valor que sera, en este caso, otro diccionario 
        plazo: action.p, //plazo sera igual al valor que se pasa en el action.p
        capital: action.c,
        interes: action.i,
      }
    case 'guardar-doble': // ESTA ESCUCHANDO AL EVENTO GUARDAR-DOBLE ENCAPSULADO EN EL ACTION
      return {
        // iguales
        // plazo: state.plazo,
        // interes: state.interes,
        ...state,

        // nuevos
        capital: (state.capital)*2,
      }
    case 'guardar-triple':
        return {
          ...state,

          interes: (state.interes)*3,
        }

    case 'dividir-capital-plazo':
      return {
        ...state,

        plazo: (state.plazo) /2,
        capital: (state.capital) /2
      }

    case 'holis':
      return {
        ...state,
        capital: (Math.random())
      }
    
    case 'borrar-ultimo': //cuando se ejecuta este evento
      return {} // devuelve un diccionaario vacio
    default:
      return state;
  }
}

export { LocoReducer }