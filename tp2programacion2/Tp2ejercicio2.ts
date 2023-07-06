
/*Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se
le asignan Alumnos (2)*/

class Alumno {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  }
  
  class Curso {
    nombre: string;
    alumnos: Alumno[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.alumnos = [];
    }
  
    asignarAlumno(alumno: Alumno) {
      this.alumnos.push(alumno);
    }
  }
  
  class Escuela {
    cursos: Curso[];
  
    constructor() {
      this.cursos = [];
    }
  
    agregarCurso(curso: Curso) {
      this.cursos.push(curso);
    }
  }
  
  // Crear una instancia de la Escuela
  const escuela = new Escuela();
  
  // Crear cursos
  const curso1 = new Curso("Programación");
  const curso2 = new Curso("Matemáticas");
  
  // Crear alumnos
  const alumno1 = new Alumno("Juan");
  const alumno2 = new Alumno("María");
  const alumno3 = new Alumno("Pedro");
  
  // Asignar alumnos a los cursos
  curso1.asignarAlumno(alumno1);
  curso1.asignarAlumno(alumno2);
  curso2.asignarAlumno(alumno3);
  
  // Agregar cursos a la escuela
  escuela.agregarCurso(curso1);
  escuela.agregarCurso(curso2);
  
  // Mostrar los alumnos asignados a cada curso
  for (const curso of escuela.cursos) {
    console.log(`Curso: ${curso.nombre}`);
    console.log("Alumnos:");
    for (const alumno of curso.alumnos) {
      console.log(`- ${alumno.nombre}`);
    }
    console.log("fin");
  }
  