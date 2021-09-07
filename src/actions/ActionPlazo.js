
const ActionPlazo = (p) => {

  return {// devuelve un diccionario que contiene valores llave que apunta a un valor
    type: "plazo", // type es un valor llave (key) de tipo string que apunta a un valor string . TYPE ES OBLIGATORIO PARA REDUX
    dias: p
  }
}

export { ActionPlazo}

