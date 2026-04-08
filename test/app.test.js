import {saludar, despedir, estadoSistema, sumar, restar} from "../src/app.js"
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
const a=2;
const b=2;
const res= sumar(a,b)
if (res===4){
console.log ("Test 3 Pasado: suma correcta")
pasadas++;
}else{
console.log("Test 3 Fallido: número incorrecto")
fallidas++;
}

const q=4;
const w=1;
const resultado=restar(q,w)
if (resultado===3){
console.log("Test 4 Pasado: Resta correcta")
pasadas++;
}
else{
console.log("Test 4 Fallido: Resta incorrecta")
fallidas++;
}
console.log ("\nResultados: " + pasadas + "pasadas, " + fallidas + "fallidas");
if (fallidas>0) process.exit(1);
}
ejecutarPruebas();
