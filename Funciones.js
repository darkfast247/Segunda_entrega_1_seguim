//funcion sin parametro
const funcion = () => {
    const msj = "heellou programador";
    console.log(msj);
  }
  
  //funcion con un parametro 
  const funcionConUnParametro = (numero) => {
    const Raiz_cuadrada = Math.sqrt(numero);
    console.log(`la raíz cuadrada de ${numero} es: ${Raiz_cuadrada}`);
  };
  
  //funcion con dos parametros
  const funcionConDosParametros = (num1, num2) => {
    let division = num1 / num2;
    console.log(`la division de ${num1} y ${num2} es: ${division}`);
  }

  funcion();
  let numero = 36;
  funcionConUnParametro(numero);
  const numero_uno = 89;
  const numero_dos = 7;
  funcionConDosParametros(numero_uno, numero_dos);