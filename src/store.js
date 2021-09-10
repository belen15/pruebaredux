//primero importar redux
import { createStore, combineReducers } from 'redux';
import UltimoReducer from './reducers/UltimoReducer';
import NombreReducer from './reducers/NombreReducer';
import LocoReducer from './reducers/LocoReducer';
import CapitalReducer from './reducers/CapitalReducer';
import InteresesReducer from './reducers/InteresesReducer';
import PlazoReducer from './reducers/PlazoReducer';
import MaximoReducer from './reducers/MaximoReducer';
import MinimoReducer from './reducers/MinimoReducer';
import ContadorReducer from './reducers/ContadorReducer'
import SumaReducer from './reducers/SumaReducer';


let store = createStore(combineReducers({
  CapitalReducer,
  InteresesReducer,
  PlazoReducer,
  UltimoReducer,
  MaximoReducer,
  MinimoReducer,
  ContadorReducer,
  SumaReducer,
  NombreReducer,
  LocoReducer
}));

store.subscribe(() => {
  //console.log(store.getState())
});

export default store;