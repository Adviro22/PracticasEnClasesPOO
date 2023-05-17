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
    
class Oficina:
    def __init__(self, medico):
        self.medico = medico
    def __str__(self):
        return f"{self.medico}"

class Obrero:
    def __init__(self, familia):
        self.familia = familia
    def __str__(self):
        return f"{self.familia}"

class Sobretiempo:
    def __init__(self, empleado, fecha, h50, h100, valor):
        self.empleado = empleado
        self.fecha = fecha
        self.h50 = h50
        self.h100 = h100
        self.valor = valor
    def __str__(self):
        return f"{self.empleado} - {self.fecha} - {self.h50} - {self.h100} - {self.valor}"

class Nomina:
    def __init__(self, id, fecha, toting, totdesc, neto):
        self.id = id
        self.fecha = fecha
        self.toting = toting
        self.totdesc = totdesc
        self.neto = neto
    def __str__(self):
        return f"{self.id} - {self.fecha} - {self.toting} - {self.totdesc} - {self.neto}"
    
class Detalle:
    def __init__(self, id, empleado, cargo, sueldo, sobretiempo, iess):
        self.id = id
        self.empleado = empleado
        self.cargo = cargo
        self.sueldo = sueldo
        self.sobretiempo = sobretiempo
        self.iess = iess
    def __str__(self):
        return f"{self.id} - {self.empleado} - {self.cargo} - {self.sueldo} - {self.sobretiempo} - {self.iess}"



car1 = Cargo(1, "Analista")
car2 = Cargo(2, "Programador")
print("Cargo 1: ", car1)
print("Cargo 2: ", car2)