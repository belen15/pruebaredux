// en redux los eventos se llaman actions
const GuardarUltimoAction = (capital, interes, plazo) => {
  return {
    type: "guardar-ultimo",
    c: capital,
    i: interes,
    p: plazo,
  }
}

export { GuardarUltimoAction}

// Este action es un evento que cuando se ejecute genera un diccionario con valores pasados por parametro.
