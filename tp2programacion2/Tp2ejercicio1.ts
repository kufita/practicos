/*Crear una clase de Auto con los atributos (marca, modelo, potencia,
    max. velocidad)
     Crear 5 autos en un array
     Iterar el array y mostrar los autos por pantalla
     Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda
    en forma óptima en recorrer x kms*/
    class Auto {
        marca: string;
        modelo: string;
        potencia: number;
        maxVelocidad: number;
      
        constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
          this.marca = marca;
          this.modelo = modelo;
          this.potencia = potencia;
          this.maxVelocidad = maxVelocidad;
        }
      
        calcularTiempo(distancia: number): number {
          const velocidadPromedio = this.maxVelocidad / 2; // Suponemos una velocidad promedio del 50% de la máxima
          const tiempo = distancia / velocidadPromedio;
          return tiempo;
        }
      }
      
      // Crear 5 autos en un array
      const autos: Auto[] = [
        new Auto("Ford", "Focus", 120, 180),
        new Auto("Chevrolet", "Cruze", 150, 200),
        new Auto("Toyota", "Corolla", 130, 190),
        new Auto("Volkswagen", "Golf", 110, 170),
        new Auto("Honda", "Civic", 140, 196)
      ];
      
      // Iterar el array y mostrar los autos por pantalla
      for (const auto of autos) {
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Potencia: ${auto.potencia}, Velocidad Máxima: ${auto.maxVelocidad}`);
      }
      
      // Calcular el tiempo óptimo en recorrer x kms para cada auto
      const distancia = 100; // Distancia en kilómetros
      for (const auto of autos) {
        const tiempoOptimo = auto.calcularTiempo(distancia);
        console.log(`El auto ${auto.marca} ${auto.modelo} tarda ${tiempoOptimo.toFixed(2)} horas en recorrer ${distancia} kms.`);
      }
      