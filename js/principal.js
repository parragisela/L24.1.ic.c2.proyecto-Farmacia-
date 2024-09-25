/*ANALISIS DE DATOS
LA FARMACIA
Una farmacia desea procesar al final del día las ventas de cada uno de los medicamentos
 para obtener algunas estadísticas.
 Por cada medicamento se solicita Código del medicamento, precio Y cantidad vendida, se requiere:
a)	Calcular el monto vendido por medicamento 
b)	También debe reportarse: cuál medicamento fue el menos destacado (se vendió menos) 
   y el monto total vendido.
*/
import Cl_iMedicamento from "./Cl_iMedicamento.js";
import Cl_Medicamento from "./Cl_Medicamento.js";
import Cl_Farmacia from "./Cl_Farmacia.js";
import Cl_iFarmacia from "./Cl_iFarmacia.js";


let iFarmacia = new Cl_iFarmacia(),
    farmacia = new Cl_Farmacia(),
    salida = document.getElementById("salida");

let opc = 1;

while (opc == 1) {
    let iMedicamento = new Cl_iMedicamento(),
        c = iMedicamento.leerCodigoMedicamento(),
        cant = iMedicamento.leerCantidadMedicamento(),
        p = iMedicamento.leerPrecio(),

       medicamento = new Cl_Medicamento(c, cant, p);

    farmacia.procesarVenta(medicamento);
    salida.innerHTML += iMedicamento.reporteMedicamento(medicamento.montoVenta()) + "<br>";
    opc = iMedicamento.solicitarOpcion()
}
salida = document.getElementById("salida");
salida.innerHTML += iFarmacia.reporteFarmacia(farmacia.totalVendido(),farmacia.medicamentoMenosVendido())