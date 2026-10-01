# Desafío integrador
""" 
# -----------------------------
# Desafío con archivos
# -----------------------------
# Crear un programa que solicite una persona
# - Nombre
# - Edad
# - Ciudad
# > archivo -> persona.txt
# El archivo debe contenedor lo siguiente:
# Nombre: Romina
# Edad: 25
# Ciudad: Buenos Aires
# Segunda etapa -> leer el archivo y mostrar esos datos
"""
def guardarEnArchivo(**kwargs):
    archivo = open("persona.txt", "w")
    for key, value in kwargs.items():
        archivo.write(f"{key.capitalize()}: {value}\n")
    archivo.close()
    
def leerArchivo():
    archivo = open("persona.txt", "r")
    contenido = archivo.read()
    archivo.close()
    return contenido

# 1) entrada datos
# nombre = input("- nombre: ")
# edad = int(input("- edad: "))
# ciudad = input("- ciudad: ")
# dictionaryPerfil = {
#     "nombre": nombre,
#     "edad": edad,
#     "ciudad": ciudad
# }
# # 2) creación
# guardarEnArchivo(**dictionaryPerfil)

#3) lectura
print(leerArchivo())