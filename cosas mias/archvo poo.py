class camisetas:
    def __init__(self,marca,talla,precio,color):
        self.marca=marca
        self.talla=talla
        self.precio=precio
        self.color=color
    


    def aplicarDescuento(self, porcentaje):
        nuevoPrecio = self.precio - self.precio*porcentaje/100
        self.precio = nuevoPrecio
        if porcentaje < 100:
            self.rebajada = True


camiseta=camisetas("nike","L",12000,"azul")
print(camiseta.precio)


class remera (camisetas):
    def __init__(self, marca, talla, precio, color):
        super().__init__(marca, talla, precio, color)

remera1=remera("adidas","m",20000,"rojo")
print(remera1.precio)
remera1.aplicarDescuento(30)
print(remera1.precio)