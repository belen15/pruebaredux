function SumaReducer(state = { plazo: 0, capital: 0, interes: 0 }, action) {
  switch (action.type) {
    case 'guardar-ultimo':
      return {
        plazo: state.plazo + action.p,
        capital: state.capital + action.c,
        interes: state.interes + action.i,
      }
    default:
      return state;
  }
}

export default SumaReducer