let numero1 = 13;
const numero2 = 15;
const numero3 = '13';

let dato = numero1;
console.log("El numero 1 es: " + dato);


if(numero1 == numero2) console.log("El primero y segundo numero son iguales");
else if(numero1 > numero2) console.log("El primer numero es mayor que el segundo (" + numero1 + " > " + numero2 + ")");
else console.log("El primer numero es menor que el segundo (" + numero1 + " < " + numero2 + ")");

if(numero1 < numero3) console.log("El primer numero es menor que el tercero (" + numero1 + " < " + numero3 + ")");

if(numero1 == numero3) console.log("El primero y tercer numero son iguales");

if(numero1 != numero2) console.log("El primero y segundo numero son distintos");

if(numero1 === numero3) console.log("El primero y tercer numero son estrictamente iguales");

if(numero1 !== numero3) console.log("El primero y tercer numero son estrictamente diferentes");