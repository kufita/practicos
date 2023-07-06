/*Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y
sacar fondos

• Si le asignamos más de 500000 disparamos una alarma
• Si intentamos sacar más de lo que disponemos disparamos otra alarma
• Si intentamos sacar más de 100000 disparamos otra alarma*/



class CuentaBancaria {
    fondos: number;
  
    constructor() {
      this.fondos = 0;
    }
  
    asignarFondos(monto: number) {
      this.fondos += monto;
  
      if (monto > 500000) {
        this.dispararAlarma("Asignación de fondos excesiva");
      }
    }
  
    sacarFondos(monto: number) {
      if (monto > this.fondos) {
        this.dispararAlarma("Saldo insuficiente");
      } else if (monto > 100000) {
        this.dispararAlarma("Extracción de fondos excesiva");
      } else {
        this.fondos -= monto;
      }
    }
  
    dispararAlarma(mensaje: string) {
      console.log("¡ALARMA!", mensaje);
    }
  }
  
  // Crear una instancia de la Cuenta Bancaria
  const cuenta = new CuentaBancaria();
  
  // Asignar fondos
  cuenta.asignarFondos(200000);
  cuenta.asignarFondos(600000);
  
  // Sacar fondos
  cuenta.sacarFondos(50000);
  cuenta.sacarFondos(200000);
  cuenta.sacarFondos(300000);
  