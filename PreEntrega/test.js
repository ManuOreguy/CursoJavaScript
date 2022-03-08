// Desafio Pre-Entrega
  
  
  
  function calculo_credito_carro(montocredito, coutas) {
    let interes = 3 / 100;
    let resultado = (montocredito * (interes * Math.pow(1 + interes, coutas))) / (Math.pow(1 + interes, coutas) - 1);
    return `${resultado.toFixed(0)} en ${coutas} Coutas`;
  }
  
  // Vehiculos
  let carros = [
    {
      modelo: "Ford Fusion",
      valor: 50000000,
    },
    {
      modelo: "Nissan Versa",
      valor: 20000000,
    },
    {
      modelo: "Chevrolet Onix",
      valor: 13000000,
    },
  ];
  let nombreCarros = "";
  
  function simulador_de_credito_pe1() {
    //  Variable de Tipo de Creditos
    let credito_tipo1 = "Vehiculo";
    let credito_tipo2 = "Casa";
    let credito_tipo3 = "Credito de Consumo";
  
    let nombreCarros = "";
  
    const opcion_credito = parseInt(prompt("Atención Elejir una de la Opciones del tipo de Credito: \n1 : " + credito_tipo1 + "\n2 : " + credito_tipo2 + "\n3 : " + credito_tipo3));
  
    switch (opcion_credito) {
      case 1:
        alert("Bienvenido al Simulador de Credito " + credito_tipo1);
  
        carros.forEach(function (valor, index) {
          temp = `${index + 1}- ${valor.modelo} El Precio Es: ${valor.valor} \n`;
          nombreCarros += temp;
        });
        let elecion = parseInt(prompt(`Cual Carro deseas: \n${nombreCarros} `));
        if (elecion == 1 || elecion == 2 || elecion == 3) {
          let coutas = parseInt(prompt(`Cuanta Coutas deseas?`));
          let vehiculo_valor = carros[elecion-1].valor;
          alert(calculo_credito_carro(vehiculo_valor, coutas));
        } else {
          alert("La Opcion no es Valida");
        }
  
        break;
      case 2:
        alert("Bienvenido al Simulador de Credito " + credito_tipo2);
        alert("Este Momento Simulador de Credito " + credito_tipo2 + "no esta disponible disculpa molestia ocasionada.");
        break;
  
      case 3:
        alert("Bienvenido al Simulador de Credito " + credito_tipo3);
        alert("Este Momento Simulador de Credito " + credito_tipo2 + "no esta disponible disculpa molestia ocasionada.");
        break;
  
      default: {
        alert("Debe Elejir una de la opciones Valida");
        return simulador_de_credito;
      }
    }
  }
  // END Desafio Pre-Entrega
  
  
  // Desafio Complemnetario Class 8
  
  
  // END Desafio Complemnetario Class 8