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

function InteresReducer(state = [], action) {
  switch (action.type) {
    case 'guardar-ultimo':
      const n = [...state]
      n.push(action.i)
      return n
    default:
      return state;
  }
}


export { InteresesReducer, InteresReducer }