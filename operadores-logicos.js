// Evaluador de Notas con Mensajes Personalizados

let nota=Math.floor(Math.random() * (101)); 
//Math.floor es la funcion matematica "floor" y //Math.random devuelve un numero decimal aleatorio en el intervalo [0,1)

console.log("la nota es: ", nota)

if (nota >=0){
    console.log("La nota es un numero positivo")
}

if (nota >= 90){
    console.log("Estudiante aprueba con Excelente");
} else if (nota >= 75 && nota <= 89 ){
    console.log("Estudiante aprueba con Bien");
} else if (nota >= 60 && nota <= 74){
    console.log("Estudiante aprueba con Suficiente");
} else{
    console.log("Estudiante no aprueba");
}