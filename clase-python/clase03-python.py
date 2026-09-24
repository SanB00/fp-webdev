# Desafío integrador
# El programa debe pedir lo siguiente:
""" 
1. Pedir el nombre. | input()
2. Pedir edad. | input() -> excepciones
3. Pedir ciudad. | input()
4. Pedir profesión. | input()
5. Crear el perfil usando **kwargs | función que kwargs -> dict
6. Pedir 3 notas -> for -> range(3) -> list
7. Calcular el promedio utilizando *args | calcularPromedio(list) -> sum()
8. Mostrar todos los datos """
""" 
=====================
Nombre: Maxi
Edad: 22
Ciudad: Buenos Aires
Profesión: Profe
Notas: [7, 8, 9]
Promedio: 8.0
=====================
"""
def crearPerfil(**kwargs):
    nombre = kwargs.get("nombre","Nombre en blanco")
    edad = kwargs.get("edad","Edad en blanco")
    ciudad = kwargs.get("ciudad","Sin ciudad")

    print("Perfil Creado!")
    print(f"nombre: {nombre} | edad: {edad} | ciudad: {ciudad}")


# 1) entrada datos
nombre = input("- nombre: ")
edad = int(input("- edad: "))
ciudad = input("- ciudad: ")
dictionaryPerfil = {
    "nombre": nombre,
    "edad": edad,
    "ciudad": ciudad
}
# 2) creación
crearPerfil(**dictionaryPerfil)
