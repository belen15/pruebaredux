// en redux los eventos se encuentran encapsulados en el actions, el asction es una clase.
const DobleAction = () => {
  return {
    type: "guardar-doble",
    
  }
}



// en redux los eventos se encuentran encapsulados en el actions, el asction es una clase.
const TripleAction = () => {
  return {
    type: "guardar-triple",

  }
}


const DividirAction = () => {
  return {
    type: "dividir-capital-plazo",

  }
}



export  { DobleAction, TripleAction , DividirAction}

