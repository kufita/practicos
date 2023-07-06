/*Crear una función que calcule la nota final de una materia. Recibe como
parámetro un arreglo de números enteros que representa la nota de cada TP, calcular y
retornar el promedio del alumno.*/
function calcularPromedio(notas: number[]): number {
    const totalNotas = notas.length;
    let sumaNotas = 0;
  
    for (const nota of notas) {
      sumaNotas += nota;
    }
  
    const promedio = sumaNotas / totalNotas;
    return promedio;
  }
  
  // Ejemplo :
  const notasTP = [80, 90, 75, 85, 95];
  const promedioFinal = calcularPromedio(notasTP);
  console.log(`El promedio final es: ${promedioFinal}`);