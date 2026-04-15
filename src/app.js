export function saludar(nombre){
return "Hola" + nombre + ", bienvenido a aplicacion de Ary";
}
export function despedir(nombre){
return "Hasta pronto," + nombre + "!Ary";
}

export function estadoSistema(){
return {
estado: "activo",
version: "1.0.0",
message: "Sistema Ary funcionando correctamente"
}; 
}

export function sumar(a ,b){

return  a+b ;
}

export function restar(q,w){
return q-w;
}

export function healthcheck(){
   return {
status: "ok",
timestamp: new Date().toISOString(),
servicio: "StreamFlow API",
version: "1.0.0"
   }; 
}

 export function factorial(n) {
  if (n < 0) return "No existe";
  
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
