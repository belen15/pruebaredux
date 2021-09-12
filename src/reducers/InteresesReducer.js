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
      let n = [...state]
      n.push(action.i)
      if (action.c == 7){
        n = n.map(x => x / 2) 
      }       
      return n
    default:
      return state;
  }
}


export { InteresesReducer, InteresReducer }