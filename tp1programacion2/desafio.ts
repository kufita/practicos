/*DESAFIÓ:Desarrolla una aplicación utilizando TypeScript que genere contraseñas seguras.
La aplicación debe seguir las siguientes pautas:
La aplicación debe generar una contraseña aleatoria de una longitud específica.
La contraseña debe incluir una combinación de letras mayúsculas, letras minúsculas,
números y caracteres especiales.*/
function generarContrasena(longitud: number): string {
    const caracteresPermitidos =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      contrasena += caracteresPermitidos[indiceAleatorio];
    }
  
    return contrasena;
  }
  
  //ejemplo:
  const longitudContrasena = 10;
  const contrasenaGenerada = generarContrasena(longitudContrasena);
  console.log(`Contraseña generada: ${contrasenaGenerada}`);
  