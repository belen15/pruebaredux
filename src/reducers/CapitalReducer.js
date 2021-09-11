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

export { CapitalReducer, CapitalesReducer }