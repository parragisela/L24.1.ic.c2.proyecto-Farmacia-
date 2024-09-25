export default class Cl_Farmacia {
  constructor() {
    this.acVentas = 0.0;
    this.menor = 9999999;
  }
  procesarVenta(medicamento) {
    // Total vendido en la Farmacia
    this.acVentas += medicamento.montoVenta();

    // producto menos destacado (que se vendio menos)
    if (medicamento.cantidad < this.menor) {
      this.menor = medicamento.cantidad;
      this.auxCodigo = medicamento.codigo;
    }

  }
  medicamentoMenosVendido() {
    return this.auxCodigo;
  }
  totalVendido() {
    return this.acVentas;
  }

}




