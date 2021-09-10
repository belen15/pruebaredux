
function MinimoReducer(state = {}, action) {
  switch (action.type) {
    case 'guardar-ultimo':
      if (!state.capital || state.capital * state.plazo * state.interes / 100 / 360 > action.c * action.p * action.i / 100 / 360) {
        return {
          plazo: action.p,
          capital: action.c,
          interes: action.i,
        }
      }
      return state
    default:
      return state;
  }
}

export default MinimoReducer