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

export default NombreReducer