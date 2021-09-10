function ContadorReducer(state = 0, action) {
  switch (action.type) {
    case 'guardar-ultimo': //holis es el evento
      return state + 1

    default:
      return state;
  }
}

export default ContadorReducer