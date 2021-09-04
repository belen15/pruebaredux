import { createStore, combineReducers } from 'redux';

function CapitalReducer(state = 0, action) {
  switch (action.type) {
    case 'holis': //holis es el evento
      return action.valor1 ? action.valor1 : 0
    default:
      return state;
  }
}

function InteresesReducer(state = 0, action) {
  switch (action.type) {
    case 'lluvia':
      return action.paraguas || 0
    case 'holis':
      return 0
    default:
      return state;
  }
}

function PlazoReducer(state = 0, action) {
  switch (action.type) {
    case 'plazo':
      return action.dias || 0
    case 'holis':
      return 0
    default:
      return state;
  }
}

let store = createStore(combineReducers({
  CapitalReducer,
  InteresesReducer,
  PlazoReducer
}));

store.subscribe(() => {
  //console.log(store.getState())
});

export default store;