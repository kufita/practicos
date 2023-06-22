
import sqlite3


def buscar_estudiante():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    nombre1=input("ingrese el nombre a buscar: ")
    instruccion=f"SELECT * FROM estudiantes WHERE Nombre like '{nombre1}'"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    
    print(datos)
    
def ingresar_nombre():
    """ funcion para ingresar un nombre """
    global nombre
    while True:
        nombre = input("Ingrese el nombre del estudiante : ")
        if nombre=="":
            print("el nombre no puede estar vacio")
        else:
            return nombre
        

def ingresar_dni():
    """ funcion para ingresar un nombre """
    global DNI
    while True:
        DNI = int(input("Ingrese el dni del estudiante : "))
        if DNI=="":
            print("el dni no puede estar vacio")
        else:
            return DNI

def ingresar_apellido():
    """ funcion para ingresar un nombre """
    global apellido
    while True:
        apellido = input("Ingrese el apellido del estudiante : ")
        if apellido=="":
            print("el apellido no puede estar vacio")
        else:
            return apellido
        
def ingresar_edad():
    """ funcion para ingresar un nombre """
    global edad
    while True:
        edad = int(input("Ingrese la edad del estudiante : "))
        if edad=="":
            print("la edad no puede estar vacia")
        else:
            return edad
     
def ingresar_nota():
    """ funcion para ingresar una nota """
    global nota
    while True:
        try:
            nota = float(input("Ingrese la nota del estudiante (0-10):"))
            if 0<=nota<=10:
                return nota
            else:
                print("la nota tiene que estar entre 0 y 10")
        except:
            print("la nota tiene que ser un valor numerico")    
         


def ingresar_datos():
   
   conn = sqlite3.connect('facu.db')
   cursor=conn.cursor()
   dni=DNI
   Apellido=apellido
   Nombre=nombre
   Edad=edad
   Nota=nota
   instruccion=(f"INSERT INTO estudiantes VALUES({dni},'{Apellido}','{Nombre}',{Edad},{Nota})")
   cursor.execute(instruccion)
   conn.commit()
   conn.close()

	

def modificar_nota():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    dni2=input("ingrese el dni del estudiante que desea modificar la nota: ")
    nota1=input("ingrese la nota nueva: ")
    instruccion=f"UPDATE estudiantes SET Nota ={nota1} WHERE DNI = '{dni2}'"
    cursor.execute(instruccion)
    conn.commit()
    conn.close()
    


def eliminar_datos():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    dni1=input("ingrese el dni del estudiante que desea borrar: ")
    instruccion=f"DELETE FROM estudiantes WHERE dni like {dni1}"
    cursor.execute(instruccion)
    
    conn.commit()
    conn.close()


def nombres_ordenados():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT * FROM estudiantes ORDER BY Nombre"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)


def apellidos_ordenados():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT * FROM estudiantes ORDER BY Apellido"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)


def notas_ordenadas():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT * FROM estudiantes ORDER BY Nota DESC"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)


def promedio_notas():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT AVG(Nota) FROM estudiantes"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)


def promedio_edades():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT AVG(Edad) FROM estudiantes"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)
 
def Menu():
    print("""-------------------------------------------------------
    Selecciona una opción...
    1 - Agregar estudiante
    2 - Buscar estudiante por nombre
    3 - Modificar nota
    4 - Listado ordenados por apellidos
    5 - Listado ordenados por nombres
    6 - Listado ordenados por notas
    7 - Mostrar promedio de las notas
    8 - Borrar un estudiante
    9 - Calcular la edad promedio de los estudiantes
    0 - Salir""")

# --------------- Programa principal----------------------------



while True:
    Menu ()
 
    try:
        opcion = int(input("Ingrese el número de la opción escogida: "))
    except:
        opcion=-1
 
    if opcion == 1:
     ingresar_dni()
     ingresar_apellido()
     ingresar_nombre()
     ingresar_edad()
     ingresar_nota()
     ingresar_datos()
    elif opcion == 2:
       buscar_estudiante()
    elif opcion == 3:
        modificar_nota()
    elif opcion == 4:
        apellidos_ordenados()
    elif opcion == 5:
        nombres_ordenados()
    elif opcion == 6:
        notas_ordenadas()
        
    elif opcion == 7:
        promedio_notas()   
    elif opcion == 8:
        eliminar_datos()
    elif opcion == 9:
        promedio_edades()
    elif opcion == 0:
        break
    else:
        print("La opción ingresada no es correcta, indica una opción correcta")
