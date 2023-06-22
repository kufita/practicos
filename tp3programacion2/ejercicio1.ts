// ejercicio 1
abstract class Animal {
    abstract hacerSonido(): void;
  }
  
  class Perro extends Animal {
    hacerSonido(): void {
      console.log("El perro hace 'guau'");
    }
  }
  
  class Gato extends Animal {
    hacerSonido(): void {
      console.log("El gato hace 'miauu'");
    }
  }
  
  // Ejemplo de uso
  const perro = new Perro();
  const gato = new Gato();
  
  perro.hacerSonido(); // Imprime: El perro hace 'guau'
  gato.hacerSonido(); // Imprime: El gato hace 'miau'