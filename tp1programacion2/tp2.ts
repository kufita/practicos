/*Dados 2 arreglos de numeros  enteros de la misma 
longitud, obtener un nuevo arreglo a partir de la suma de los elementos
de amabos arreglos en la misma posicion , y mostrar el arrelo resultante . por ej
[3,4,0,3,12,2]
[2,9,0,5,22,14]
[-1,5,0,2,10,12]*/
function sumaArreglos(arr1: number[], arr2: number[]): number[] {
    const resultado: number[] = [];
  
    for (let i = 0; i < arr1.length; i++) {
      const suma = arr1[i] + arr2[i];
      resultado.push(suma);
    }
  
    return resultado;
  }
  
  // Ej:
  const arreglo1 = [1, 2, 3, 4, 5];
  const arreglo2 = [6, 7, 8, 9, 10];
  
  const resultado = sumaArreglos(arreglo1, arreglo2);
  console.log(resultado);