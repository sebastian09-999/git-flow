import {saludar, despedir, estadoSistema,healthcheck, factorial} from "../src/app.js"
function ejecutarPruebas(){
let pasadas=0;
let fallidas=0;

const r1= saludar("Ary")
if (r1.includes("Ary")) {
console.log ("Test 1 pasado: funcion saludar en Ary es correcta")
pasadas++;
}else {
console.log("Test 1 Fallido: ", r1)
fallidas++;
}
const actualEstado= estadoSistema();
if (actualEstado.estado === "activo"){
console.log ("Test 2 Pasado: estadoSistema() funciona en Ary ");
pasadas++;
}else{
console.log("Test 2 Fallido: ", estado, "en Ary");
fallidas++;
}

const health = healthcheck();
if (health.status==="ok"){
    console.log("Test healthCheck pasado");
    pasadas++;
}else{
    console.log("Test HealthCheck fallido", health);
    fallidas++;
}

const fact = factorial(5);
if (fact === 120) {
  console.log("Test factorial pasado: factorial(5) correcto");
  pasadas++;
} else {
  console.log("Test factorial fallido:", fact);
  fallidas++;
}

console.log ("\nResultados: " + pasadas + "pasadas, " + fallidas + "fallidas");
if (fallidas>0) process.exit(1);
}
ejecutarPruebas();
