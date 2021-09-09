


const ActionNombre = b => {//defino una action que es igual a una funcion anonima que toma como parametro B
  //console.log(b)//aca muestro el valor de b
  return {// devuelve un diccionario que contiene valores llave que apunta a un valor
    type: "nombre", // type es un valor llave (key) de tipo string que apunta a un valor string (el evento). TYPE ES OBLIGATORIO PARA REDUX
    nom: b //valor1 es un valor llave de tipo numerico que apunta a un valor de tipo desconocido por ser un parametro
  }
  
}

export { ActionNombre };

// este evento me guarda el valor ingresado en el input en el state

