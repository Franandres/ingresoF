/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido X
b)el sexo de titular que lleva más pasajeros. X
c)el promedio de personas por viaje,  que viajan en invierno X
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let personas;
	let respuesta;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let lugarMasElegido;
	let sexoConMasPersonas;
	let personasMax;
	let flag = 0;
	let promedioPersonasInvierno;
	let acumuladorPersonasInvierno = 0;
	let contadorViajesEnInvierno = 0;

	do {

		sexo = prompt ("Ingrese su sexo");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt ("ERROR. Ingrese su sexo");
		}

		lugar = prompt ("Ingrese el lugar de destino: bariloche, cataratas o salta");
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt ("ERROR. Ingrese el lugar de destino: bariloche, cataratas o salta");
		}

		temporada = prompt ("Ingrese la estacion para viajar: otoño, invierno, primavera o verano");
		while (temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano") {
			temporada = prompt ("ERROR. Ingrese la estacion para viajar: otoño, invierno, primavera o verano");
		}

		personas = parseInt (prompt ("Ingrese la cantidad de personas que viajan"))
		while (personas < 0 || isNaN(personas)) {
			personas = parseInt (prompt ("ERROR. Ingrese la cantidad de personas que viajan"))
		}

		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;
		
			case "cataratas":
				contadorCataratas++;
				break;

			case "salta":
				contadorSalta++;
				break;
		}

		if (flag == 0) {
			flag = 1;
			sexoConMasPersonas = sexo;
			personasMax = personas;
		  }
		  else if (personas > personasMax) {
			sexoConMasPersonas = sexo;
			personasMax = personas;
		  }

		if (temporada == "invierno") {
			contadorViajesEnInvierno++;
			acumuladorPersonasInvierno +=personas;
			promedioPersonasInvierno = acumuladorPersonasInvierno / contadorViajesEnInvierno;
		}

		respuesta = prompt ("Quiere continuar?");
	} while (respuesta == "s");

	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarMasElegido = "bariloche";
	}
	else if (contadorCataratas > contadorSalta) {
		lugarMasElegido = "cataratas";
	}
	else {
		lugarMasElegido = "salta";
	}

console.log("a)el lugar más elegido: "+lugarMasElegido);
console.log("b)el sexo de titular que lleva más pasajeros: "+sexoConMasPersonas);
console.log("c)el promedio de personas por viaje,  que viajan en invierno: "+promedioPersonasInvierno);
}
