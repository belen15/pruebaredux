function PlazoReducer(state = 0, action) {
  switch (action.type) {
    case 'plazo':
      return action.dias || 0
    case 'holis':
      return 0
    case 'guardar-ultimo':
      return 0
    default:
      return state;
  }
}

export default PlazoReducer