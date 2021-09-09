// en redux los eventos se llaman actions
// ver programacion orientada A OBJETOS



const ActionCapital = b => {//defino una action que es igual a una funcion anonima que toma como parametro B
  //console.log(b)//aca muestro el valor de b
  return {// devuelve un diccionario que contiene valores llave que apunta a un valor
    type: "holis", // type es un valor llave (key) de tipo string que apunta a un valor string (el evento). TYPE ES OBLIGATORIO PARA REDUX
    valor1: b //valor1 es un valor llave de tipo numerico que apunta a un valor de tipo desconocido por ser un parametro
  } 
}


const ActionPlazo = (p) => {

  return {// devuelve un diccionario que contiene valores llave que apunta a un valor
    type: "plazo", // type es un valor llave (key) de tipo string que apunta a un valor string . TYPE ES OBLIGATORIO PARA REDUX
    dias: p
  }
}

const ActionInteres = (m) => {//defino una action que es igual a una funcion anonima que toma como parametro M
  return {// devuelve un diccionario que contiene valores llave que apunta a un valor
    type: "lluvia", // type es un valor llave (key) de tipo string que apunta a un valor string (el evento). TYPE ES OBLIGATORIO PARA REDUX
    paraguas: m //paraguas es un valor llave de tipo numerico que apunta a un valor de tipo desconocido por ser un parametro
  }
}



export { ActionCapital, ActionPlazo , ActionInteres};

