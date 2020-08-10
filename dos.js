/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido) X
a)informar el peso total de la compra. X
b)la marca del más caro de los líquidos X 
c)la marca del más barato de los sólidos X
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;
  let acumuladorPeso = 0;
  let marcaMasCaraLiquidos;
  let precioMax;
  let flagLiquido = 0;
  let marcaMasBaratoSolidos;
  let precioMin;
  let flagSolido = 0;

  do {

    marca = prompt("Ingrese la marca");
		while (marca == "" || !(isNaN(marca))) {
			marca = prompt("ERROR. Ingrese la marca");
    }
    
    precio = parseFloat(prompt("Ingrese el precio"));
		while (precio < 0 || isNaN(precio)) {
			precio = parseFloat(prompt("ERROR. Ingrese el precio"));
    }
    
    peso = parseFloat(prompt("Ingrese el peso"));
		while (peso < 0 || isNaN(peso)) {
			peso = parseFloat(prompt("ERROR. Ingrese el peso"));
		}

    tipo = prompt("Ingrese el tipo: solido o liquido");
		while (tipo != "solido" && tipo != "liquido") {
			tipo = prompt("ERROR. Ingrese el tipo: solido o liquido");
    }
    
    acumuladorPeso += peso;

    switch (tipo) {
      case "solido":
        
        if (flagSolido == 0) {
          flagSolido = 1;
          marcaMasBaratoSolidos = marca;
          precioMin = precio;
        }
        else if (precio < precioMin) {
          marcaMasBaratoSolidos = marca;
          precioMin = precio;
        }
  
        break;
    
      case "liquido":
  
        if (flagLiquido == 0) {
          flagLiquido = 1;
          marcaMasCaraLiquidos = marca;
          precioMax = precio;
        }
        else if (precio > precioMax) {
          marcaMasCaraLiquidos = marca;
          precioMax = precio;
        }

        break;
    }

    respuesta = prompt ("Quiere continuar?");
  } while (respuesta == "s");

console.log("a)informar el peso total de la compra: "+acumuladorPeso+"kg");
console.log("b)la marca del más caro de los líquidos: "+marcaMasCaraLiquidos);
console.log("c)la marca del más barato de los sólidos: "+marcaMasBaratoSolidos);
}
