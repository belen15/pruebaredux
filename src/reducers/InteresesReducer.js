function InteresesReducer(state = 0, action) {
  switch (action.type) {
    case 'lluvia':
      return action.paraguas || 0
    case 'holis':
      return 0
    case 'guardar-ultimo':
      return 0
    default:
      return state;
  }
}

export default InteresesReducer