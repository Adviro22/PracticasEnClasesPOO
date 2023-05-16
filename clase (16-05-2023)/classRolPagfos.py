class Cargo:
    def __init__(self, id, descripcion):
        self.id = id
        self.descripcion = descripcion
    def __str__(self):
        return f"{self.id} - {self.descripcion}"

class Empleado:
    def __init__(self, id, nombre, sueldo, cargo, fec_ing):
        self.id = id
        self.nombre = nombre
        self.sueldo = sueldo
        self.cargo = cargo
        self.fec_ing = fec_ing
    def __str__(self):
        return f"{self.id} - {self.nombre} - {self.sueldo} - {self.cargo} - {self.fec_ing}"

car1 = Cargo(1, "Analista")
car2 = Cargo(2, "Programador")
print("Cargo 1: ", car1)
print("Cargo 2: ", car2)