import sqlite3

conn = sqlite3.connect('hola.db')

 
def create_table():  
   
   cursor=conn.cursor()
   cursor.execute("""CREATE TABLE estudiantes(
      dni integer PRIMARY KEY,
      Apellido text,
      Nombre text,
      Edad integer,
      Nota integer
   )
   """)
   conn.commit()
   conn.close()

def insertar(Nombre,Edad,Nota):  
   conn = sqlite3.connect('facu.db')
   cursor=conn.cursor()
   instruccion=f"INSERT INTO estudiantes VALUES('{Nombre}',{Edad}, {Nota})"
   cursor.execute(instruccion)
   conn.commit()
   conn.close()


def leer_tabla():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT * FROM estudiantes"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)


def leer_tabla_ordenada(field):
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    instruccion=f"SELECT * FROM estudiantes ORDER BY {field}"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)

def insertar_datos(Datos1List):  
   conn = sqlite3.connect('facu.db')
   cursor=conn.cursor()
   instruccion=f"INSERT INTO estudiantes VALUES(?,?,?)"
   cursor.executemany(instruccion,Datos1List)
   conn.commit()
   conn.close()
def buscar_datos():  
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    nombre1=input("ingrese el nombre a buscar: ")
    instruccion=f"SELECT * FROM estudiantes WHERE Nombre like '{nombre1}'"
    cursor.execute(instruccion)
    datos=cursor.fetchall()
    conn.commit()
    conn.close()
    print(datos)

def eliminar_datos():
    conn = sqlite3.connect('facu.db')
    cursor=conn.cursor()
    nombre1=input("ingrese el nombre del estudiante que desea borrar: ")
    instruccion=f"DELETE FROM estudiantes WHERE Nombre like'{nombre1}'"
    cursor.execute(instruccion)
    
    conn.commit()
    conn.close()
    


if __name__ == "__main__":
   create_table()
  