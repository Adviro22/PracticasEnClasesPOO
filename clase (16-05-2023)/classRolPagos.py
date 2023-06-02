class Cargo:
    def __init__(self, id, des):
        self.id = id
        self.descripcion = des

    def __str__(self):
        return f"{self.descripcion}"


class Empresa:
    def __init__(self, id, des):
        self.id = id
        self.descripcion = des

    def __str__(self):
        return f"{self.descripcion}"


class Empleado:
    def __init__(self, id, nombre, sueldo, car):
        self.id = id
        self.nombre = nombre
        self.sueldo = sueldo
        self.cargo = car

    def __str__(self):
        return f"{self.id} - {self.nombre} - {self.cargo} - {self.sueldo}"


class Administrativo(Empleado):
    def __init__(self, id, nombre, sueldo, car, medico):
        super().__init__(id, nombre, sueldo, car)
        self.seguro_medico = medico

    def __str__(self):
        return f"{super().__str__()} - {self.seguro_medico}"


class Obrero(Empleado):
    def __init__(self, id, nombre, sueldo, car, familia):
        super().__init__(id, nombre, sueldo, car)
        self.contrato_colectivo = familia

    def __str__(self):
        return f"{super().__str__()} - {self.contrato_colectivo}"


class Sobretiempo:
    def __init__(self, empleado, fecha, h50, h100, valor):
        self.empleado = empleado
        self.aaaamm = fecha
        self.h50 = h50
        self.h100 = h100
        self.valor = valor

    def __str__(self):
        return f"{self.empleado} - {self.aaaamm} - {self.h50} - {self.h100} - {self.valor}"


class Detalle:
    def __init__(self, id, empleado, cargo, sueldo, sobretiempo, iess):
        self.id = id
        self.empleado = empleado
        self.cargo = cargo
        self.sueldo = sueldo
        self.sobretiempo = sobretiempo
        self.iess = iess
        self.toting = 0
        self.totdesc = 0
        self.neto = 0

    def __str__(self):
        return f"{self.id} - {self.empleado} - {self.cargo} - {self.sueldo} - {self.sobretiempo} - {self.iess}"


class Nomina:
    def __init__(self, id, fecha, toting, totdesc, neto):
        self.id = id
        self.aaaamm = fecha
        self.toting = toting
        self.totdesc = totdesc
        self.neto = neto
        self.detalle = []

    def __str__(self):
        return f"{self.id} - {self.aaaamm}"

    def calcular(self):
        det1 = Detalle(1, 1, 1, 100, 50, 10, 150, 10, 140)
        self.detalle.append(det1)
        det2 = Detalle(2, 2, 1, 100, 50, 10, 150, 10, 140)
        self.detalle.append(det2)

    def mostrar(self, nombreEmpresa):
        print(f"Empresa: {nombreEmpresa}")
        print(f"{self.id} - {self.aaaamm} - {self.toting} - {self.totdesc} - {self.neto}")

    def mostrar2(self, empresa):
        print(empresa.id, "-", empresa.descripcion)
        print(f"{self.id} - {self.aaaamm} - {self.toting} - {self.totdesc} - {self.neto}")


car1 = Cargo(1, "Analista")
emp1 = Empleado(1, "Dan", 1000, car1)
#print(emp1)

empr = Empresa(1, "SuperMaxi")
nom1 = Nomina(1, 202305, 1000, 100, 900)
nom1.mostrar(empr.descripcion)
nom1.mostrar2(empr)

nom1.calcular()
