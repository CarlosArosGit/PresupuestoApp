var presupuesto = document.getElementById('presupuesto');
var gastosP = document.getElementById('gastos');
var saldoP = document.getElementById('saldo');
var contenido = document.getElementById('contenidoTabla');
var pre = 0;
var gastos = [];
var gas = 0;

function asignarFunciones() {
  let btnPresupuesto = document.getElementById('btnCalcular');
  btnPresupuesto.addEventListener('click', agregarPresupuesto);
  let btnAñadir = document.getElementById("btnAñadir");
  btnAñadir.addEventListener("click", getDatosForm);
}

let getDatosForm = () => {
  let nombre = document.getElementById('inputNombreGasto').value;
  let valor = document.getElementById('inputCantidadGasto');
  let valorString = valor.value.toString();
  valor.value = valorString.replace('.', '');
  if (nombre != '' && valor.value != '') {
    if(valor.value > 0 && parseInt(saldoP.innerHTML) >= parseInt(valor.value)){
      crearObjeto(nombre, valor.value);
      agregarGasto(valor.value);
    }else{
      alert('Cantidad ingresada no válida');
      valor.value = '';
    }
  } else {
    alert('Debes ingresar el nombre del gasto y la cantidad.');
  }

}

let agregarPresupuesto = () => {
  let inputPresupuesto = document.getElementById('inputPresupuesto');
  let montoIngresado = inputPresupuesto.value;
  let montoString = montoIngresado.toString();
  montoIngresado = montoString.replace('.', '');
  if (montoIngresado != '' && montoIngresado > 0) {
    pre = parseInt(presupuesto.innerHTML) + parseInt(montoIngresado);
    presupuesto.innerText = pre;
    inputPresupuesto.value = '';
    saldoP.innerHTML = parseInt(saldoP.innerHTML) + parseInt(montoIngresado);
  } else {
    alert('Debes ingresar un monto válido para agregar presupuesto.');
    inputPresupuesto.value = '';
  }
}

function crearObjeto(nombre, valor) {
  let gasto = new Object();
  gasto.nombre = nombre;
  gasto.valor = valor;
  gastos.push(gasto);
}

function agregarGasto(valor) {
  let nombreInput = document.getElementById('inputNombreGasto');
  let valorInput = document.getElementById('inputCantidadGasto');
  if (parseInt(saldoP.innerHTML) >= parseInt(valor)) {
    gas = parseInt(gastosP.innerText) + parseInt(valor);
    gastosP.innerText = gas;
    nombreInput.value = '';
    valorInput.value = '';
    saldoP.innerHTML = parseInt(saldoP.innerHTML) - parseInt(valor);
    mostrarGastosTabla();
  } else {
    alert('El gasto a registrar es mayor al saldo.');
    nombreInput.value = '';
    valorInput.value = '';
  }

}

function mostrarGastosTabla() {
  contenido.innerHTML = '';
  for (let item of gastos) {
    let namename = `${item.nombre}`;
    let valorValor = `${item.valor}`;
    contenido.innerHTML +=
      `<tr id="${item.nombre}${item.valor}">
        <td>${item.nombre}</td>
        <td>$${item.valor}</td>
        <td><div class="text-primary me-2 btn" onclick="borrarfila('${namename}',${valorValor})" ><i class="bi bi-trash-fill"></i></div></td>
       </tr>`;
  }
}

function borrarfila(name, valorValor) {
  let idTr = name + valorValor.toString();
  document.getElementById(idTr).remove();
  gastos = gastos.filter(value => value != gastos[gastos.length - 1]);
  gas = parseInt(gastosP.innerText) - parseInt(valorValor);
  gastosP.innerText = gas;
  saldoP.innerHTML = parseInt(saldoP.innerHTML) + parseInt(valorValor);
}