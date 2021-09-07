const ActionInteres = (m) => {//defino una action que es igual a una funcion anonima que toma como parametro M
  return {// devuelve un diccionario que contiene valores llave que apunta a un valor
    type: "lluvia", // type es un valor llave (key) de tipo string que apunta a un valor string (el evento). TYPE ES OBLIGATORIO PARA REDUX
    paraguas: m //paraguas es un valor llave de tipo numerico que apunta a un valor de tipo desconocido por ser un parametro
  }
}

export {ActionInteres}

//con esto lo que hago es un EVENTO que devuelve un valor pasado por parametro. En este caso con el parametro es el valor que ingreso en el Innnteres Input Component. ( el valor ingresado se pasa en la funcion, y la funcion lo pasa al action. De ahi se guarda en el store)