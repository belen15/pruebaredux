import NombreComponent from "../components/NombreComponent";

function NombreReducer(state = "", action) {
  switch (action.type) {
    case 'nombre': //holis es el evento
      return action.nom
    case 'guardar-ultimo':
      return ""
    default:
      return state;
  }
}

function ListaNombreReducer(state= {
  listanombre : [],
  contador: 0
}, action){
  switch (action.type){
   case 'guardar-ultimo':
     const n = [...state.listanombre]
     n.push(action.n)

     return {
       ...state,
       listanombre: n,
       contador: state.contador + action.n.split(" ").length
     }
     default:
      return state
  }
}
  

export { NombreReducer , ListaNombreReducer }