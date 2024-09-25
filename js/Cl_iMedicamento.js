export default class iMedicamento {
    
    leerCodigoMedicamento() {
        return prompt("Ingrese el codigo del medicamento  A  -  B  o  C:")
    }
    leerCantidadMedicamento() {
        return prompt("Ingrese la cantidad vendida  del medicamento:")
    }

    leerPrecio() {
        return prompt("Ingrese el precio del medicamento")
    }
    reporteMedicamento(montoVenta) {
        return `Monto venta: ${montoVenta}`
    }
    solicitarOpcion() {
        return prompt("Desea seguir procesando (1=si, 2=no):");
    }
}