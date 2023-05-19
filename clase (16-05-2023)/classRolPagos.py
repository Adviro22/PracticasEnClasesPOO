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
    
class Administrativo:
    def __init__(self, seguro_medico):
        self.seguro_medico = seguro_medico
    def __str__(self):
        return f"{self.seguro_medico}"

class Obrero:
    def __init__(self, contrato_colectivo):
        self.contrato_colectivo = contrato_colectivo
    def __str__(self):
        return f"{self.contrato_colectivo}"

class Sobretiempo:
    def __init__(self, empleado, aaaamm, h50, h100, valor):
        self.empleado = empleado
        self.aaaamm = aaaamm
        self.h50 = h50
        self.h100 = h100
    def __str__(self):
        return f"{self.empleado} - {self.aaaamm} - {self.h50} - {self.h100}"

class Nomina:
    def __init__(self, id, aaaamm, toting, totdesc, neto):
        self.id = id
        self.aaaamm = aaaamm
        self.toting = toting
        self.totdesc = totdesc
        self.neto = neto
    def __str__(self):
        return f"{self.id} - {self.aaaamm} - {self.toting} - {self.totdesc} - {self.neto}"
    
class Detalle:
    def __init__(self, id, empleado, cargo, sueldo, sobretiempo, iess, toting, totdesc, neto):
        self.id = id
        self.empleado = empleado
        self.cargo = cargo
        self.sueldo = sueldo
        self.sobretiempo = sobretiempo
        self.iess = iess
        self.toting = toting
        self.totdesc = totdesc
        self.neto = neto
    def __str__(self):
        return f"{self.id} - {self.empleado} - {self.cargo} - {self.sueldo} - {self.sobretiempo} - {self.iess} - {self.toting} - {self.totdesc} - {self.neto}"



car1 = Cargo(1, "Analista")
car2 = Cargo(2, "Programador")
print("Cargo 1: ", car1)
print("Cargo 2: ", car2)