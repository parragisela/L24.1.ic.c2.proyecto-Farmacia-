export default class Venta {
    constructor(codigo, cantidad, precio) {
        this.codigo = codigo
        this.cantidad = cantidad
        this.precio = precio
    }

    set codigo(codigo) {
        this._codigo = codigo
    }
    get codigo() {
        return this._codigo
    }

    set precio(precio) {
        this._precio = +precio
    }
    get precio() {
        return this._precio
    }

    set cantidad(cantidad) {
        this._cantidad = +cantidad
    }
    get cantidad() {
        return this._cantidad
    }

    montoVenta() {
        return this.cantidad * this.precio
    }

}