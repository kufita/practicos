/*dado un arreglo de numeros determinar cual es el mayor y mostrarlo , si existe el numero cero una o Mas
veces en el arreglo tambien mostrar "hay un cero", pero una sola vez. por ej=
[3,4,0,3,0,9,12,5]
12 
"hay un cero"
[4,-4,10,23,3,4,12,50]
50 */

function encontrarMayor(x: number[]): void {
    let mayor = x[0];
    let hayCero = false;
  
    for (let i = 1; i < x.length; i++) {
      if (x[i] > mayor) {
        mayor = x[i];
      }
  
      if (x[i] === 0) {
        hayCero = true;
      }
    }
  
    console.log(mayor);
  
    if (hayCero) {
      console.log("Hay un cero");
    }
  }
  
  // ej:
  const numeros = [3, 4, 0, 3, 0, 9, 12, 5];
  encontrarMayor(numeros);