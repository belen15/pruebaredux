//primero importar redux
import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { UltimoReducer } from './reducers/UltimoReducer';
import { NombreReducer, ListaNombreReducer} from './reducers/NombreReducer';
import { LocoReducer } from './reducers/LocoReducer';
import { CapitalReducer, CapitalesReducer, ListaCapitalesReducer } from './reducers/CapitalReducer';
import { InteresesReducer, InteresReducer} from './reducers/InteresesReducer';
import { PlazoReducer , PlazosReducer } from './reducers/PlazoReducer';
import { MaximoReducer } from './reducers/MaximoReducer';
import { MinimoReducer } from './reducers/MinimoReducer';
import { ContadorReducer } from './reducers/ContadorReducer'
import { SumaReducer } from './reducers/SumaReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
  LocoReducer, 
  CapitalesReducer,
  InteresReducer,
  PlazosReducer,
  ListaCapitalesReducer,
  ListaNombreReducer,

}), composeWithDevTools(applyMiddleware(thunk) ));

store.subscribe(() => {
  //console.log(store.getState())
});


export default store;