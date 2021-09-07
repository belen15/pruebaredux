//primero importar redux
import { createStore, combineReducers } from 'redux';

//Segundo definir los reducer, que son igualmes a funciones, que tienen un state y action
//definicion de reducer
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

//definicion de reducer
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

//definicion de reducer
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

//definicion de reducer
function UltimoReducer(state = {}, action) {
  switch (action.type) {
    case 'guardar-ultimo':
      return {
        plazo: action.p,
        capital: action.c,
        interes: action.i,
      }
    case 'borrar-ultimo':
      return {}
    default:
      return state;
  }
}


//definicion de reducer
function MaximoReducer(state = {}, action) {
  switch (action.type) {
    case 'guardar-ultimo':
      if (!state.capital || state.capital * state.plazo * state.interes /100 / 360 < action.c * action.p * action.i /100 /360) {
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

function ContadorReducer(state = 0, action) {
  switch (action.type) {
    case 'guardar-ultimo': //holis es el evento
      return state +1 
    
    default:
      return state;
  }
}

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



//llamar a cada uno de los reducer
let store = createStore(combineReducers({
  CapitalReducer,
  InteresesReducer,
  PlazoReducer,
  UltimoReducer,
  MaximoReducer,
  MinimoReducer,
  ContadorReducer,
  SumaReducer
}));

store.subscribe(() => {
  //console.log(store.getState())
});

export default store;