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
  class Votante {
    nombre: string;
    edad: number;
    listaVotada: Lista | null;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.listaVotada = null;
    }
  
    emitirVoto(lista: Lista) {
      this.listaVotada = lista;
    }
  }
  
  class Voto {
    votante: Votante;
    listaVotada: Lista;
  
    constructor(votante: Votante, listaVotada: Lista) {
      this.votante = votante;
      this.listaVotada = listaVotada;
    }
  }
  
  // Ejemplo de uso
  const partido1 = new PartidoPolitico('Partido A');
  const partido2 = new PartidoPolitico('Partido B');
  
  const candidato1 = new Candidato('Candidato 1', partido1);
  const candidato2 = new Candidato('Candidato 2', partido1);
  const candidato3 = new Candidato('Candidato 3', partido2);
  const candidato4 = new Candidato('Candidato 4', partido2);
  
  const lista1 = new Lista('Lista 1');
  lista1.agregarCandidato(candidato1);
  lista1.agregarCandidato(candidato3);
  
  const lista2 = new Lista('Lista 2');
  lista2.agregarCandidato(candidato2);
  lista2.agregarCandidato(candidato4);
  
  const votante1 = new Votante('Votante 1', 30);
  const votante2 = new Votante('Votante 2', 25);
  
  votante1.emitirVoto(lista1);
  votante2.emitirVoto(lista2);
  
  const voto1 = new Voto(votante1, lista1);
  const voto2 = new Voto(votante2, lista2);