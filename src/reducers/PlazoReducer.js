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

function PlazosReducer(state = [], action) {
  switch (action.type) {
    case 'guardar-ultimo':
      const n = [...state]
      if (action.p >= 10 ){
      n.push(action.p)}
      return n
    default:
      return state;
  }
}

export { PlazoReducer , PlazosReducer }