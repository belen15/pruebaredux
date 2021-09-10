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

export default CapitalReducer