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
 