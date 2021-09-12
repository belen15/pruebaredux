// en redux los eventos se llaman actions
const UltimoAction = (capital, interes, plazo, nombre) => {
  return {
    type: "guardar-ultimo",
    c: capital,
    i: interes,
    p: plazo,
    n: nombre
  }
}

export { UltimoAction }

// Este action es un evento que cuando se ejecute genera un diccionario con valores pasados por parametro.
