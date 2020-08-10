/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad. X
a)informar la cantidad de mujeres. X
b)la edad promedio en total. X
c)el hombre mas pesado. X
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let acumuladorEdad = 0;
	let promedioEdad;
	let hombreMasPesado;
	let pesoMax;
	
	for (let i = 0; i < 5; i++) {
		
		nombre = prompt ("Ingrese su nombre");
		while (nombre == "" || !(isNaN(nombre))) {
			nombre = prompt ("ERROR. Ingrese su nombre");
		}
		
		edad = parseInt ("Ingrese su edad");
		while (isNaN(edad) || edad < 0) {
			edad = parseInt ("ERROR. Ingrese su edad");
		}

		sexo = prompt ("Ingrese su sexo");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt ("ERROR. Ingrese su sexo");
		}

		peso = parseFloat ( prompt ("Ingrese su peso"));
		while (peso < 0 || isNaN(peso)) {
			peso = parseFloat ( prompt ("ERROR. Ingrese su peso"));
		}

		acumuladorEdad += edad;

		switch (sexo) {
			case "f":

				contadorMujeres++;
				
				break;
		
			case "m":

				if (flag == 0) {
					flag = 1;
					hombreMasPesado = nombre;
					pesoMax = peso;
				}
				else if (peso > pesoMax) {
					hombreMasPesado = nombre;
					pesoMax = peso;
				}

				break;
		}
	}

	promedioEdad = acumuladorEdad / 5;

console.log("a)informar la cantidad de mujeres: "+contadorMujeres);
console.log("b)la edad promedio en total: "+promedioEdad);
console.log("c)el hombre mas pesado: "+hombreMasPesado);

}
