function CapitalReducer(state = 0, action) {
  switch (action.type) {
    case 'holis': //holis es el evento
      return action.valor1 ? action.valor1 : 0
    case 'guardar-ultimo':
      return 0
    default:
      return state;
  }
}

function CapitalesReducer(state = [], action) {
  switch (action.type) {
    case 'guardar-ultimo':
      const n = [...state]
      n.push(action.c)
      return n
    default:
      return state;
  }
}

function ListaCapitalesReducer(state = {
  llave444555: [],
  par: true,
}, action){
  switch (action.type){
    case 'guardar-ultimo':
      const n = [...state.llave444555]
      if (!state.par){
        n.push(action.c)
      }
      return {
        ...state,
        par: !state.par,
        llave444555 : n,
      }
    default:
      return state;
  }
}




export { CapitalReducer, CapitalesReducer, ListaCapitalesReducer }