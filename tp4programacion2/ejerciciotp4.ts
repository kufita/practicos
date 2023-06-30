class PartidoPolitico {
    nombre: string;
    candidatos: Candidato[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.candidatos = [];
    }
  
    agregarCandidato(candidato: Candidato) {
      this.candidatos.push(candidato);
    }
  }
  class Candidato {
    nombre: string;
    partido: PartidoPolitico;
  
    constructor(nombre: string, partido: PartidoPolitico) {
      this.nombre = nombre;
      this.partido = partido;
    }
  }
  class Lista {
    nombre: string;
    candidatos: Candidato[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.candidatos = [];
    }
  
    agregarCandidato(candidato: Candidato) {
      this.candidatos.push(candidato);
    }
  }
  